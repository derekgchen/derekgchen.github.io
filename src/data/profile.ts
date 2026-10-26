// TODO: replace paper titles with the real ones from OpenReview.
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
    title: 'Permutation-invariant, solvent-aware protein structure diffusion',
    url: 'https://openreview.net/forum?id=AJXT4TNXKN',
  },
  {
    id: 'ribosome-model',
    experience: 'barzilay-group',
    year: '2025',
    venue: 'ICML GenBio',
    title: 'A variable-length, ribosome-inspired protein generative model',
    url: 'https://openreview.net/forum?id=kIe6nCvXzA',
  },
];

export const awards: { title: string; detail: string; year?: string }[] = [
  { year: '2026', title: 'Phi Beta Kappa', detail: 'Honor Society Member' },
  { year: '2021', title: 'International Biology Olympiad', detail: 'Silver Medal' },
  { year: '2021, 2022', title: 'USA Biology Olympiad', detail: 'National Finals Gold Medal' },
];
