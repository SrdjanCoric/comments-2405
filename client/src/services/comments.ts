import axios from "axios";
import { CommentWithReplies, NewComment, Reply } from "../types";
import { z } from "zod";

const replySchema = z.object({
  id: z.string(),
  comment_id: z.string(),
  author: z.string(),
  body: z.string(),
  postedAt: z.number(),
});

const commentSchema = z.object({
  id: z.string(),
  author: z.string(),
  body: z.string(),
  postedAt: z.number(),
  replies_count: z.number(),
  replies: z.array(replySchema),
});

const getCommentsResponseSchema = z.array(commentSchema);
const getRepliesResponseSchema = z.array(replySchema);

export const getComments = async (): Promise<CommentWithReplies[]> => {
  const { data } = await axios.get<{ data: CommentWithReplies[] }>(
    "/api/comments"
  );
  return getCommentsResponseSchema.parse(data);
};

export const getReplies = async (commentId: string): Promise<Reply[]> => {
  const { data } = await axios.get(
    `/api/comment_replies?comment_id=${commentId}`
  );
  return getRepliesResponseSchema.parse(data);
};

export const createComment = async (
  newComment: NewComment
): Promise<CommentWithReplies> => {
  const { data } = await axios.post("/api/comments", { ...newComment });
  return data;
};
