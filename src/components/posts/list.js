import React from "react";

export const List = ({ posts }) => (
  <div className="panel panel-default">
    <div className="panel-heading">Panel heading</div>
    <div className="panel-body">
      <p>All the posts from json placeholder</p>
    </div>

    <ul className="list-group">
      {posts.map(({ id, title }) => {
        return (
          <li className="list-group-item" key={id}>
            {title}
          </li>
        );
      })}
    </ul>
  </div>
);
