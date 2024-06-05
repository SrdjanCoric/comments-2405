import { CommentWithReplies } from "../types";
import CommentThread from "./CommentThread";

interface CommentsProps {
  comments: CommentWithReplies[];
  onMoreReplies: (id: string) => void;
}

const Comments = ({ comments, onMoreReplies }: CommentsProps) => {
  return (
    <div className="comments">
      <h2>Comments (2)</h2>
      {comments.map((comment) => {
        return (
          <CommentThread
            key={comment.id}
            comment={comment}
            onMoreReplies={onMoreReplies}
          />
        );
      })}
    </div>
  );
};

export default Comments;
