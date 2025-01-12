export class NidocaClient<T> {
    public async getAll(url: string): Promise<T[]> {
        if (!url) return [];
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }
}