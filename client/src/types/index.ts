export interface Comment {
  id: string;
  author: string;
  body: string;
  postedAt: number;
}

export interface NewComment extends Omit<Comment, "id" | "postedAt"> {}

export interface Reply extends Comment {
  comment_id: string;
}

export interface CommentWithReplies extends Comment {
  replies_count: number;
  replies: Reply[];
}
