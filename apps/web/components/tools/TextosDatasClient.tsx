'use client';

import * as React from 'react';
import { Check, Clipboard, Search } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import textos from '@/lib/data/textos-datas-catolicas.json';

const categories = [
  { value: 'todas', label: 'Todas' },
  { value: 'liturgico', label: 'Litúrgico' },
  { value: 'familia', label: 'Família' },
  { value: 'padres', label: 'Padres' },
  { value: 'paróquia', label: 'Paróquia' },
];

export function TextosDatasClient() {
  const [query, setQuery] = React.useState('');
  const [category, setCategory] = React.useState('todas');
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const filtered = textos.filter((item) => {
    const matchesCategory = category === 'todas' ? true : item.category === category;
    const normalizedQuery = query.trim().toLowerCase();
    const matchesQuery = normalizedQuery
      ? `${item.title} ${item.body}`.toLowerCase().includes(normalizedQuery)
      : true;
    return matchesCategory && matchesQuery;
  });

  const handleCopy = async (id: string, body: string) => {
    try {
      await navigator.clipboard.writeText(body);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 2000);
    } catch {
      setCopiedId(null);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-accent">
          Banco de textos
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-text-primary">
          Textos Prontos para Datas Católicas
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-text-secondary">
          Mensagens breves para uso em redes sociais, avisos e cartões pastorais.
        </p>
      </section>

      <Card className="grid gap-4 p-6 md:grid-cols-[1.5fr_1fr]">
        <label className="flex items-center gap-2 rounded-md border border-light-gray bg-white px-3 py-2 text-sm text-text-secondary">
          <Search className="h-4 w-4" />
          <input
            className="w-full bg-transparent text-sm text-text-primary outline-none"
            placeholder="Buscar por tema ou palavra-chave"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <select
          className="h-11 rounded-md border border-light-gray bg-white px-3 text-sm"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {filtered.map((item) => (
          <Card key={item.id} className="flex h-full flex-col gap-4 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-accent">
                  {item.category}
                </p>
                <h2 className="mt-2 font-display text-lg font-semibold text-text-primary">
                  {item.title}
                </h2>
              </div>
              <Button
                variant="outline"
                onClick={() => handleCopy(item.id, item.body)}
                className="shrink-0"
              >
                {copiedId === item.id ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                {copiedId === item.id ? 'Copiado' : 'Copiar'}
              </Button>
            </div>
            <p className="text-sm text-text-secondary">{item.body}</p>
          </Card>
        ))}
        {!filtered.length && (
          <Card className="p-6 text-center text-sm text-text-secondary">
            Nenhum texto encontrado para o filtro atual.
          </Card>
        )}
      </div>
    </div>
  );
}
