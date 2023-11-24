export default async (root: string) => {
    const response = await fetch(`http://127.0.0.1:3333/${root}`)
    return await response.text()
}