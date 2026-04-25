import Link from 'next/link';
import { Users, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Program } from '@/src/data/models';

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="surface-card surface-card-hover interactive-card premium-outline group flex h-full flex-col overflow-hidden">
      <div className="relative h-64 overflow-hidden bg-brand-dark/10">
        <img
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/20 to-transparent" />

        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-brand-deep/65 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold backdrop-blur-md">
          <Sparkles className="h-3 w-3" />
          {program.level}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="glass-card rounded-[22px] border border-white/10 px-4 py-3 text-cream">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold/90">
              Featured Program
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7 md:p-8">
        <h3 className="mb-3 text-2xl font-bold text-brand-dark transition-colors duration-300 group-hover:text-brand">
          {program.title}
        </h3>

        <p className="mb-6 flex-grow text-sm leading-7 text-dark/68">
          {program.summary}
        </p>

        <div className="mb-7 rounded-[22px] border border-gold/12 bg-cream/65 p-4">
          <div className="flex items-start justify-between gap-3 border-b border-gold/10 pb-3">
            <span className="flex items-center gap-2 text-xs font-medium text-dark/60">
              <Users className="h-3.5 w-3.5 text-gold" />
              Audience
            </span>
            <span className="text-right text-xs font-semibold leading-6 text-brand-dark">
              {program.audience}
            </span>
          </div>

          <div className="flex items-center justify-between gap-3 pt-3">
            <span className="flex items-center gap-2 text-xs font-medium text-dark/60">
              <Clock className="h-3.5 w-3.5 text-gold" />
              Duration
            </span>
            <span className="text-xs font-semibold text-brand-dark">
              {program.duration}
            </span>
          </div>
        </div>

        <Link
          href={`/courses/${program.slug}`}
          className="primary-btn group inline-flex w-full items-center justify-center gap-2 px-5 py-3.5 text-sm"
        >
          View Details
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}