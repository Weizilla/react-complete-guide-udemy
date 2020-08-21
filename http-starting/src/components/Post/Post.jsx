import React from "react";

import "./Post.css";

const post = (props) => {
  const { title } = props;
  return (
    <article className="Post">
      <h1>{title}</h1>
      <div className="Info">
        <div className="Author">Author</div>
      </div>
    </article>
  );
};

export default post;
