import React from "react";
import { connect } from "react-redux";
import { selectPost } from "../current-post";

const PostComponent = ({ id, title, selectPost }) => (
  <li className="list-group-item" onClick={() => selectPost(id)}>
    {title}
  </li>
);

const mapDispatchToProps = dispatch => ({
  selectPost: id => dispatch(selectPost(id))
});

export const Post = connect(null, mapDispatchToProps)(PostComponent);
