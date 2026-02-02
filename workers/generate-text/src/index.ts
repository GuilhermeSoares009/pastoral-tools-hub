type Env = {
  AI: Ai;
  RATE_LIMIT: KVNamespace;
  ALLOWED_ORIGIN: string;
};

const RATE_LIMIT_WINDOW_SECONDS = 60;
const RATE_LIMIT_MAX = 20;

const corsHeaders = (origin: string) => ({
  'Access-Control-Allow-Origin': origin,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
});

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = env.ALLOWED_ORIGIN ?? '*';

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers: corsHeaders(origin) });
    }

    const ip = request.headers.get('CF-Connecting-IP') ?? 'anonymous';
    const key = `rate:${ip}`;

    const current = await env.RATE_LIMIT.get(key);
    const count = current ? Number.parseInt(current, 10) : 0;
    if (count >= RATE_LIMIT_MAX) {
      return new Response('Rate limit exceeded', { status: 429, headers: corsHeaders(origin) });
    }
    await env.RATE_LIMIT.put(key, String(count + 1), {
      expirationTtl: RATE_LIMIT_WINDOW_SECONDS,
    });

    const body = (await request.json().catch(() => null)) as null | {
      prompt?: string;
      context?: string;
    };

    if (!body?.prompt) {
      return new Response('Invalid payload', { status: 400, headers: corsHeaders(origin) });
    }

    const prompt = `Você é um assistente pastoral. Gere um texto breve, respeitoso e sereno.\n\nTema: ${body.prompt}\nContexto: ${body.context ?? ''}`;

    const response = await env.AI.run('@cf/meta/llama-2-7b-chat-int8', {
      messages: [{ role: 'user', content: prompt }],
    });

    return new Response(JSON.stringify({ text: response.response }), {
      status: 200,
      headers: {
        ...corsHeaders(origin),
        'Content-Type': 'application/json',
      },
    });
  },
};
