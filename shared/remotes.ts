export interface RemoteData {
  name: string;
  url: string;
}

export const remotes: Record<string, RemoteData> = {
  home: { name: 'home', url: 'http://localhost:5174/home/' },
  checkout: { name: 'checkout', url: 'http://localhost:5175/' },
};
