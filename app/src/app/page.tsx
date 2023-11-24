import getData from './../../api/getData'

export default async function home() {
    const request = await getData('')
    const data = JSON.parse(request)

    return (
        <>{data?.hello}</>
    )
}