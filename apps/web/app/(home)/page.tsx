import { Sparkles, ArrowRight, History, FileText, Image, Music } from 'lucide-react';

import { ToolGrid } from '@/components/tools/ToolGrid';
import { Card } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
      <section>
        <div className="mb-6 border-l-4 border-gold-accent pl-4">
          <h1 className="font-display text-2xl font-semibold text-text-primary">
            Ferramentas Populares
          </h1>
          <p className="mt-1 text-sm text-text-secondary">
            Recursos essenciais para a vida pastoral e litúrgica.
          </p>
        </div>
        <ToolGrid />
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gold-accent" />
            <h2 className="font-display text-xl font-semibold text-text-primary">Destaques da Semana</h2>
          </div>
          <Card className="flex items-center gap-5 border-gold-accent/40 p-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-md bg-gold-accent text-white">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-base font-semibold text-text-primary">
                  Textos Prontos para Datas Católicas
                </h3>
                <span className="rounded-full border border-gold-accent/30 bg-gold-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase text-gold-accent">
                  Novo
                </span>
              </div>
              <p className="mt-1 text-sm text-text-secondary">
                Mensagens para o dia do Padre, dia dos Avós, Padroeiros e outras datas magnas.
              </p>
            </div>
            <span className="rounded-full bg-light-gray p-2 text-text-primary">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Card>

          {[
            {
              title: 'Verificador de Texto Litúrgico',
              description:
                'Valide se as orações e leituras do seu folheto estão de acordo com o Missal Romano.',
            },
            {
              title: 'Checklist para Casamento',
              description:
                'Organize a documentação e os detalhes da cerimônia religiosa de casamento.',
            },
          ].map((item) => (
            <Card key={item.title} className="flex items-center gap-5 p-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-md bg-marian-blue/10 text-marian-blue">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base font-semibold text-text-primary">
                  {item.title}
                </h3>
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
            {[
              { title: 'Modelo de Ata de Reunião', time: 'Adicionado há 2 dias', icon: FileText },
              { title: 'Templates Canva para Dízimo', time: 'Adicionado há 4 dias', icon: Image },
              { title: 'Cifras para Adoração', time: 'Adicionado há 1 semana', icon: Music },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3 border-b border-light-gray px-4 py-3 last:border-b-0">
                <item.icon className="h-4 w-4 text-text-secondary" />
                <div>
                  <p className="text-sm font-semibold text-text-primary">{item.title}</p>
                  <p className="text-xs text-text-secondary">{item.time}</p>
                </div>
              </div>
            ))}
            <button className="flex w-full items-center justify-center gap-2 bg-light-gray px-3 py-2 text-xs font-bold text-marian-blue transition-colors hover:text-gold-accent">
              Ver todo o histórico
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
