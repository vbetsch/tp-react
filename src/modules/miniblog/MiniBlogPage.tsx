import {MainPage} from "../../components/templates/MainPage.tsx";
import {useEffect, useState} from "react";
import {MiniBlogPost} from "./MiniBlogPost.tsx";

export const MiniBlogPage = () => {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        setLoading(true)
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await data.json()
        setPosts(json)
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
                {posts.map((post: MiniBlogPostType, key) => (
                    <MiniBlogPost key={key} post={post}/>
                ))}
            </div>
        </MainPage>
    )
}