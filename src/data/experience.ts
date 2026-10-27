export type Kind = 'research' | 'industry' | 'service';

export interface Experience {
  /** Anchor id on the Experience page; timeline bars link to it. */
  id: string;
  kind: Kind;
  org: string;
  /** Label shown on the timeline bar; keep it short. */
  short: string;
  role: string;
  /** 'YYYY-MM' */
  start: string;
  /** 'YYYY-MM', or null for ongoing roles */
  end: string | null;
  /** One line; shown in the timeline's hover detail. */
  summary: string;
  /**
   * Optional longer bullets for the Experience page. A bullet can name the
   * paper it led to (a paper id from profile.ts); the two link to each other.
   */
  details?: (string | { text: string; paper: string })[];
  /**
   * Notable roles held for part of this entry (e.g. a leadership term). The
   * timeline draws them as lighter bars inset in the entry's bar, and the
   * Experience page lists them with the main role under one org heading.
   */
  highlights?: Highlight[];
  /**
   * Disjoint stretches of time (e.g. the semesters a course was staffed). Each
   * gets its own bar, and the list shows them as terms ("Fall 2024"). `start`
   * and `end` should still span all of them.
   */
  periods?: Period[];
  /** Entries sharing a track get their own timeline row(s), labeled with it. */
  track?: string;
  /**
   * Several roles shown under one org heading in the list (e.g. every course
   * staff position), instead of a single role line.
   */
  roles?: { title: string; dates?: string; url?: string }[];
  /** List this entry first in its category, regardless of dates. */
  pinned?: boolean;
  /** Organization's website; the org name links to it in the list. */
  url?: string;
  /** Extra sentences below the entry on the Experience page (not the
      timeline); may contain links. */
  note?: string;
}

export interface Period {
  /** 'YYYY-MM' */
  start: string;
  /** 'YYYY-MM', or null for ongoing */
  end: string | null;
  /** Bar label for this period; defaults to the entry's `short`. */
  short?: string;
  /** Role shown in this period's tooltip; defaults to the entry's `role`. */
  role?: string;
}

export interface Highlight {
  role: string;
  /** 'YYYY-MM' */
  start: string;
  /** 'YYYY-MM', or null for ongoing */
  end: string | null;
  summary: string;
}

/** Pages under /experience/, in sidebar order. Honors has no timeline. */
export const experiencePages: { slug: string; label: string; kind?: Kind }[] = [
  { slug: 'research', label: 'Research', kind: 'research' },
  { slug: 'industry', label: 'Industry', kind: 'industry' },
  { slug: 'teaching', label: 'Teaching & Leadership', kind: 'service' },
  { slug: 'honors', label: 'Honors' },
];

