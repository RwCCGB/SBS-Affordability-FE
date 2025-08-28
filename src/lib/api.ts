export type Region = { id: number; name: string };

// In dev we use Next rewrites, so relative paths are fine.
// In prod you can set NEXT_PUBLIC_API_BASE_URL to call the real API if it’s on a different domain.
const BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3001';

async function fetchJSON<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    // Ensure cookies/credentials behavior as you need; default is fine for now
    ...init,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status}: ${text || res.statusText}`);
  }
  return res.json() as Promise<T>;
}

export const Api = {
  ping: () =>
    fetchJSON<{ status: string; timestamp: string; backendIsOnline: boolean; databaseIsOnline: boolean }>(
      '/api/ping'
    ),
  getRegions: () => fetchJSON<Region[]>('/api/regions'),
};
