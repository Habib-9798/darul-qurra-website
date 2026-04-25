import Link from 'next/link';
import { Home, Compass, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative flex min-h-[82vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="ambient-orb ambient-orb-gold left-[14%] top-[18%] h-40 w-40" />
      <div className="ambient-orb ambient-orb-green right-[14%] bottom-[16%] h-48 w-48" />

      <div className="islamic-panel premium-outline relative z-10 w-full max-w-2xl p-10 md:p-14">
        <div className="relative z-10">
          <div className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-cream shadow-[0_18px_50px_rgba(8,54,41,0.1)]">
            <Compass className="h-16 w-16 text-brand-dark opacity-55" />
            <div className="absolute -bottom-2 -right-2 flex h-14 w-14 items-center justify-center rounded-full border-4 border-cream bg-brand font-serif text-2xl font-bold text-cream shadow-lg">
              404
            </div>
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-4 py-1.5 text-gold">
            <Sparkles className="h-4 w-4" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
              Page Missing
            </span>
          </div>

          <h2 className="mb-4 text-4xl font-bold text-brand-dark md:text-5xl">
            Page Not Found
          </h2>

          <p className="mx-auto mb-10 max-w-md text-lg leading-8 text-dark/70">
            It seems the page you are looking for does not exist, has been moved,
            or is no longer available.
          </p>

          <Link href="/" className="primary-btn inline-flex gap-2 px-8 py-4">
            <Home className="h-5 w-5" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}