interface MiniBlogPostProps {
    post: MiniBlogPostType
}

export const MiniBlogPost = ({post}: MiniBlogPostProps) => {
    return (
        <div className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}