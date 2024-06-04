import { CommentWithReplies } from "../types";
import CommentThread from "./CommentThread";

interface CommentsProps {
  comments: CommentWithReplies[];
}

const Comments = ({ comments }: CommentsProps) => {
  return (
    <div className="comments">
      <h2>Comments (2)</h2>
      {comments.map((comment) => {
        return <CommentThread key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
