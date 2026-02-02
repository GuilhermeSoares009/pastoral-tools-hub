'use client';

import * as React from 'react';
import { Check, Clipboard, Music } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import cantos from '@/lib/data/cantos.json';

const tempos = [
  { value: 'comum', label: 'Tempo Comum' },
  { value: 'advento', label: 'Advento' },
  { value: 'natal', label: 'Natal' },
  { value: 'quaresma', label: 'Quaresma' },
  { value: 'pascoa', label: 'Páscoa' },
  { value: 'pentecostes', label: 'Pentecostes' },
];

const estilos = [
  { value: 'todos', label: 'Todos os estilos' },
  { value: 'tradicional', label: 'Tradicional' },
  { value: 'contemporaneo', label: 'Contemporâneo' },
];

const moments = [
  { value: 'entrada', label: 'Entrada' },
  { value: 'ofertorio', label: 'Ofertório' },
  { value: 'comunhao', label: 'Comunhão' },
  { value: 'acao_de_gracas', label: 'Ação de graças' },
  { value: 'saida', label: 'Saída' },
];

type GeneratedItem = {
  moment: string;
  title: string;
};

export function RepertorioClient() {
  const [tempo, setTempo] = React.useState('comum');
  const [estilo, setEstilo] = React.useState('todos');
  const [resultado, setResultado] = React.useState<GeneratedItem[]>([]);
  const [copied, setCopied] = React.useState(false);

  const generate = () => {
    const novoResultado = moments.map((moment) => {
      const pool = cantos.filter((item) => {
        const tempoOk = item.tempo.includes(tempo) || item.tempo.includes('comum');
        const estiloOk = estilo === 'todos' ? true : item.style === estilo;
        return item.moment === moment.value && tempoOk && estiloOk;
      });
      const pick = pool[Math.floor(Math.random() * pool.length)];
      return {
        moment: moment.label,
        title: pick?.title ?? 'Sugestão livre do ministério',
      };
    });
    setResultado(novoResultado);
  };

  const handleCopy = async () => {
    if (!resultado.length) return;
    const text = resultado.map((item) => `${item.moment}: ${item.title}`).join('\n');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-accent">
          Ferramenta pastoral
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-text-primary">
          Gerador de Repertório para Missa
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-text-secondary">
          Selecione o tempo litúrgico e o estilo desejado para gerar uma sugestão simples de
          repertório. Ajuste livremente conforme a realidade da comunidade.
        </p>
      </section>

      <Card className="grid gap-6 p-6 md:grid-cols-3">
        <label className="flex flex-col gap-2 text-sm font-semibold text-text-primary">
          Tempo litúrgico
          <select
            className="h-11 rounded-md border border-light-gray bg-white px-3 text-sm"
            value={tempo}
            onChange={(event) => setTempo(event.target.value)}
          >
            {tempos.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm font-semibold text-text-primary">
          Estilo musical
          <select
            className="h-11 rounded-md border border-light-gray bg-white px-3 text-sm"
            value={estilo}
            onChange={(event) => setEstilo(event.target.value)}
          >
            {estilos.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <div className="flex items-end">
          <Button className="w-full" onClick={generate}>
            <Music className="h-4 w-4" />
            Gerar repertório
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-lg font-semibold text-text-primary">
            Sugestão gerada
          </h2>
          <Button variant="outline" onClick={handleCopy}>
            {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
            {copied ? 'Copiado!' : 'Copiar lista'}
          </Button>
        </div>
        <ul className="mt-4 space-y-3 text-sm text-text-secondary">
          {resultado.length ? (
            resultado.map((item) => (
              <li key={item.moment} className="flex items-center justify-between gap-4">
                <span className="font-semibold text-text-primary">{item.moment}</span>
                <span>{item.title}</span>
              </li>
            ))
          ) : (
            <li>Gere um repertório para visualizar as sugestões.</li>
          )}
        </ul>
      </Card>
    </div>
  );
}
