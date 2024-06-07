import userEvent from "@testing-library/user-event";
import AddCommentsForm from "./AddCommentsForm";
import { render, screen } from "@testing-library/react";

const mockSubmit = vi.fn();

describe("AddCommentsForm", () => {
  it("contains a h2 heading", () => {
    render(<AddCommentsForm onSubmit={mockSubmit} />);
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toBeInTheDocument();
  });
  it("changes the input state of the author", async () => {
    const user = userEvent.setup();
    render(<AddCommentsForm onSubmit={mockSubmit} />);
    const inputAuthor = screen.getByRole("textbox", { name: "Your Name" });
    await user.type(inputAuthor, "Srdjan");
    expect(inputAuthor).toHaveValue("Srdjan");
  });
  it("changes the input state of the body", async () => {
    const user = userEvent.setup();
    render(<AddCommentsForm onSubmit={mockSubmit} />);
    const inputBody = screen.getByRole("textbox", { name: "Your Comment" });
    await user.type(inputBody, "Whatever I want");
    expect(inputBody).toHaveValue("Whatever I want");
  });
});

// getByRole
