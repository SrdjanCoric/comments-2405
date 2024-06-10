import { render, screen } from "@testing-library/react";
import App from "./App";
import * as commentsService from "./services/comments";
import { Reply, CommentWithReplies } from "./types";
import userEvent from "@testing-library/user-event";

vi.mock("./services/comments.ts");
const mockedCommentService = vi.mocked(commentsService, true);

const mockedComments: CommentWithReplies[] = [
  {
    id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
    author: "Reed Fisher",
    body: "Sint in in sunt amet.",
    postedAt: 1550488214207,
    replies_count: 2,
    replies: [
      {
        id: "116dbd01-d5f3-4dfb-afeb-f822a9264a5e",
        comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
        author: "Kathleen Nikolaus",
        body: "Officia suscipit sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
        postedAt: 1550419941546,
      },
    ],
  },
];

const mockedReplies: Reply[] = [
  {
    id: "1d549a1b-4db1-4c10-9941-60c3a0c111cb",
    comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
    author: "Sean Bechtelar",
    body: "Quam ea est provident enim necessitatibus. Sint veniam sed iusto omnis eaque dolores voluptas omnis ipsa. Vero cupiditate corrupti amet.",
    postedAt: 1550434979501,
  },
];

describe("App", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });
  it("contains comment with the author's name", async () => {
    mockedCommentService.getComments.mockResolvedValueOnce(mockedComments);
    render(<App />);
    const heading = await screen.findByRole("heading", {
      level: 3,
      name: "Reed Fisher",
    });
    expect(heading).toBeInTheDocument();
  });
  it("displays additional replies when Show More Replies is clicked", async () => {
    mockedCommentService.getComments.mockResolvedValue(mockedComments);
    mockedCommentService.getReplies.mockResolvedValue(mockedReplies);
    render(<App />);
    const link = await screen.findByRole("link", { name: /Show More Replies/ });
    const user = userEvent.setup();
    await user.click(link);
    const replyAuthor = await screen.findByRole("heading", {
      level: 3,
      name: /Sean/,
    });

    expect(replyAuthor).toBeInTheDocument();
  });
  it("removes the link when the link is clicked", async () => {
    mockedCommentService.getComments.mockResolvedValue(mockedComments);
    mockedCommentService.getReplies.mockResolvedValue(mockedReplies);
    render(<App />);
    const link = await screen.findByRole("link", { name: /Show More Replies/ });
    const user = userEvent.setup();
    await user.click(link);
    expect(link).not.toBeInTheDocument();
  });

  // it("shows heading 1 with Emily in it", async () => {
  //   render(<App />);
  //   const heading = await screen.findByRole("heading", {
  //     level: 1,
  //     name: "Emily",
  //   });
  //   expect(heading).toBeInTheDocument();
  // });
});
// waitFor
// App

// get products
// toggling of addform or edit form
