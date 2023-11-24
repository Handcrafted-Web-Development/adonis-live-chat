export default async (url: string = '', data = {}) => {
    const response = await fetch(`http://127.0.0.1:3333/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return await response.json();
}