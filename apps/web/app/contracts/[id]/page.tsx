export default function Home({
    params
}: { params: { id: string } }) {
    return <h1>Contracts {params.id}</h1>
}