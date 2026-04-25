import Link from 'next/link';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="relative flex min-h-[82vh] items-center justify-center overflow-hidden px-4 py-20">
      <div className="ambient-orb ambient-orb-gold left-[12%] top-[18%] h-40 w-40" />
      <div className="ambient-orb ambient-orb-green right-[12%] bottom-[18%] h-48 w-48" />

      <div className="islamic-panel premium-outline relative z-10 w-full max-w-3xl p-10 text-center shadow-[0_26px_90px_rgba(8,54,41,0.14)] md:p-14">
        <div className="relative z-10">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white text-brand shadow-[0_18px_50px_rgba(8,54,41,0.1)]">
            <CheckCircle2 className="h-12 w-12" />
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-4 py-1.5 text-gold">
            <Sparkles className="h-4 w-4" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
              Submission Received
            </span>
          </div>

          <h1 className="mb-5 bg-gradient-to-r from-brand-dark via-brand to-gold bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Jazakallah Khair!
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-dark/70">
            Your submission has been received successfully. May Allah bless your
            intention and make your journey of seeking sacred knowledge easy and
            beneficial.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/" className="primary-btn w-full px-8 sm:w-auto">
              Return to Homepage
            </Link>

            <Link
              href="/courses"
              className="secondary-btn inline-flex w-full items-center justify-center gap-2 px-8 sm:w-auto"
            >
              Explore Courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}