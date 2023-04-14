async function asyncFetch<D>(url: string): Promise<D> {
        const response = await fetch(url);
        return await response.json()
}

export default asyncFetch