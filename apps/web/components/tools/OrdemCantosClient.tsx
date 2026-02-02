'use client';

import * as React from 'react';
import { Check, Clipboard, Info } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import ordemCantos from '@/lib/data/ordem-cantos.json';

export function OrdemCantosClient() {
  const [copied, setCopied] = React.useState(false);

  const fullText = React.useMemo(() => {
    const sections = ordemCantos.sections
      .map((section) => {
        const items = section.items
          .map((item) => `- ${item.label}${item.note ? ` (${item.note})` : ''}`)
          .join('\n');
        return `${section.title}\n${items}`;
      })
      .join('\n\n');
    return `${ordemCantos.title}\n\n${sections}`;
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
      <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-accent">
            Guia pastoral
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-text-primary">
            {ordemCantos.title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-text-secondary">
            Ordem sugerida para organizar o repertório musical da missa, com atenção ao tempo
            litúrgico e às partes essenciais da celebração.
          </p>
        </div>
        <Button variant="outline" className="self-start" onClick={handleCopy}>
          {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
          {copied ? 'Copiado!' : 'Copiar ordem completa'}
        </Button>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {ordemCantos.sections.map((section) => (
          <Card key={section.title} className="p-6">
            <h2 className="font-display text-lg font-semibold text-text-primary">
              {section.title}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              {section.items.map((item) => (
                <li key={item.label} className="flex flex-col gap-1">
                  <span className="font-semibold text-text-primary">{item.label}</span>
                  {item.note && <span className="text-xs text-text-secondary">{item.note}</span>}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </section>

      <Card className="flex flex-col gap-4 border-marian-blue/20 bg-warm-white p-6">
        <div className="flex items-center gap-2 text-marian-blue">
          <Info className="h-4 w-4" />
          <p className="text-sm font-semibold">Observações pastorais</p>
        </div>
        <ul className="space-y-2 text-sm text-text-secondary">
          {ordemCantos.observations.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
