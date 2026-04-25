'use client';

import Link from 'next/link';
import { Suspense, useState, FormEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { programs } from '@/src/data/mockData';
import { ArrowRight, Send, Sparkles } from 'lucide-react';

interface TitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  description?: string;
}

export function SectionTitle({
  title,
  subtitle,
  alignment = 'center',
  description,
}: TitleProps) {
  const isCenter = alignment === 'center';

  return (
    <div className={cn(isCenter ? 'mx-auto text-center' : 'text-left', 'mb-12')}>
      <div
        className={cn(
          'mb-4 flex items-center gap-3',
          isCenter ? 'justify-center' : 'justify-start'
        )}
      >
        <div className="h-px w-12 bg-gold/45"></div>
        <span className="section-label">{subtitle || 'Darul Qurra'}</span>
        <div className="h-px w-12 bg-gold/45"></div>
      </div>

      <h2 className="text-balance mb-4 text-3xl font-bold text-brand-dark md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            'text-dark/66',
            isCenter ? 'mx-auto max-w-2xl' : 'max-w-xl'
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

interface HeroProps {
  title: string;
  subtitle: string;
  image?: string;
  badge?: string;
}

export function PageHero({
  title,
  subtitle,
  image = 'https://images.unsplash.com/photo-1564683214965-3619addd900d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  badge = 'Since 1969',
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-deep py-28 md:py-36">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt="Islamic Architecture"
          className="h-full w-full scale-[1.04] object-cover opacity-20 mix-blend-screen"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,76,0.18),transparent_20%),linear-gradient(to_bottom,rgba(4,31,25,0.62),rgba(6,39,31,0.96))]"></div>
        <div className="absolute inset-0 bg-grid-fade opacity-[0.06]"></div>
      </div>

      <div className="ambient-orb ambient-orb-gold left-[8%] top-[14%] h-36 w-36"></div>
      <div className="ambient-orb ambient-orb-green right-[10%] top-[18%] h-44 w-44"></div>

      <div className="container-shell relative z-10 text-center">
        <div className="hero-shell premium-outline mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-14">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-gold/90">
            <div className="h-px w-7 bg-gold/45"></div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">
              {badge}
            </span>
            <div className="h-px w-7 bg-gold/45"></div>
          </div>

          <h1 className="text-balance mb-6 text-4xl font-bold tracking-tight text-cream md:text-5xl lg:text-7xl">
            {title}
          </h1>

          <p className="text-balance mx-auto max-w-3xl text-lg leading-8 text-cream/82 md:text-xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container-shell">
        <div className="premium-outline relative overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#0b6a51_0%,#09513f_50%,#06372b_100%)] px-6 py-14 text-center text-cream shadow-[0_24px_80px_rgba(8,54,41,0.22)] md:px-10 md:py-18">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.65) 1px, transparent 0)',
              backgroundSize: '30px 30px',
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,76,0.26),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_20%)]"></div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-gold">
              <Sparkles className="h-4 w-4" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">
                Begin Today
              </span>
            </div>

            <h2 className="text-balance mb-4 text-3xl font-bold text-cream md:text-5xl">
              Ready to Begin Your Quranic Journey?
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-cream/80">
              Join our established community of learners. Admissions are open for
              upcoming batches in our Hifz and Tajweed programs.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/admissions" className="gold-btn group px-8">
                Apply for Admission
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-cream backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const fieldClassName =
  'w-full rounded-[20px] border border-sand/80 bg-white/90 px-4 py-3.5 shadow-sm shadow-brand/5 backdrop-blur-sm';
const labelClassName = 'text-sm font-semibold text-dark/80';

function ApplicationFormBase() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultCourse = searchParams.get('course') || '';
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/thank-you');
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className={labelClassName}>Student Full Name *</label>
          <input
            required
            type="text"
            className={fieldClassName}
            placeholder="e.g. Muhammad Ahmad"
          />
        </div>
        <div className="space-y-2">
          <label className={labelClassName}>Parent / Guardian Name *</label>
          <input
            required
            type="text"
            className={fieldClassName}
            placeholder="e.g. Tariq Khan"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className={labelClassName}>Phone Number *</label>
          <input
            required
            type="tel"
            className={fieldClassName}
            placeholder="+92 XXX XXXXXXX"
          />
        </div>
        <div className="space-y-2">
          <label className={labelClassName}>WhatsApp Number *</label>
          <input
            required
            type="tel"
            className={fieldClassName}
            placeholder="+92 XXX XXXXXXX"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2 md:col-span-1">
          <label className={labelClassName}>Email Address</label>
          <input
            type="email"
            className={fieldClassName}
            placeholder="email@example.com"
          />
        </div>
        <div className="space-y-2">
          <label className={labelClassName}>Student Age *</label>
          <input
            required
            type="number"
            min="4"
            max="90"
            className={fieldClassName}
            placeholder="e.g. 12"
          />
        </div>
        <div className="space-y-2">
          <label className={labelClassName}>City of Residence *</label>
          <input
            required
            type="text"
            className={fieldClassName}
            placeholder="e.g. Peshawar"
          />
        </div>
      </div>

      <div className="grid gap-6 border-t border-sand/70 pt-6 md:grid-cols-3">
        <div className="space-y-2">
          <label className={labelClassName}>Desired Course *</label>
          <select required defaultValue={defaultCourse} className={fieldClassName}>
            <option value="" disabled>
              Select a program...
            </option>
            {programs.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className={labelClassName}>Current Quran Level *</label>
          <select required className={fieldClassName}>
            <option value="" disabled>
              Select level...
            </option>
            <option value="beginner">
              Absolute Beginner (No alphabet knowledge)
            </option>
            <option value="basic">
              Basic (Can read slowly / with difficulty)
            </option>
            <option value="fluent">Fluent (Nazra reader)</option>
            <option value="hafiz_partial">Partial Hafiz</option>
            <option value="hafiz_full">Complete Hafiz</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className={labelClassName}>Preferred Timing *</label>
          <select required className={fieldClassName}>
            <option value="" disabled>
              Select timing...
            </option>
            <option value="morning">Morning (8 AM - 1 PM)</option>
            <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
            <option value="evening">Evening (6 PM - 8 PM)</option>
            <option value="weekend">Weekends only</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className={labelClassName}>
          Additional Message or Questions (Optional)
        </label>
        <textarea
          rows={4}
          className={`${fieldClassName} resize-none`}
          placeholder="Any specific needs or questions..."
        ></textarea>
      </div>

      <div className="rounded-[24px] border border-gold/12 bg-cream/70 p-4 md:p-5">
        <div className="flex items-start gap-3">
          <input
            required
            type="checkbox"
            id="consent"
            className="mt-1 h-5 w-5 rounded border-sand text-brand"
          />
          <label
            htmlFor="consent"
            className="cursor-pointer text-sm leading-7 text-dark/70"
          >
            I confirm that the information provided is accurate. I understand
            that admission is subject to an entrance assessment and seat
            availability at Darul Qurra Peshawar.
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="primary-btn group flex w-full items-center justify-center gap-2 py-4 text-lg disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          'Submitting Application...'
        ) : (
          <>
            Submit Official Application
            <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}

export function ApplicationForm() {
  return (
    <Suspense
      fallback={
        <div className="flex h-40 items-center justify-center text-dark/50">
          Loading application form...
        </div>
      }
    >
      <ApplicationFormBase />
    </Suspense>
  );
}

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}