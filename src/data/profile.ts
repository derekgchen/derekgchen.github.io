/** My name as it appears in author lists; it's highlighted where listed. */
export const me = 'Derek Chen';

export const papers = [
  {
    /** Anchor id; experience bullets refer to papers by it. */
    id: 'solvent-diffusion',
    /** Experience entry this paper came out of (see experience.ts). */
    experience: 'barzilay-group',
    year: '2026',
    venue: 'ICML GenBio',
    /** Optional distinction, e.g. Spotlight or Oral. */
    honor: 'Spotlight',
    title: 'Generative Modeling of Solvated Biomolecules',
    authors: ['MinGyu Choi', 'Derek Chen', 'Gloria Ma', 'Tommi Jaakkola', 'Regina Barzilay'],
    url: 'https://openreview.net/forum?id=kIe6nCvXzA',
  },
  {
    id: 'ribosome-model',
    experience: 'barzilay-group',
    year: '2025',
    venue: 'ICML GenBio',
    title: 'Protein Generator with Ribosomal Origin and Folding',
    authors: ['MinGyu Choi', 'Derek Chen', 'Tommi Jaakkola', 'Regina Barzilay'],
    url: 'https://openreview.net/forum?id=AJXT4TNXKN',
  },
];

export const awards: { title: string; detail: string; year?: string }[] = [
  { year: '2026', title: 'Phi Beta Kappa', detail: 'Honor Society Member' },
  { year: '2021', title: 'International Biology Olympiad', detail: 'Silver Medal' },
  { year: '2021, 2022', title: 'USA Biology Olympiad', detail: 'National Finals Gold Medal' },
];
