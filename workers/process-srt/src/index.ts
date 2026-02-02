type Env = {
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

const parseSrt = (input: string) => {
  return input
    .split(/\n\s*\n/)
    .map((block) => block.split('\n').slice(2).join(' ').trim())
    .filter(Boolean);
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin') ?? '';
    const allowedOrigins = [
      'https://ferramentascatolicas.com.br',
      'http://localhost:3000',
    ];

    const isAllowed = allowedOrigins.includes(origin);
    const corsHeaders = {
      'Access-Control-Allow-Origin': isAllowed ? origin : allowedOrigins[0],
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405, headers: corsHeaders });
    }

    // Payload size limit (50KB for SRT)
    const storedContentLength = request.headers.get('content-length');
    if (storedContentLength && parseInt(storedContentLength) > 51200) {
      return new Response('Payload too large', { status: 413, headers: corsHeaders });
    }

    const ip = request.headers.get('CF-Connecting-IP') ?? 'anonymous';
    const key = `rate:${ip}`;
    const current = await env.RATE_LIMIT.get(key);
    const count = current ? Number.parseInt(current, 10) : 0;

    if (count >= RATE_LIMIT_MAX) {
      return new Response('Rate limit exceeded', { status: 429, headers: corsHeaders });
    }

    await env.RATE_LIMIT.put(key, String(count + 1), {
      expirationTtl: RATE_LIMIT_WINDOW_SECONDS,
    });

    const body = (await request.json().catch(() => null)) as null | {
      srt?: string;
    };

    if (!body?.srt) {
      return new Response('Invalid payload', { status: 400, headers: corsHeaders });
    }

    if (body.srt.length > 50000) {
      return new Response('SRT content too long', { status: 400, headers: corsHeaders });
    }

    const lines = parseSrt(body.srt);

    return new Response(JSON.stringify({ lines }), {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  },
};
