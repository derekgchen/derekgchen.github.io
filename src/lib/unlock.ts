// Browser side of locked posts. A password entered on the Writing list is kept
// for the rest of the tab's session, so the post opens without asking again.

const key = (slug: string) => `unlock:${slug}`;

export function rememberPassword(slug: string, password: string) {
  try {
    sessionStorage.setItem(key(slug), password);
  } catch {
    // Storage blocked: the post page will just ask again.
  }
}

export function rememberedPassword(slug: string) {
  try {
    return sessionStorage.getItem(key(slug));
  } catch {
    return null;
  }
}

/** Show progress and errors on an UnlockForm while `attempt` runs; false means the password was wrong. */
export function handleUnlock(form: HTMLFormElement, attempt: (password: string) => Promise<boolean>) {
  const input = form.querySelector('input')!;
  const button = form.querySelector('button')!;
  const status = form.querySelector('.status')!;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    button.disabled = true;
    status.textContent = 'Unlocking…';
    let ok = false;
    try {
      ok = await attempt(input.value);
      status.textContent = ok ? '' : 'Wrong passcode.';
    } catch {
      status.textContent = 'Something went wrong. Try again.';
    }
    button.disabled = false;
    if (!ok) input.select();
  });
}
