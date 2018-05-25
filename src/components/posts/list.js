import React from "react";
import { Post } from "./post";

export const List = ({ posts }) => (
  <div className="panel panel-default">
    <div className="panel-heading">Posts</div>
    <div className="panel-body">
      <ul className="list-group">
        {posts.map(({ id, title }) => {
          return <Post key={id} id={id} title={title} />;
        })}
      </ul>
    </div>
  </div>
);
