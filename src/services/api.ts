const API_URL = 'http://localhost:4000';

async function request(path: string, options: RequestInit = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers },
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message = data?.errors?.join(', ') || data?.error || 'Something went wrong.';
    throw new Error(message);
  }

  return data;
}

export const api = {
  get: (path: string) => request(path),
  post: (path: string, body?: unknown) =>
    request(path, { method: 'POST', body: body ? JSON.stringify(body) : undefined }),
};
