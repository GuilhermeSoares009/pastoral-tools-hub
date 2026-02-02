'use client';

import * as React from 'react';
import { CheckCircle2, RotateCcw } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import checklist from '@/lib/data/checklist-casamento.json';

export function ChecklistCasamentoClient() {
  const [checked, setChecked] = React.useState<Record<string, boolean>>({});

  const total = checklist.reduce((acc, section) => acc + section.items.length, 0);
  const done = Object.values(checked).filter(Boolean).length;

  const toggleItem = (key: string) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const reset = () => setChecked({});

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-accent">
          Checklist pastoral
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-text-primary">
          Checklist para Casamento na Igreja
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-text-secondary">
          Organize o processo com antecedência, conferindo documentos, preparação espiritual e
          detalhes do dia da celebração.
        </p>
      </section>

      <Card className="flex flex-wrap items-center justify-between gap-4 p-6">
        <div className="flex items-center gap-3 text-sm text-text-secondary">
          <CheckCircle2 className="h-4 w-4 text-marian-blue" />
          <span>
            {done} de {total} itens concluídos
          </span>
        </div>
        <Button variant="outline" onClick={reset}>
          <RotateCcw className="h-4 w-4" />
          Reiniciar checklist
        </Button>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {checklist.map((section, sectionIndex) => (
          <Card key={section.section} className="p-6">
            <h2 className="font-display text-lg font-semibold text-text-primary">
              {section.section}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              {section.items.map((item, itemIndex) => {
                const key = `${sectionIndex}-${itemIndex}`;
                const isChecked = checked[key] ?? false;
                return (
                  <li key={item} className="flex items-start gap-3">
                    <input
                      className="mt-1 h-4 w-4 accent-marian-blue"
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleItem(key)}
                    />
                    <span className={isChecked ? 'text-text-primary line-through' : ''}>
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
