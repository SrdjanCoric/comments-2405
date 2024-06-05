import { CommentWithReplies } from "../types";
import Comment from "./Comment";

interface CommentProps {
  comment: CommentWithReplies;
  onMoreReplies: (id: string) => void;
}

const CommentThread = ({ comment, onMoreReplies }: CommentProps) => {
  // const handleMoreReplies = (e:SyntheticEvent) => {

  // }
  return (
    <div className="parent-comment">
      <Comment {...comment} />
      <div className="replies">
        {comment.replies.map((reply) => {
          return <Comment key={reply.id} {...reply} />;
        })}
        {comment.replies_count === comment.replies.length ? null : (
          <a
            href="#"
            className="show_more"
            onClick={(e) => {
              e.preventDefault();
              onMoreReplies(comment.id);
            }}
          >
            Show More Replies ({comment.replies_count - 1})
          </a>
        )}
      </div>
    </div>
  );
};

export default CommentThread;

// interface CommentProps {
//   comment: CommentWithReplies;
//   setComments: Dispatch<SetStateAction<CommentWithReplies[]>>;
// }

// const handleMoreReplies = async (e: SyntheticEvent) => {
//   e.preventDefault();
//   try {
//     const { data } = await axios.get(
//       `/api/comment_replies?comment_id=${comment.id}`
//     );
//     setComments((prevState) => {
//       return prevState.map((c) => {
//         if (c.id === comment.id) {
//           return { ...c, replies: c.replies.concat(data) };
//         }
//         return c;
//       });
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };
