import { useState, useEffect } from "react";
import AddCommentsForm from "./components/AddCommentsForm";
import Comments from "./components/Comments";
import data from "./mockData/comments.ts";
import { CommentWithReplies } from "./types/index.ts";

function App() {
  const [comments, setComments] = useState<CommentWithReplies[]>([]);

  useEffect(() => {
    setComments(data);
  }, []);
  return (
    <div>
      <Comments comments={comments} />
      <AddCommentsForm />
    </div>
  );
}

export default App;
