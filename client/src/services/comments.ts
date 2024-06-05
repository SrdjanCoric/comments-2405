import axios from "axios";
import { NewComment } from "../types";

export const getComments = async () => {
  const { data } = await axios.get("/api/comments");
  return data;
};

export const getReplies = async (commentId: string) => {
  const { data } = await axios.get(
    `/api/comment_replies?comment_id=${commentId}`
  );
  return data;
};

export const createComment = async (newComment: NewComment) => {
  const { data } = await axios.post("/api/comments", { ...newComment });
  return data;
};
