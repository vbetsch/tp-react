import {MainPage} from "../../components/templates/MainPage.tsx";
import {useEffect, useState} from "react";

export const MiniBlogPage = () => {
    const [loading, setLoading] = useState(false)
    const [repositories, setRepositories] = useState([])

    const getPosts = async () => {
        setLoading(true)
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await data.json()
        setRepositories(json)
    }

    useEffect(() => {
        getPosts()
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return (<span>Loading...</span>)
    }

    return (
        <MainPage title={"MiniBlog"}>
            <div className="posts">
                {repositories.map((repo: MiniBlogPost, key) => (
                    <p key={key}>{repo.title}</p>
                ))}
            </div>
        </MainPage>
    )
}