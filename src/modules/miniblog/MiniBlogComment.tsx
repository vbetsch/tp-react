import {MiniBlogCommentType} from "./types/MiniBlogCommentType.ts";

interface MiniBlogCommentProps {
    comment: MiniBlogCommentType
}

export const MiniBlogComment = ({comment}: MiniBlogCommentProps) => {
    return (
        <div className="comment">
            <span className="comment-title">{comment.name} <small>({comment.email})</small></span>
            <p>{comment.body}</p>
        </div>
    )
}