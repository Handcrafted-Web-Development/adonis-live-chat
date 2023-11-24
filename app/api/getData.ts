export default async (url: string) => {
    const response = await fetch(`http://127.0.0.1:3333/${url}`)
    return await response.text()
}