import { useState, useEffect } from "react";
import AddCommentsForm from "./components/AddCommentsForm";
import Comments from "./components/Comments";
import { CommentWithReplies, NewComment } from "./types/index.ts";
import { createComment, getComments, getReplies } from "./services/comments.ts";

function App() {
  const [comments, setComments] = useState<CommentWithReplies[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await getComments();
        setComments(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchComments();
  }, []);

  const handleMoreReplies = async (commentId: string) => {
    try {
      const data = await getReplies(commentId);
      setComments((prevState) => {
        return prevState.map((c) => {
          if (c.id === commentId) {
            return { ...c, replies: c.replies.concat(data) };
          }
          return c;
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (
    newComment: NewComment,
    callback?: () => void
  ) => {
    try {
      const data = await createComment(newComment);
      setComments((prevState) => prevState.concat(data));
      if (callback) {
        callback();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Comments comments={comments} onMoreReplies={handleMoreReplies} />
      <AddCommentsForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
