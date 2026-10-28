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

/**
 * School page: classes taken, by semester (summers and IAP left out). The
 * timeline has a column for every fall and spring term from `firstTerm` to
 * `lastTerm`, with each term's classes stacked in it.
 */
export const firstTerm = 'Fall 2022';
export const lastTerm = 'Fall 2026';

/**
 * `areas` replaces the subject areas guessed from the course number (see
 * school.astro): to file a class elsewhere, or under more than one.
 * `favorite` puts a class in the page's Favorites highlight.
 */
export const classes: { number: string; name: string; term: string; areas?: string[]; favorite?: boolean }[] = [
  { number: '5.12', name: 'Organic Chemistry I', term: 'Fall 2022', favorite: true },
  { number: '6.1210', name: 'Intro Algorithms', term: 'Fall 2022' },
  { number: '6.1010', name: 'Fundamentals of Programming', term: 'Fall 2022', favorite: true },
  { number: '3.986', name: 'Intro Archaeology', term: 'Fall 2022', areas: ['hum'] },
  { number: '6.1903', name: 'Intro Low Level Programming', term: 'Fall 2022' },
  { number: '6.1220', name: 'Algorithms', term: 'Spring 2023', favorite: true },
  { number: '7.05', name: 'Biochemistry', term: 'Spring 2023' },
  { number: '21H.007', name: 'Intro Ancient + Medieval Studies', term: 'Spring 2023' },
  { number: '6.3900', name: 'Intro ML', term: 'Spring 2023' },
  { number: '5.13', name: 'Organic Chemistry II', term: 'Fall 2023', favorite: true },
  { number: '6.1020', name: 'Software Construction', term: 'Spring 2024', favorite: true },
  { number: '18.600', name: 'Probability', term: 'Spring 2023' },
  { number: '20.110', name: 'Thermodynamics', term: 'Fall 2023' },
  { number: '6.1910', name: 'Computation Structures', term: 'Fall 2023', favorite: true },
  { number: '14.01', name: 'Microeconomics', term: 'Fall 2023' },
  { number: '18.404', name: 'Theory of Computation', term: 'Fall 2023', areas: ['math', 'cs'] },
  { number: '7.03', name: 'Genetics', term: 'Fall 2023' },
  { number: '18.650', name: 'Statistics', term: 'Spring 2024' },
  { number: '6.1800', name: 'Systems', term: 'Spring 2024' },
  { number: '7.06', name: 'Cell Biology', term: 'Spring 2024', favorite: true },
  { number: '9.00', name: 'Intro Psychology', term: 'Spring 2024' },
  { number: '6.8611', name: 'NLP', term: 'Fall 2024' },
  { number: '7.002', name: 'Intro MolBio Lab', term: 'Fall 2024', favorite: true },
  { number: '7.46', name: 'Building with Cells', term: 'Fall 2024' },
  { number: '21H.151', name: 'Dynastic China', term: 'Fall 2024', favorite: true },
  { number: '6.7960', name: 'Deep Learning', term: 'Fall 2024' },
  { number: '7.45', name: 'Hallmarks of Cancer', term: 'Fall 2024', favorite: true },
  { number: '7.003', name: 'MolBio Lab', term: 'Spring 2025' },
  { number: '6.5310', name: 'Folding Algorithms', term: 'Spring 2025', areas: ['cs', 'math'] },
  { number: '4.605', name: 'History of Architecture', term: 'Spring 2025' },
  { number: '18.212', name: 'Algebraic Combinatorics', term: 'Spring 2025' },
  { number: '7.19', name: 'Biology Communication', term: 'Fall 2025' },
  { number: '7.20', name: 'Physiology', term: 'Fall 2025', favorite: true },
  { number: '6.1810', name: 'Operating Systems', term: 'Fall 2025' },
  { number: '21H.143', name: 'Modern Europe', term: 'Fall 2025' },
  { number: '3.983', name: 'Ancient Mesoamerica', term: 'Fall 2025', areas: ['hum'] },
  { number: '6.8710', name: 'Computational Systems Bio', term: 'Spring 2026', areas: ['cs', 'bio'] },
  { number: '6.8370', name: 'Computational Photography', term: 'Fall 2026' },
  { number: '6.5940', name: 'Tiny ML', term: 'Fall 2026' },
];
