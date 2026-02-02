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
        <div className="space-y-6 lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-gold-accent/10">
               <Sparkles className="h-5 w-5 text-gold-accent" />
            </div>
            <h2 className="font-display text-xl font-bold tracking-tight text-slate-800">Destaques da Semana</h2>
          </div>

          {destaques.map((item, index) => (
            <Card
              key={item.id}
              className={
                index === 0
                  ? 'flex items-center gap-6 border-gold-accent/40 bg-gradient-to-r from-gold-accent/5 to-transparent p-6 shadow-md'
                  : 'flex items-center gap-6 p-6 border-gray-100 hover:border-gray-200 hover:shadow-md transition-all'
              }
            >
              <div
                className={
                  index === 0
                    ? 'flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gold-accent text-white shadow-lg shadow-gold-accent/30'
                    : 'flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-marian-blue'
                }
              >
                <Sparkles className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-slate-800">
                    {item.title}
                  </h3>
                  {item.badge && (
                    <span className="rounded-full border border-gold-accent/30 bg-gold-accent/15 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-gold-accent">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-50 text-slate-400 opacity-0 transition-all group-hover:opacity-100 group-hover:bg-marian-blue group-hover:text-white">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <div className="p-1.5 rounded-lg bg-gray-100">
                <History className="h-5 w-5 text-slate-500" />
            </div>
            <h2 className="font-display text-xl font-bold tracking-tight text-slate-800">Recentes</h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
            {recentes.map((item) => {
              const Icon = recentIconMap[item.type as keyof typeof recentIconMap] ?? FileText;
              return (
                <div
                  key={item.title}
                  className="group flex items-center gap-4 border-b border-gray-50 px-5 py-4 last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-slate-400 group-hover:bg-white group-hover:text-marian-blue group-hover:shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-700 group-hover:text-marian-blue">{item.title}</p>
                    <p className="text-xs text-slate-400 font-medium">{item.time}</p>
                  </div>
                </div>
              );
            })}
            <button className="flex w-full items-center justify-center gap-2 bg-gray-50 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 transition-colors hover:bg-gray-100 hover:text-marian-blue">
              Ver todo o histórico
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
