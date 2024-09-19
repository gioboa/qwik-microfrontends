export interface RemoteData {
	name: string;
	url: string;
}

export const remotes: Record<string, RemoteData> = {
	home: { name: 'home', url: 'http://localhost:4174/home/' },
	checkout: { name: 'checkout', url: 'http://localhost:4175/checkout/' },
};
