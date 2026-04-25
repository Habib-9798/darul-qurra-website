import { PageHero, SectionTitle, CTABanner } from '@/src/components/ui/Shared';
import {
  BookOpen,
  Heart,
  Globe,
  Users,
  Award,
  Shield,
  Sparkles,
  BadgeCheck,
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Authenticity',
      desc: 'A firm commitment to classical scholarship, sound transmission, and faithful Quranic teaching.',
    },
    {
      icon: Heart,
      title: 'Tarbiyah',
      desc: 'Character, manners, and spiritual refinement are nurtured alongside academic learning.',
    },
    {
      icon: Users,
      title: 'Community',
      desc: 'A respectful environment where students and families feel guided, welcomed, and supported.',
    },
    {
      icon: Award,
      title: 'Excellence',
      desc: 'A culture of ihsan in recitation, discipline, teaching, and service to the wider Ummah.',
    },
  ];

  return (
    <div>
      <PageHero
        title="About Darul Qurra"
        subtitle="A beacon of Islamic learning devoted to preserving and transmitting the knowledge of the Holy Quran since 1969."
        image="https://images.unsplash.com/photo-1585036156171-384164a8c675?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        badge="Sacred Legacy"
      />

      {/* 1. Heritage */}
      <section className="section-glow py-24">
        <div className="container-shell relative z-10 max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.02fr] lg:gap-16">
            <div className="space-y-6">
              <div className="section-label">Our Heritage</div>

              <h2 className="text-balance text-3xl font-bold text-brand-dark md:text-5xl">
                Decades of dedication to the Sacred Word
              </h2>

              <p className="text-lg leading-8 text-dark/72">
                Darul Qurra Peshawar was founded to create a place where the Book
                of Allah is learned, memorized, understood, and honored according
                to the authentic Prophetic tradition.
              </p>

              <p className="text-dark/68">
                Over the decades, the institution has grown into a trusted
                academy serving students from foundational recitation to advanced
                Quranic sciences, while preserving a careful balance between
                traditional rigor and compassionate guidance.
              </p>

              <div className="grid gap-4 pt-3">
                {[
                  'A legacy rooted in trust, discipline, and sound recitation.',
                  'An environment that combines sacred knowledge with spiritual care.',
                  'A place where reverence for the Quran shapes every level of learning.',
                ].map((item) => (
                  <div
                    key={item}
                    className="surface-card flex items-start gap-4 p-4 md:p-5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <BadgeCheck className="h-4 w-4" />
                    </div>
                    <p className="font-medium leading-7 text-dark/82">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="premium-outline relative overflow-hidden rounded-[34px] shadow-[0_24px_70px_rgba(8,54,41,0.16)]">
                <img
                  src="https://images.unsplash.com/photo-1597953601267-33eb97ccceeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Students studying"
                  className="aspect-[4/3] w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="surface-card floating-soft absolute -bottom-8 -left-6 hidden max-w-[240px] p-6 lg:block">
                <div className="mb-3 flex items-center gap-2 text-gold">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
                    Since 1969
                  </span>
                </div>
                <p className="text-base font-semibold leading-7 text-brand-dark">
                  A trusted institution shaping generations through Quranic
                  learning and spiritual discipline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="dark-section py-24">
        <div className="container-shell relative z-10 max-w-6xl">
          <SectionTitle
            title="Our Mission & Vision"
            subtitle="Guiding Principles"
            description="The purpose behind our teaching, service, and long-term commitment to Quranic excellence."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="glass-card premium-outline interactive-card p-8 md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/12 text-gold">
                <BookOpen className="h-7 w-7" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-cream md:text-3xl">
                The Mission
              </h3>

              <p className="leading-8 text-cream/78">
                To provide accessible, high-quality, and authentic Quranic
                education while nurturing recitation, understanding, discipline,
                and spiritual growth in every student.
              </p>
            </div>

            <div className="glass-card premium-outline interactive-card p-8 md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/12 text-gold">
                <Globe className="h-7 w-7" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-cream md:text-3xl">
                The Vision
              </h3>

              <p className="leading-8 text-cream/78">
                To remain a trusted center of Quranic excellence that produces
                students who serve their communities with knowledge, dignity,
                humility, and sound recitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-24">
        <div className="container-shell max-w-6xl">
          <SectionTitle
            title="Core Values"
            subtitle="What We Stand For"
            description="The principles that shape our environment, teaching style, and long-term identity."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="surface-card surface-card-hover interactive-card p-7 text-center"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold/20 to-brand/10 text-brand">
                  <value.icon className="h-6 w-6" />
                </div>

                <h4 className="mb-3 text-xl font-bold text-brand-dark">
                  {value.title}
                </h4>

                <p className="text-sm leading-7 text-dark/66">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}