import Link from 'next/link';
import { Facebook, Youtube, MapPin, Phone, Mail, Heart, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-gold/20 bg-brand-deep text-cream/80">
      <div
        className="absolute inset-0 opacity-18"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(201,162,76,0.32) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,76,0.12),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_20%)]" />

      <div className="container-shell relative py-20">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-cream font-serif text-xl font-bold text-brand shadow-lg">
                DQ
                <span className="absolute inset-[4px] rounded-full border border-gold/40" />
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold leading-tight text-cream">
                  Darul Quran
                </h2>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                  Peshawar
                </p>
              </div>
            </div>

            <p className="mb-6 max-w-sm text-sm leading-7 text-cream/72">
              Established in 1969, serving the community with trust,
              scholarship, and spiritual care through Quran education, Tajweed,
              and Qira&apos;at.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-gold hover:text-brand-dark"
              >
                <Facebook className="h-4 w-4" />
              </a>

              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-gold hover:text-brand-dark"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-gold">
              <Sparkles className="h-4 w-4" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                Explore
              </span>
            </div>

            <h3 className="mb-5 font-serif text-lg font-semibold text-gold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="transition-colors hover:text-cream">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="transition-colors hover:text-cream">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="transition-colors hover:text-cream">
                  Our Faculty
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="transition-colors hover:text-cream">
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link href="/events" className="transition-colors hover:text-cream">
                  Announcements
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="transition-colors hover:text-cream">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-gold">
              <Sparkles className="h-4 w-4" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                Learn
              </span>
            </div>

            <h3 className="mb-5 font-serif text-lg font-semibold text-gold">
              Programs
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/courses/nazra-quran" className="transition-colors hover:text-cream">
                  Nazra Quran
                </Link>
              </li>
              <li>
                <Link href="/courses/tajweed-program" className="transition-colors hover:text-cream">
                  Tajweed Program
                </Link>
              </li>
              <li>
                <Link href="/courses/hifz-program" className="transition-colors hover:text-cream">
                  Hifz Program
                </Link>
              </li>
              <li>
                <Link href="/courses/qiraat-specialization" className="transition-colors hover:text-cream">
                  Qira&apos;at Specialization
                </Link>
              </li>
              <li>
                <Link href="/courses/short-courses" className="transition-colors hover:text-cream">
                  Short Courses
                </Link>
              </li>
              <li>
                <Link href="/courses/adult-learning" className="transition-colors hover:text-cream">
                  Adult Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-gold">
              <Sparkles className="h-4 w-4" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                Connect
              </span>
            </div>

            <h3 className="mb-5 font-serif text-lg font-semibold text-gold">
              Contact Us
            </h3>

            <ul className="mb-6 space-y-4 text-sm text-cream/74">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>Darul Quran, University Road, Peshawar, KP, Pakistan</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold" />
                <span>+92 91 123 4567</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-gold" />
                <span>info@darulquran.edu.pk</span>
              </li>
            </ul>

            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-2.5 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold hover:text-brand-dark"
            >
              <Heart className="h-4 w-4" />
              Support Our Work
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-cream/60 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Darul Quran Peshawar. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-cream">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-cream">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}