export const experiences: Experience[] = [
  {
    id: 'liu-lab',
    url: 'https://www.liugroup.us/',
    kind: 'research',
    org: 'Liu Lab',
    short: 'Liu Lab',
    role: 'Research Assistant',
    start: '2022-12',
    end: '2023-09',
    summary: 'Wet lab and computational research to predict ideal pegRNAs for prime editing.',
  },
  {
    id: 'keating-lab',
    url: 'https://keatinglab.mit.edu/',
    kind: 'research',
    org: 'Keating Lab',
    short: 'Keating Lab',
    role: 'Research Assistant',
    start: '2023-12',
    end: '2024-08',
    summary: 'Built a data generation pipeline using molecular dynamics simulations and flow matching.',
  },
  {
    id: 'barzilay-group',
    url: 'https://www.rbg.mit.edu/',
    kind: 'research',
    org: 'Barzilay Group',
    short: 'Barzilay Group',
    role: 'Research Assistant',
    start: '2025-01',
    end: null,
    summary: 'Generative models for protein design: solvent-aware structure diffusion and multi-resolution autoregressive design.',
    details: [
      'Developing a surface point cloud-based, multi-resolution autoregressive protein design model.',
      {
        text: 'Developing, benchmarking, and optimizing a permutation-invariant, solvent-aware protein structure diffusion model with heightened atomistic understanding.',
        paper: 'solvent-diffusion',
      },
      {
        text: 'Designed a variable-length, ribosome-inspired protein generative model.',
        paper: 'ribosome-model',
      },
    ],
  },
  {
    id: 'zhang-group',
    url: 'https://zhanggroup.mit.edu/',
    kind: 'research',
    org: 'Zhang Group',
    short: 'Zhang Group',
    role: 'Research Assistant',
    start: '2026-01',
    end: null,
    summary: 'Diffusion posterior sampling for chromatin structure prediction across genomic scales.',
  },
  {
    id: 'afrl',
    url: 'https://www.afrl.af.mil/',
    kind: 'industry',
    org: 'Air Force Research Laboratory',
    short: 'AFRL',
    role: 'Machine Learning Intern',
    start: '2023-06',
    end: '2023-08',
    summary: 'Built a machine learning pipeline to design phononic crystals with desired bandgaps.',
  },
  {
    id: 'trinetx',
    url: 'https://trinetx.com/',
    kind: 'industry',
    org: 'TriNetX',
    short: 'TriNetX',
    role: 'Software Engineering Intern',
    start: '2024-05',
    end: '2024-08',
    summary: 'Built an ML integration through proxy server forwarding with gRPC.',
  },
  {
    id: 'sig',
    url: 'https://sig.com/',
    kind: 'industry',
    org: 'Susquehanna',
    short: 'SIG',
    role: 'Quantitative Trading Intern',
    start: '2025-06',
    end: '2025-08',
    summary: 'Studied options theory and designed a seasonal volatility forecasting model for commodities.',
  },
  {
    id: 'hrt',
    url: 'https://www.hudsonrivertrading.com/',
    kind: 'industry',
    org: 'Hudson River Trading',
    short: 'HRT',
    role: 'Algorithmic Development Intern',
    start: '2026-05',
    end: '2026-08',
    summary: 'Mid/high-frequency quantitative research and algorithmic trading strategy design.',
  },
  {
    id: 'hmmt',
    url: 'https://www.hmmt.org/',
    kind: 'service',
    org: 'Harvard-MIT Math Tournament',
    short: 'HMMT',
    role: 'Officer',
    start: '2022-09',
    end: '2024-05',
    summary: 'Helped organize the Harvard-MIT Math Tournament.',
  },
  {
    id: 'traders',
    url: 'https://traders.mit.edu/',
    kind: 'service',
    org: 'Traders@MIT',
    short: 'Traders@MIT',
    role: 'Officer',
    start: '2023-09',
    end: null,
    summary: 'Organizing Traders@MIT.',
  },
  // All MIT course staff positions: one entry, one timeline row.
  // Semesters map to Fall = Sep–Dec, Spring = Feb–May.
  {
    id: 'course-staff',
    kind: 'service',
    track: 'Teaching',
    org: 'MIT',
    short: 'Course staff',
    role: 'Course Staff',
    start: '2024-09',
    end: '2026-05',
    periods: [
      { start: '2024-09', end: '2025-12', short: '6.121 & 6.102 LA', role: 'Lab Assistant, 6.121 and 6.102' },
      { start: '2026-02', end: '2026-05', short: '6.102 TA', role: 'Graduate Teaching Assistant, 6.102' },
    ],
    summary: 'Course staff for MIT computer science classes.',
    roles: [
      { title: 'Graduate Teaching Assistant, 6.102 Software Construction', dates: 'Spring 2026', url: 'https://web.mit.edu/6.102/www/sp26/' },
      { title: 'Lab Assistant, 6.121 Introduction to Algorithms', dates: 'Fall 2024, Spring 2025, Fall 2025' },
      { title: 'Lab Assistant, 6.102 Software Construction', dates: 'Spring 2025' },
      { title: 'Grader, 6.122 Design and Analysis of Algorithms' },
      { title: 'Grader, 6.7960 Deep Learning' },
    ],
  },
  {
    id: 'usabo',
    url: 'https://usabo-trc.org/',
    kind: 'service',
    org: 'USA Biolympiad',
    short: 'USABO',
    role: 'Teaching Assistant',
    start: '2023-05',
    end: '2023-06',
    summary: 'Teaching assistant for the USA Biology Olympiad.',
  },
  {
    id: 'scioly',
    url: 'https://scioly.mit.edu/',
    kind: 'service',
    org: 'MIT Science Olympiad',
    pinned: true,
    short: 'Science Olympiad',
    role: 'Planning Committee Member',
    start: '2022-09',
    end: null,
    summary: "Planning committee for MIT's national Science Olympiad tournament.",
    highlights: [
      {
        role: 'Tournament Director',
        start: '2024-03',
        end: '2026-02',
        summary: 'Directed the tournament, with over 1,000 attendees from across the nation.',
      },
    ],
    note: `Besides organizing MIT Science Olympiad logistically, I have also event supervised for <a href="https://drive.google.com/drive/folders/1BQ5g3jaWkEkR04Z3Mp9zR5rHrfY5xPfr" target="_blank">MIT Science Olympiad</a> and other tournaments. My favorite event is Fossils!`,
  },
];
