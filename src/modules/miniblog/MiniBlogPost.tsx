import {useState} from "react";
import {MiniBlogPostType} from "./types/MiniBlogPostType.ts";
import {MiniBlogCommentType} from "./types/MiniBlogCommentType.ts";
import {MiniBlogComment} from "./MiniBlogComment.tsx";

interface MiniBlogPostProps {
    post: MiniBlogPostType
}

export const MiniBlogPost = ({post}: MiniBlogPostProps) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [displayComments, setDisplayComments] = useState<boolean>(false)
    const [comments, setComments] = useState<MiniBlogCommentType[]>()

    const getComments = async () => {
        setLoading(true)
        const data = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + post.id)
        const json = await data.json()
        setComments(json)
    }

    const toggleDisplayComments = () => {
        displayComments ? setDisplayComments(false) : setDisplayComments(true)
    }

    const toggleComments = () => {
        getComments()
            .catch(console.error)
            .finally(() => {
                setLoading(false)
                toggleDisplayComments()
            })
    }

    if (loading) {
        return (<span>Loading...</span>)
    }

    return (
        <div className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button className={"collapse-button"} onClick={toggleComments}>{displayComments ? "^" : "V"} Toggle comments</button>
            {displayComments && (
                <div className="comments">
                    {(!loading && comments) ? comments.map((comment, key) => (
                        <MiniBlogComment key={key} comment={comment} />
                    )) : (
                        <span>Loading...</span>
                    )}
                </div>
            )}
        </div>
    )
}