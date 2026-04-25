import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Users,
  Shield,
  GraduationCap,
  MapPin,
  Phone,
  Heart,
  Clock,
  Play,
  PlayCircle,
  Calendar,
  Tag,
  Quote,
  Sparkles,
  BadgeCheck,
} from 'lucide-react';
import {
  programs,
  faculty,
  announcements,
  testimonials,
} from '@/src/data/mockData';
import { SectionTitle, CTABanner } from '@/src/components/ui/Shared';
import { ProgramCard } from '@/src/components/ui/ProgramCard';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* 1. Hero */}
      <section className="luxury-dark-section relative flex min-h-[96vh] items-center overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542618837-1d6d63e5b387?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Darul Qurra Architecture"
            className="parallax-soft h-full w-full scale-110 object-cover opacity-30 mix-blend-screen"
            referrerPolicy="no-referrer"
          />

          <div className="floating-dots"></div>
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(4,31,25,0.98)_0%,rgba(7,48,37,0.9)_42%,rgba(4,31,25,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(202,162,77,0.22),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(13,107,83,0.36),transparent_28%),linear-gradient(to_bottom,rgba(4,31,25,0.18),rgba(4,31,25,0.96))]" />
          <div className="absolute inset-0 bg-grid-fade opacity-[0.07]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#041f19] to-transparent" />
        </div>

        <div className="ambient-orb ambient-orb-gold left-[5%] top-[16%] h-52 w-52 opacity-80 blur-3xl" />
        <div className="ambient-orb ambient-orb-green right-[8%] top-[18%] h-72 w-72 opacity-70 blur-3xl" />
        <div className="floating-side absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />

        <div className="container-shell relative z-10 py-24 md:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/8 px-4 py-2 text-gold shadow-[0_0_30px_rgba(202,162,77,0.12)] backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-gold glow-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">
                  Admissions Open 2026
                </span>
              </div>

              <h1 className="text-balance mb-6 text-5xl font-bold leading-[0.9] text-cream drop-shadow-2xl md:text-6xl lg:text-8xl">
                A Legacy of
                <span className="mt-3 block bg-gradient-to-r from-[#F7E7A7] via-gold to-[#C99A4C] bg-clip-text text-transparent">
                  Quranic Excellence
                </span>
              </h1>

              <div className="arabic-divider justify-start">
                <span></span>
              </div>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/84 md:text-xl">
                Dedicated to the preservation and teaching of the Holy Quran
                through Tajweed, Qira&apos;at, and authentic Islamic guidance
                since 1969.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/admissions"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-8 py-3.5 font-semibold text-brand-deep shadow-[0_18px_45px_rgba(202,162,77,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(202,162,77,0.38)]"
                >
                  Apply for Admission
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-8 py-3.5 font-semibold text-cream shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold/35 hover:bg-white/12"
                >
                  <PlayCircle className="h-4 w-4 text-gold" />
                  Explore Programs
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-4 text-sm text-cream/75">
                <div className="flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 backdrop-blur-xl">
                  <Shield className="h-4 w-4 text-gold" />
                  <span>Established 1969</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 backdrop-blur-xl">
                  <BookOpen className="h-4 w-4 text-gold" />
                  <span>Quran • Tajweed • Qira&apos;at</span>
                </div>
              </div>
            </div>

            <div className="hidden animate-fade-right lg:block">
              <div className="luxury-glass-card relative mx-auto max-w-md p-5">
                <div className="absolute -inset-1 -z-10 rounded-[40px] bg-gradient-to-br from-gold/35 via-white/5 to-brand/20 blur-sm" />

                <div className="absolute right-7 top-7 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-brand-deep/60 text-gold shadow-[0_0_30px_rgba(202,162,77,0.2)] backdrop-blur-xl">
                  <Sparkles className="h-4 w-4" />
                </div>

                <div className="relative overflow-hidden rounded-[28px]">
                  <img
                    src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                    alt="Students reading Quran"
                    className="h-[460px] w-full scale-105 object-cover transition-transform duration-700 hover:scale-110"
                    referrerPolicy="no-referrer"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#041f19]/95 via-[#041f19]/15 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="rounded-[24px] border border-white/18 bg-white/12 p-5 text-cream shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                        Our Legacy
                      </p>
                      <h3 className="mb-2 text-2xl font-bold text-cream">
                        Guiding hearts through sacred knowledge
                      </h3>
                      <p className="text-sm leading-7 text-cream/78">
                        A trusted center of Quranic learning with reverence,
                        discipline, and spiritual depth.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="floating-soft absolute -bottom-8 -left-6 max-w-[230px] rounded-[24px] border border-gold/20 bg-cream/95 p-5 shadow-[0_20px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                  <div className="mb-2 flex items-center gap-2 text-gold">
                    <Heart className="h-4 w-4 fill-gold" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                      Community Trust
                    </span>
                  </div>
                  <p className="text-sm font-semibold leading-6 text-brand-dark">
                    Nurturing souls with the light of the Quran for generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section className="relative z-10 -mt-10 pb-6 md:-mt-14 md:pb-10">
        <div className="container-shell">
          <div className="premium-outline reveal-card overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#caa24d,#e7ca8d)] px-4 py-8 shadow-[0_24px_70px_rgba(202,162,77,0.2)] md:px-8">
            <div className="grid grid-cols-2 gap-8 text-center text-brand-dark md:grid-cols-4">
              {[
                ['50+', 'Years Legacy'],
                ['10k+', 'Alumni'],
                ['20+', 'Expert Qaris'],
                ['Authentic', 'Certification'],
              ].map(([value, label]) => (
                <div key={label} className="reveal-card px-2">
                  <h3 className="mb-1 text-3xl font-bold md:text-4xl">{value}</h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] md:text-sm">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Preview */}
      <section className="section-glow premium-blur-bg relative py-24">
        <div className="container-shell relative z-10 max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="reveal-left relative">
              <div className="premium-outline relative overflow-hidden rounded-[34px] shadow-luxury-dark">
                <img
                  src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80"
                  alt="Students reading Quran"
                  className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="surface-card floating-soft absolute -bottom-8 right-6 hidden max-w-[250px] p-6 lg:block">
                <div className="mb-3 flex gap-1 text-gold">
                  <Heart className="h-5 w-5 fill-gold" />
                </div>
                <p className="text-lg font-bold leading-7 text-brand-dark">
                  “Nurturing souls with the light of the Quran since 1969.”
                </p>
              </div>
            </div>

            <div className="reveal-right lg:pl-4">
              <SectionTitle
                title="A Beacon of Islamic Learning"
                subtitle="Welcome to Darul Qurra"
                alignment="left"
                description="Darul Qurra Peshawar has been a trusted center of Islamic learning for over five decades."
              />

              <div className="arabic-divider justify-start">
                <span></span>
              </div>

              <p className="mb-6 mt-8 text-lg text-dark/72">
                We are dedicated to providing a respectful, rigorous, and
                supportive environment for students seeking to connect deeply
                with the words of Allah.
              </p>

              <p className="mb-8 text-dark/68">
                From foundational Nazra classes to specialization in the ten
                Qira&apos;at, our expert faculty guides each student with patience,
                continuing an unbroken chain of spiritual transmission.
              </p>

              <div className="mb-10 grid gap-4">
                {[
                  'Specialized focus on exact Tajweed and beautiful recitation',
                  'Qualified teachers holding authentic Ijazahs',
                  'Structured memorization and lifelong retention methods',
                ].map((item) => (
                  <div
                    key={item}
                    className="soft-glass-card reveal-card flex items-start gap-4 p-4 md:p-5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <BadgeCheck className="h-4 w-4" />
                    </div>
                    <p className="font-medium text-dark/86">{item}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-semibold text-brand transition-colors duration-300 hover:text-gold"
              >
                Read Our Full History
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Programs Overview */}
      <section className="relative overflow-hidden border-y border-sand/80 bg-sand/25 py-24">
        <div className="absolute inset-0 bg-dot-luxury opacity-30"></div>
        <div className="container-shell relative z-10 max-w-7xl">
          <div className="reveal-up">
            <SectionTitle
              title="Our Academic Programs"
              subtitle="Structured Learning"
              description="Carefully designed pathways for children, adults, Huffaz, and advanced students."
            />
            <div className="arabic-divider">
              <span></span>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 6).map((program) => (
              <div key={program.id} className="reveal-card">
                <ProgramCard program={program} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center reveal-up">
            <Link href="/courses" className="primary-btn group px-8">
              Browse All Programs
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="luxury-dark-section py-24">
        <div className="floating-dots"></div>
        <div className="container-shell relative z-10 max-w-7xl">
          <div className="reveal-up">
            <SectionTitle
              title="Why Choose Darul Qurra?"
              subtitle="Our Distinction"
              description="A disciplined, trusted, and spiritually grounded environment for Quranic excellence."
            />
            <div className="arabic-divider">
              <span></span>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: 'Specialized Focus',
                desc: 'A deep focus on precise recitation, memorization, and sound transmission of the Quran.',
              },
              {
                icon: Users,
                title: 'Experienced Faculty',
                desc: 'Senior Qaris with authentic Ijazahs and years of guided teaching experience.',
              },
              {
                icon: Shield,
                title: 'Community Trust',
                desc: 'Trusted by generations of families in Peshawar since 1969.',
              },
              {
                icon: GraduationCap,
                title: 'Structured Curriculum',
                desc: 'A progressive path from foundational recitation to advanced Qira’at.',
              },
              {
                icon: Heart,
                title: 'Respectful Environment',
                desc: 'An atmosphere centered on Tarbiyah, discipline, and care.',
              },
              {
                icon: Clock,
                title: 'Flexible Schedules',
                desc: 'Morning, evening, and weekend options for students and adults.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="glass-card interactive-card premium-outline reveal-card p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/12 text-gold">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-cream">
                  {feature.title}
                </h3>
                <p className="text-sm leading-7 text-cream/74">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Faculty Preview */}
      <section className="premium-blur-bg relative py-24">
        <div className="container-shell relative z-10 max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="reveal-left md:w-2/3">
              <SectionTitle
                title="Learn from Masters"
                subtitle="Our Revered Faculty"
                alignment="left"
                description="Our institution is blessed with scholars who have dedicated their lives to the study, practice, and teaching of the Holy Quran."
              />
              <div className="arabic-divider justify-start">
                <span></span>
              </div>
            </div>

            <Link
              href="/faculty"
              className="group hidden items-center gap-2 font-semibold text-brand transition-colors duration-300 hover:text-gold md:inline-flex"
            >
              View All Faculty
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.slice(0, 4).map((teacher) => (
              <div
                key={teacher.id}
                className="surface-card surface-card-hover reveal-card group overflow-hidden p-3"
              >
                <div className="relative overflow-hidden rounded-[24px]">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="h-72 w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/92 via-brand-deep/20 to-transparent"></div>

                  <div className="absolute inset-x-0 bottom-0 p-5 text-cream">
                    <h3 className="text-xl font-bold text-cream">{teacher.name}</h3>
                    <p className="mt-1 text-sm font-medium text-gold">
                      {teacher.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/faculty" className="secondary-btn px-6">
              View All Faculty
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Media */}
      <section className="relative overflow-hidden border-t border-sand/80 bg-sand/25 py-24">
        <div className="absolute inset-0 bg-dot-luxury opacity-30"></div>
        <div className="container-shell relative z-10 max-w-7xl">
          <div className="reveal-up">
            <SectionTitle
              title="Experience the Atmosphere"
              subtitle="Media Showcase"
              description="A glimpse into our environment, student life, and sacred learning spaces."
            />
            <div className="arabic-divider">
              <span></span>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="interactive-card premium-outline reveal-left group relative aspect-video overflow-hidden rounded-[30px] shadow-[0_24px_70px_rgba(8,54,41,0.16)]">
              <img
                src="https://images.unsplash.com/photo-1601142634808-38923eb7c560?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Quran Recitation Video"
                className="h-full w-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/20 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(135deg,#caa24d,#e8cf96)] text-brand-dark shadow-[0_18px_40px_rgba(202,162,77,0.22)] transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-1 h-8 w-8" fill="currentColor" />
                </div>
                <h3 className="px-4 text-2xl font-bold text-cream md:text-3xl">
                  Introduction to Darul Qurra
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                'https://images.unsplash.com/photo-1542618837-1d6d63e5b387?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1597953601267-33eb97ccceeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
                'https://images.unsplash.com/photo-1609599006353-e629aaab31f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
              ].map((src, idx) => (
                <div
                  key={idx}
                  className="interactive-card premium-outline reveal-card group overflow-hidden rounded-[24px] shadow-[0_16px_40px_rgba(8,54,41,0.1)]"
                >
                  <img
                    src={src}
                    className="aspect-[4/4] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt="Gallery preview"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center reveal-up">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 font-semibold text-brand transition-colors duration-300 hover:text-gold"
            >
              Go to Full Gallery
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Admissions Callout */}
      <section className="premium-blur-bg relative py-24">
        <div className="container-shell relative z-10 max-w-5xl text-center">
          <div className="reveal-up">
            <SectionTitle
              title="Simple Admission Process"
              subtitle="How to Join"
              description="A clear and supportive process to help students begin with confidence."
            />
            <div className="arabic-divider">
              <span></span>
            </div>
          </div>

          <div className="relative mt-16 grid gap-12 md:grid-cols-3">
            <div className="absolute left-[18%] right-[18%] top-12 z-0 hidden border-t-2 border-dashed border-gold/25 md:block"></div>

            {[
              {
                no: '1',
                title: 'Explore',
                desc: 'Choose the program that fits your current reading level and goals.',
              },
              {
                no: '2',
                title: 'Apply',
                desc: 'Submit the quick online inquiry form to register your interest.',
              },
              {
                no: '3',
                title: 'Assess',
                desc: 'Meet our teachers for a brief reading assessment and placement.',
              },
            ].map((step) => (
              <div key={step.no} className="reveal-card relative z-10">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0d6b53,#094536)] text-3xl font-bold text-gold shadow-[0_20px_40px_rgba(13,107,83,0.22)] ring-8 ring-white">
                  {step.no}
                </div>
                <h3 className="mb-3 text-xl font-bold text-brand-dark">
                  {step.title}
                </h3>
                <p className="mx-auto max-w-xs text-dark/66">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 reveal-up">
            <Link href="/admissions" className="primary-btn group px-10">
              Start Application
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="relative overflow-hidden border-t border-sand/70 bg-cream py-24">
        <div className="absolute inset-0 bg-dot-luxury opacity-20"></div>
        <div className="container-shell relative z-10 max-w-7xl">
          <div className="reveal-up">
            <SectionTitle
              title="Voices of our Community"
              subtitle="Testimonials"
              description="Experiences shared by students, families, and members of our wider community."
            />
            <div className="arabic-divider">
              <span></span>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="surface-card surface-card-hover reveal-card relative p-8 md:p-10"
              >
                <Quote className="absolute right-8 top-8 h-12 w-12 text-gold/15" />

                <div className="relative z-10 mb-6 flex gap-1 text-gold">
                  {[...Array(test.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>

                <p className="relative z-10 mb-8 text-lg italic leading-8 text-dark/78">
                  “{test.content}”
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-lg font-bold text-brand">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark">{test.name}</h4>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
                      {test.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Latest Announcements */}
      <section className="relative overflow-hidden border-t border-sand/80 bg-sand/25 py-24">
        <div className="absolute inset-0 bg-dot-luxury opacity-25"></div>
        <div className="container-shell relative z-10 max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="reveal-left md:w-2/3">
              <SectionTitle
                title="Latest News & Notices"
                subtitle="Announcements"
                alignment="left"
              />
              <div className="arabic-divider justify-start">
                <span></span>
              </div>
            </div>

            <Link
              href="/events"
              className="group hidden items-center gap-2 font-semibold text-brand transition-colors duration-300 hover:text-gold md:inline-flex"
            >
              View All News
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {announcements.map((item) => (
              <div
                key={item.id}
                className="surface-card surface-card-hover reveal-card group p-8"
              >
                <div className="mb-4 flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/10 bg-brand/5 px-3 py-1">
                    <Tag className="h-3 w-3" />
                    {item.category}
                  </span>
                  <span className="mx-1 h-1.5 w-1.5 rounded-full bg-gold"></span>
                  <span className="inline-flex items-center gap-1.5 text-dark/50">
                    <Calendar className="h-3.5 w-3.5" />
                    {item.date}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-bold leading-snug text-brand-dark transition-colors duration-300 group-hover:text-brand">
                  <Link href="/events">{item.title}</Link>
                </h3>

                <p className="mb-6 text-sm leading-7 text-dark/68">
                  {item.summary}
                </p>

                <Link
                  href="/events"
                  className="group inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors duration-300 hover:text-gold"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Donation Banner */}
      <section className="relative overflow-hidden py-20">
        <div className="container-shell max-w-5xl">
          <div className="premium-outline reveal-card relative overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#0d6b53_0%,#095640_55%,#06372b_100%)] px-6 py-14 text-center text-cream shadow-[0_24px_80px_rgba(8,54,41,0.22)] md:px-10">
            <div
              className="absolute inset-0 opacity-14"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.65) 1px, transparent 0)',
                backgroundSize: '30px 30px',
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,76,0.24),transparent_24%)]"></div>

            <div className="relative z-10">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-gold">
                <Heart className="h-8 w-8" />
              </div>

              <h2 className="mb-4 text-balance text-3xl font-bold text-cream md:text-5xl">
                Invest in Sadaqah Jariyah
              </h2>

              <div className="arabic-divider">
                <span></span>
              </div>

              <p className="mx-auto mb-8 mt-6 max-w-2xl text-lg leading-8 text-cream/82">
                Your generous contributions help us provide scholarships,
                maintain our facilities, and continue spreading the light of the
                Quran.
              </p>

              <Link href="/donate" className="gold-btn px-10">
                Support Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Contact / Location */}
      <section className="luxury-dark-section py-24">
        <div className="floating-dots"></div>
        <div className="container-shell relative z-10 max-w-6xl">
          <div className="reveal-up">
            <SectionTitle
              title="Get in Touch"
              subtitle="We are here for you"
              description="Visit our campus, speak with our team, and experience the environment firsthand."
            />
            <div className="arabic-divider">
              <span></span>
            </div>
          </div>

          <div className="reveal-card mt-16 grid items-center gap-10 rounded-[34px] border border-white/10 bg-white/5 p-8 backdrop-blur-md md:p-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h3 className="mb-2 text-3xl font-bold text-cream">
                  Visit Our Campus
                </h3>
                <p className="max-w-md text-cream/74">
                  Our doors are open for visitors. Come and witness our ongoing
                  classes, speak with teachers, and observe the disciplined
                  environment firsthand.
                </p>
              </div>

              <div className="space-y-5">
                <div className="glass-card premium-outline flex items-start gap-4 rounded-[24px] p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-cream">
                      Campus Location
                    </h4>
                    <p className="text-sm leading-7 text-cream/72">
                      Darul Qurrabuilding, University Road,
                      <br />
                      Peshawar, KP, Pakistan
                    </p>
                  </div>
                </div>

                <div className="glass-card premium-outline flex items-start gap-4 rounded-[24px] p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-cream">
                      Contact Office
                    </h4>
                    <p className="text-sm leading-7 text-cream/72">
                      +92 91 123 4567
                      <br />
                      +92 300 1234567 (WhatsApp available)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-outline group relative flex h-80 items-center justify-center overflow-hidden rounded-[28px] shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:h-[420px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"></div>
              <div className="absolute inset-0 bg-brand-deep/50"></div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn relative z-10 px-8"
              >
                <MapPin className="h-4 w-4 text-brand" />
                Open Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}