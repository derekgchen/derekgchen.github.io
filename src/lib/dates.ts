import type { Experience } from '../data/experience';

/** 'YYYY-MM' → months since year 0, for arithmetic. */
export const toIndex = (ym: string) => {
  const [y, m] = ym.split('-').map(Number);
  return y * 12 + (m - 1);
};

/** Dates on the site read as 'YYYY-MM' (or 'YYYY-MM-DD'), so months show as they're stored. */
export const formatMonth = (ym: string) => ym;

export const dateRange = (e: Pick<Experience, 'start' | 'end'>) => `${formatMonth(e.start)} to ${e.end ? formatMonth(e.end) : 'Present'}`;

/** 'YYYY-MM' → 'Fall YYYY' / 'Spring YYYY' if it falls in a term, else null. */
const term = (ym: string) => {
  const [y, m] = ym.split('-').map(Number);
  if (m >= 8) return `Fall ${y}`;
  if (m <= 6) return `Spring ${y}`;
  return null;
};

/**
 * A period in MIT terms when its ends fall in terms: 'Fall 2024', or
 * 'Fall 2024 to Fall 2025' across several. Otherwise a month range.
 */
export const formatTerm = (p: Pick<Experience, 'start' | 'end'>) => {
  const from = term(p.start);
  const to = p.end ? term(p.end) : null;
  if (!from || !to) return dateRange(p);
  return from === to ? from : `${from} to ${to}`;
};

/** How an entry's dates read in lists: in terms if it is term-based. */
export const entryDates = (e: Experience) => (e.periods ? formatTerm(e) : dateRange(e));

/** List order on Experience pages: pinned entries first, then most recent. */
export const byListOrder = (a: Experience, b: Experience) =>
  Number(!!b.pinned) - Number(!!a.pinned) || byRecent(a, b);

/** Ongoing first, then by most recent end, then by most recent start. */
export const byRecent = (a: Experience, b: Experience) =>
  toIndex(b.end ?? '9999-12') - toIndex(a.end ?? '9999-12') || toIndex(b.start) - toIndex(a.start);
