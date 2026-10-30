// Password encryption for locked posts. Runs in both Node (at build time, to
// encrypt) and the browser (to decrypt), using the standard Web Crypto API.
// AES-256-GCM with a key derived from the password by PBKDF2-SHA256.

export interface Sealed {
  salt: string;
  iv: string;
  ciphertext: string;
}

const ITERATIONS = 600_000;

function toBase64(bytes: Uint8Array) {
  let binary = '';
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary);
}

function fromBase64(text: string) {
  return Uint8Array.from(atob(text), (c) => c.charCodeAt(0));
}

async function deriveKey(password: string, salt: Uint8Array) {
  const material = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', hash: 'SHA-256', salt, iterations: ITERATIONS },
    material,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt'],
  );
}

export async function encrypt(plaintext: string, password: string): Promise<Sealed> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt);
  const data = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(plaintext));
  return { salt: toBase64(salt), iv: toBase64(iv), ciphertext: toBase64(new Uint8Array(data)) };
}

/** The plaintext, or null if the password is wrong. */
export async function decrypt(sealed: Sealed, password: string): Promise<string | null> {
  const key = await deriveKey(password, fromBase64(sealed.salt));
  try {
    const data = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: fromBase64(sealed.iv) }, key, fromBase64(sealed.ciphertext));
    return new TextDecoder().decode(data);
  } catch {
    return null;
  }
}
