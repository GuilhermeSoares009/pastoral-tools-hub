'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, History, FileText, Image, Music } from 'lucide-react';

import { ToolGrid } from '@/components/tools/ToolGrid';
import { Card } from '@/components/ui/Card';
import { useToolSearch } from '@/components/tools/ToolSearchContext';
import ferramentas from '@/lib/data/ferramentas.json';
import destaques from '@/lib/data/destaques.json';
import recentes from '@/lib/data/recentes.json';

const recentIconMap = {
  documento: FileText,
  imagem: Image,
  musica: Music,
};

export function HomeCatalog() {
  const { query, category } = useToolSearch();

  const filteredPopularTools = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return ferramentas
      .filter((tool) => tool.popular)
      .filter((tool) => (category === 'todas' ? true : tool.category === category))
      .filter((tool) => {
        if (!normalizedQuery) return true;
        const haystack = [
          tool.title,
          tool.description,
          tool.tags?.join(' ') ?? '',
        ]
          .join(' ')
          .toLowerCase();
        return haystack.includes(normalizedQuery);
      });
  }, [query, category]);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-6 border-l-4 border-gold-accent pl-4">
          <h1 className="font-display text-2xl font-semibold text-text-primary">
            Ferramentas Populares
          </h1>
          <p className="mt-1 text-sm text-text-secondary">
            Recursos essenciais para a vida pastoral e litúrgica.
          </p>
        </div>
        {filteredPopularTools.length ? (
          <ToolGrid items={filteredPopularTools} />
        ) : (
          <Card className="border-dashed border-marian-blue/30 bg-white p-6 text-center text-sm text-text-secondary">
            Nenhuma ferramenta encontrada para a busca atual.
          </Card>
        )}
      </motion.section>

      <motion.section
        className="grid gap-8 lg:grid-cols-3"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="space-y-4 lg:col-span-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gold-accent" />
            <h2 className="font-display text-xl font-semibold text-text-primary">Destaques da Semana</h2>
          </div>

          {destaques.map((item, index) => (
            <Card
              key={item.id}
              className={
                index === 0
                  ? 'flex items-center gap-5 border-gold-accent/40 p-4'
                  : 'flex items-center gap-5 p-4'
              }
            >
              <div
                className={
                  index === 0
                    ? 'flex h-14 w-14 items-center justify-center rounded-md bg-gold-accent text-white'
                    : 'flex h-14 w-14 items-center justify-center rounded-md bg-marian-blue/10 text-marian-blue'
                }
              >
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-base font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  {item.badge && (
                    <span className="rounded-full border border-gold-accent/30 bg-gold-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase text-gold-accent">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-text-secondary">{item.description}</p>
              </div>
              <span className="rounded-full bg-light-gray p-2 text-text-primary">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <History className="h-5 w-5 text-text-secondary" />
            <h2 className="font-display text-xl font-semibold text-text-primary">Recentes</h2>
          </div>
          <div className="overflow-hidden rounded-md border border-light-gray bg-white shadow-soft">
            {recentes.map((item) => {
              const Icon = recentIconMap[item.type as keyof typeof recentIconMap] ?? FileText;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-3 border-b border-light-gray px-4 py-3 last:border-b-0"
                >
                  <Icon className="h-4 w-4 text-text-secondary" />
                  <div>
                    <p className="text-sm font-semibold text-text-primary">{item.title}</p>
                    <p className="text-xs text-text-secondary">{item.time}</p>
                  </div>
                </div>
              );
            })}
            <button className="flex w-full items-center justify-center gap-2 bg-light-gray px-3 py-2 text-xs font-bold text-marian-blue transition-colors hover:text-gold-accent">
              Ver todo o histórico
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
