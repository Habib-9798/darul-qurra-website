export const programs = [
  {
    id: "nazra-quran",
    slug: "nazra-quran",
    title: "Nazra Quran",
    summary: "Foundational reading of the Holy Quran with correct pronunciation.",
    overview: "Our Nazra program is designed to help students read the Holy Quran fluently and accurately with proper Makharij (points of articulation). This is the essential first step before memorization or advanced Tajweed. Through interactive and supportive classes, students overcome hesitation and develop a beautiful flow in their daily recitation.",
    audience: "Beginners, Children (5+ years), Adults",
    level: "Beginner",
    duration: "1 to 2 Years",
    format: "On-Campus / Online",
    outcomes: [
      "Fluent reading of the Holy Quran",
      "Correct recognition of all Arabic letters",
      "Basic understanding of Tajweed rules",
      "Ability to read from any place in the Mushaf without hesitation"
    ],
    eligibility: [
      "No prior knowledge required.",
      "Minimum age is 5 years.",
      "A willingness to learn and commit to regular classes."
    ],
    structure: [
      "Month 1-3: Arabic Alphabet and Makharij",
      "Month 4-6: Short Surahs and Basic Joining Rules",
      "Month 7-12: Supervised Reading of Juz 30 and Continuous Practice"
    ],
    timings: "Morning: 8:00 AM - 12:00 PM | Evening: 4:00 PM - 7:00 PM (Flexible options)",
    facultyIds: ["qari-usman", "qari-bilal"],
    relatedPrograms: ["tajweed-program", "short-courses"],
    image: "https://images.unsplash.com/photo-1601142634808-38923eb7c560?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tajweed-program",
    slug: "tajweed-program",
    title: "Tajweed Program",
    summary: "Master the rules of recitation according to the authentic traditions.",
    overview: "The Tajweed program focuses on the precise rules of reciting the Quran. Students will learn the theoretical rules (Sifat, Ahkam, Waqf) and practice them extensively under the guidance of expert Qaris. This course bridges the gap between simply reading the text and reciting it as it was revealed.",
    audience: "Intermediate students, Hafiz",
    level: "Intermediate",
    duration: "6 Months to 1 Year",
    format: "On-Campus",
    outcomes: [
      "Mastery over detailed Tajweed rules (Idgham, Ikhfa, etc.)",
      "Beautiful and accurate recitation matching the global standard",
      "Certification in basic Tajweed upon successful evaluation",
      "Correction of common and hidden recitation errors"
    ],
    eligibility: [
      "Must be able to read the Quran fluently (Nazra).",
      "Must pass a basic reading evaluation."
    ],
    structure: [
      "Module 1: Introduction to Sifat and Ahkam",
      "Module 2: Practical Application via Surah Al-Fatiha and selected Juz 30",
      "Module 3: Advanced Rules and Independent Reading Assessment"
    ],
    timings: "Evening: 4:30 PM - 6:30 PM",
    facultyIds: ["qari-bilal"],
    relatedPrograms: ["qiraat-specialization", "hifz-program"],
    image: "https://images.unsplash.com/photo-1597953601267-33eb97ccceeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hifz-program",
    slug: "hifz-program",
    title: "Hifz Program",
    summary: "Complete memorization of the Holy Quran with strict retention focus.",
    overview: "Our structured Hifz program guides students through the complete memorization of the Quran. We focus heavily on 'Manzil' (revision) to ensure students retain what they have memorized for life. It is an intensive program requiring deep dedication from both the student and the family.",
    audience: "Children (8+ years), Dedicated Adults",
    level: "Advanced",
    duration: "2 to 3 Years",
    format: "On-Campus",
    outcomes: [
      "Complete memorization of all 30 Juz",
      "Strong retention through rigorous daily revision schedules",
      "Discipline, focus, and immense spiritual growth",
      "Full preparation and backing to lead Tarawih prayers"
    ],
    eligibility: [
      "Fluent Nazra reading with basic Tajweed awareness.",
      "Interview required with student and parents.",
      "Available for full-time daytime commitment."
    ],
    structure: [
      "Sabaq (New Lesson): Memorization of daily assigned verses",
      "Sabaqi (Recent Review): Review of the last 1-2 weeks of memorization",
      "Manzil (Long-term Review): Dedicated daily recitation of previously memorized Juz"
    ],
    timings: "Morning: 8:00 AM - 1:00 PM (Full Time)",
    facultyIds: ["qari-usman"],
    relatedPrograms: ["tajweed-program", "qiraat-specialization"],
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "qiraat-specialization",
    slug: "qiraat-specialization",
    title: "Qira'at Specialization",
    summary: "Advanced study in the various modes of Quranic recitation (Qira'at Sab'a & Ashra).",
    overview: "A highly specialized program for advanced scholars and Huffaz. This course covers the 7 and 10 authentic modes of recitation (Mutawatir), preserving the rich oral tradition of the Quran. Taught directly by Ijazah-holding senior scholars.",
    audience: "Huffaz, Advanced Scholars",
    level: "Expert",
    duration: "2 Years",
    format: "On-Campus",
    outcomes: [
      "Mastery of the 7 (Sab'a) or 10 (Ashra) Qira'at",
      "Official Ijazah (certification) connecting to the prophetic chain",
      "Deep understanding of the history of recitation variances",
      "Ability to teach advanced Tajweed and Qira'at to others"
    ],
    eligibility: [
      "Must be a certified Hafiz-e-Quran.",
      "Must hold a recognized Tajweed certificate.",
      "Written and oral entrance examination."
    ],
    structure: [
      "Year 1: Foundation of Qira'at Sab'a (Shatibiyyah)",
      "Year 2: Advanced Qira'at Ashra (Durrah)",
      "Final Module: Full recitation assessment for Ijazah granting"
    ],
    timings: "Morning/Weekend split schedules available for Imams.",
    facultyIds: ["sheikh-abdullah"],
    relatedPrograms: ["hifz-program"],
    image: "https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "short-courses",
    slug: "short-courses",
    title: "Short Courses",
    summary: "Flexible, module-based learning for essential Islamic knowledge.",
    overview: "We offer short courses on various topics including basic Fiqh of worship, translation of specific Surahs, Seerah of the Prophet (SAW), and Arabic grammar basics. These are perfect for busy individuals seeking to improve their foundational religious knowledge.",
    audience: "General Public, University Students",
    level: "All Levels",
    duration: "4 to 8 Weeks (per module)",
    format: "On-Campus / Online",
    outcomes: [
      "Foundational, practical Islamic knowledge for daily life",
      "Improved understanding of daily prayers and rituals",
      "Deeper connection to the Quran's direct meaning"
    ],
    eligibility: [
      "Open to all individuals.",
      "No prerequisites."
    ],
    structure: [
      "Weekly theme-based lectures",
      "Q&A sessions and interactive discussions",
      "Final open-book assessment module"
    ],
    timings: "Weekends: Saturday 9:00 AM - 12:00 PM",
    facultyIds: ["ustadh-ibrahim"],
    relatedPrograms: ["adult-learning"],
    image: "https://images.unsplash.com/photo-1584285418504-03f47e303490?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "adult-learning",
    slug: "adult-learning",
    title: "Adult Learning",
    summary: "Evening and weekend classes tailored for working professionals.",
    overview: "It is never too late to learn the Quran. Our adult learning program offers a respectful, patient environment for adults to learn Nazra, Tajweed, or basic translation at their own pace. The curriculum is specifically adapted to suit mature learners.",
    audience: "Working Professionals, Elders",
    level: "Beginner to Intermediate",
    duration: "Ongoing",
    format: "Evening / Weekends",
    outcomes: [
      "Confidence in reciting the Quran independently",
      "Understanding basic conversational Arabic terms",
      "Engagement with a supportive spiritual community"
    ],
    eligibility: [
      "Absolute beginners welcome.",
      "Open to adults 18+."
    ],
    structure: [
      "Flexible self-paced modules",
      "1-on-1 reading feedback sessions",
      "Group translation discussions"
    ],
    timings: "Evening: 7:00 PM - 8:30 PM",
    facultyIds: ["ustadh-ibrahim"],
    relatedPrograms: ["short-courses", "tajweed-program"],
    image: "https://images.unsplash.com/photo-1609599006353-e629aaab31f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const faculty = [
  {
    id: "sheikh-abdullah",
    name: "Sheikh Abdullah Bin Tariq",
    title: "Head of Qira'at Department",
    specialization: "Qira'at Ashra & Advanced Tajweed",
    bio: "With over 30 years of teaching experience, Sheikh Abdullah holds multiple Ijazahs in the 10 modes of recitation. He is a respected senior scholar guiding our most advanced students.",
    courses: ["Qira'at Specialization", "Advanced Tajweed"],
    image: "https://images.unsplash.com/photo-1566492031523-0564ef1df233?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badges: ["Senior Scholar", "Ijazah Holder"]
  },
  {
    id: "qari-usman",
    name: "Qari Usman Ali",
    title: "Senior Hifz Instructor",
    specialization: "Quranic Memorization & Revision",
    bio: "Qari Usman has helped hundreds of students complete their Hifz. His strict yet loving approach ensures students develop a lifelong bond with the Quran and retain their memorization.",
    courses: ["Hifz Program", "Nazra Quran"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "ustadh-ibrahim",
    name: "Ustadh Ibrahim Khan",
    title: "Instructor, Adult Learning",
    specialization: "Foundational Tajweed & Translation",
    bio: "Ustadh Ibrahim specializes in teaching adults. His patient methodology breaks down complex rules into simple, manageable lessons for working professionals.",
    courses: ["Adult Learning", "Short Courses"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "qari-bilal",
    name: "Qari Bilal Ahmed",
    title: "Tajweed Instructor",
    specialization: "Makharij & Sifat",
    bio: "A young and dynamic teacher, Qari Bilal focuses on the precise articulation of letters. He leads the foundational Tajweed classes and manages our online student portal.",
    courses: ["Tajweed Program", "Nazra Quran"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

export const announcements = [
  {
    id: 1,
    title: "Admissions Open for Hifz Program",
    date: "August 15, 2026",
    category: "Admission",
    summary: "We are now accepting applications for the upcoming academic year. Limited seats available for the specialized Hifz program starting September.",
    slug: "admissions-open-hifz"
  },
  {
    id: 2,
    title: "Annual Qira'at Competition 2026",
    date: "September 10, 2026",
    category: "Event",
    summary: "Join us for our annual Qira'at competition featuring our top students and guest scholars from across Pakistan.",
    slug: "annual-qiraat-competition-2026"
  },
  {
    id: 3,
    title: "New Weekend Tajweed Course for Adults",
    date: "July 20, 2026",
    category: "Academic",
    summary: "A new 8-week course focusing on basic Tajweed rules designed specifically for working professionals running on Saturday mornings.",
    slug: "new-weekend-tajweed-course"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Muhammad Rizwan",
    role: "Parent",
    content: "Both my sons completed their Hifz here. The dedication of the teachers and the spiritual environment is unmatched in Peshawar. I have complete peace of mind knowing they are in good hands.",
    rating: 5
  },
  {
    id: 2,
    name: "Ahmad Farooq",
    role: "Alumnus",
    content: "The Qira'at specialization I completed at Darul Qurra gave me the confidence to lead prayers and teach others. The standards are rigorous, which makes the certification truly meaningful.",
    rating: 5
  },
  {
    id: 3,
    name: "Zafar Ali",
    role: "Adult Student",
    content: "I started learning to read the Quran properly at the age of 45. The adult classes are so respectful and encouraging. It has transformed my daily prayers.",
    rating: 5
  }
];

export const faqs = [
  {
    category: "Admissions",
    items: [
      {
        question: "When do admissions open?",
        answer: "Our primary admission intakes are in August (for the main academic year) and January (for short courses). However, adult learning programs often have rolling admissions."
      },
      {
        question: "Is there an age limit for the Hifz program?",
        answer: "We typically admit students between 8 and 12 years of age for the intensive Hifz program, but exceptions are made based on the student's aptitude and dedication."
      }
    ]
  },
  {
    category: "Courses",
    items: [
      {
        question: "Do you offer online classes?",
        answer: "Yes, we offer online options for specific short courses and the adult learning program. However, Hifz and advanced Qira'at require on-campus presence."
      },
      {
        question: "How long does the Tajweed program take?",
        answer: "Our foundational Tajweed certificate module takes about 6 months, while the advanced mastery program can take up to a year."
      }
    ]
  },
  {
    category: "General",
    items: [
      {
        question: "Where is Darul Quran located?",
        answer: "We are centrally located in Peshawar, easily accessible via main transit routes. Detailed directions are available on our Contact page."
      },
      {
        question: "Does the Madrasa provide hostel facilities?",
        answer: "Yes, we have limited boarding facilities for full-time Hifz and Qira'at students coming from outside Peshawar. Admission to boarding is subject to availability."
      }
    ]
  }
];
