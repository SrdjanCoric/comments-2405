import React from "react";
import ReactDOM from "react-dom/client";

const ce = React.createElement;

const App = () => {
  return ce("div", {
    className: "comments",
    children: [
      ce("h2", null, "Comments (2)"),
      ce("div", {
        className: "parent-comment",
        children: [
          ce(Comment, {
            author: "Srdjan",
            postedAt: "3 minutes ago",
            body: "Srdjan's comment",
          }),
          ce(Comment, {
            author: "Max",
            postedAt: "2 minutes ago",
            body: "Max's comment",
          }),
          ce(Comment, {
            author: "Nick",
            postedAt: "1 minute ago",
            body: "Nick's comment",
          }),
          ce(Comment, {
            author: "Rodney",
            postedAt: "5 hours ago",
            body: "Not Rodney's comment",
          }),
        ],
      }),
    ],
  });
};

const Comment = ({ author, postedAt, body }) => {
  return ce("div", {
    className: "comment",
    children: [
      ce("hr"),
      ce("div", {
        className: "image",
        children: [
          ce("img", { src: "https://i.postimg.cc/Y0RcrdHp/no-user-image.gif" }),
        ],
      }),
      ce("div", {
        className: "header",
        children: [
          ce("h3", { className: "author" }, author),
          ce("span", null, postedAt),
        ],
      }),
      ce("p", null, body),
    ],
  });
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(React.createElement(App));
