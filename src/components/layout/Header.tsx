'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Faculty', path: '/faculty' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-500',
        isScrolled ? 'pt-3' : 'pt-4'
      )}
    >
      <div className="container-shell">
        <div
          className={cn(
            'premium-outline relative overflow-hidden rounded-[30px] transition-all duration-500',
            isScrolled
              ? 'bg-white/72 shadow-[0_24px_70px_rgba(8,54,41,0.14)] backdrop-blur-2xl'
              : 'bg-white/62 shadow-[0_20px_60px_rgba(8,54,41,0.1)] backdrop-blur-xl'
          )}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(202,162,77,0.08),transparent_22%,rgba(13,107,83,0.04))]" />
          <div className="relative flex items-center justify-between gap-4 px-4 py-3 md:px-5 lg:px-6">
            <Link href="/" className="group flex min-w-0 items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0d6b53,#094536)] text-gold shadow-[0_16px_32px_rgba(13,107,83,0.22)] transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_20px_40px_rgba(13,107,83,0.3)]">
                <span className="font-serif text-lg font-bold">DQ</span>
                <span className="absolute inset-[4px] rounded-full border border-gold/35" />
              </div>

              <div className="min-w-0">
                <h1 className="truncate font-serif text-lg font-bold leading-tight text-brand-dark md:text-xl">
                  Darul Quran
                </h1>
                <p className="truncate text-[10px] font-semibold uppercase tracking-[0.28em] text-brand/70 md:text-[11px]">
                  Peshawar
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center rounded-full border border-brand/10 bg-brand/5 p-1.5 backdrop-blur-md">
              {navItems.map((item) => {
                const active = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      'relative rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300',
                      active
                        ? 'bg-white text-brand shadow-[0_8px_24px_rgba(8,54,41,0.08)]'
                        : 'text-dark/70 hover:bg-white/80 hover:text-brand'
                    )}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {active && (
                      <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-gold/20" />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 md:gap-3">
              <Link
                href="/donate"
                className="hidden rounded-full px-4 py-2 text-sm font-semibold text-brand transition-all duration-300 hover:bg-brand/5 hover:text-brand-dark sm:inline-flex"
              >
                Donate
              </Link>

              <Link
                href="/admissions"
                className="group hidden items-center gap-2 rounded-full bg-[linear-gradient(135deg,#0d6b53,#095640)] px-5 py-2.5 text-sm font-semibold text-cream shadow-[0_16px_30px_rgba(13,107,83,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_38px_rgba(13,107,83,0.28)] sm:inline-flex"
              >
                Apply Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>

              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand/10 bg-white/85 text-brand-dark shadow-sm transition-all duration-300 hover:bg-white lg:hidden"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Toggle navigation"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          'container-shell overflow-hidden transition-all duration-500 lg:hidden',
          isOpen ? 'max-h-[520px] pt-3 opacity-100' : 'max-h-0 pt-0 opacity-0'
        )}
      >
        <div className="premium-outline relative overflow-hidden rounded-[28px] bg-white/88 p-4 shadow-[0_24px_70px_rgba(8,54,41,0.14)] backdrop-blur-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(202,162,77,0.08),transparent_22%,rgba(13,107,83,0.05))]" />
          <div className="relative">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const active = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={cn(
                      'rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300',
                      active
                        ? 'bg-[linear-gradient(135deg,#0d6b53,#095640)] text-cream shadow-[0_14px_24px_rgba(13,107,83,0.2)]'
                        : 'bg-cream/60 text-dark/75 hover:bg-brand/5 hover:text-brand'
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <Link
                href="/donate"
                className="rounded-2xl px-4 py-3 text-sm font-medium text-dark/75 transition-all duration-300 hover:bg-brand/5 hover:text-brand"
              >
                Donate
              </Link>
            </nav>

            <div className="mt-4 border-t border-brand/10 pt-4">
              <Link
                href="/admissions"
                className="group flex items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#0d6b53,#095640)] px-5 py-3.5 text-sm font-semibold text-cream shadow-[0_16px_30px_rgba(13,107,83,0.22)] transition-all duration-300 hover:shadow-[0_22px_38px_rgba(13,107,83,0.28)]"
              >
                Apply for Admission
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}