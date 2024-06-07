import { useState } from "react";
import { NewComment } from "../types";

interface AddCommentsFormProps {
  onSubmit: (newComment: NewComment, callback?: () => void) => void;
}

const AddCommentsForm = ({ onSubmit }: AddCommentsFormProps) => {
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  // const handleSubmit = (e: React.SyntheticEvent) => {
  //   e.preventDefault();
  //   const comment = { author, body };
  //   onSubmit(comment);
  // };
  const reset = () => {
    setAuthor("");
    setBody("");
  };
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ author, body }, reset);
      }}
    >
      <h2>Post a Comment</h2>
      <div className="input-group">
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="body">Your Comment</label>
        <textarea
          id="body"
          name="body"
          cols={30}
          rows={10}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddCommentsForm;
