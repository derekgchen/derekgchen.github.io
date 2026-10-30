// "Recently" on the About page: a few personal, undated lines about what I'm
// up to (not a résumé; that's what Experience is for). Lines may contain links.

export const recently: string[] = [
  `reconnected with friends in NYC at HRT offer weekend.`,
  `gotten into cooking. I'm trying to build a good sense of flavor combo and general cooking intuition in the kitchen rather than relying on set recipes.`,
  `been writing Botany for MIT Science Olympiad. It's truly a bittersweet moment for probably one of my final times being involved in this outstanding organization.`,
  `been wrapping up my M.Eng. this semester so it'll be my final one at MIT :( But this is because I'm planning my move to the Bay where I'll be interning at <a href="https://www.genesis.ml/" target="_blank">Genesis Molecular AI</a> for the spring!`,
];

/** When the lines above were last revised; update it whenever you edit them. */
export const recentlyUpdated = '2026-10';

/** "Stuck in my head" on the About page: one hand-picked song. `url` is
    optional; paste a Spotify (or any) share link to make the title a link. */
export const stuckInMyHead: { title: string; artist: string; url?: string } = {
  title: 'Another Day of Sun',
  artist: 'La La Land',
  url: 'https://open.spotify.com/track/5kRBzRZmZTXVg8okC7SJFZ',
};
