import React, { Component } from "react";
import { connect } from "react-redux";
import { currentPostSelector } from "./selector";

class CurrentPostComponent extends Component {
  render() {
    const { currentPost } = this.props;
    if (!this.props.currentPost) {
      return <h3>Not yet selected a post</h3>;
    }
    const { title, post } = currentPost;
    return (
      <div>
        <h4>{title}</h4>
        <p>{post}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPost: currentPostSelector(state)
});

export const CurrentPost = connect(mapStateToProps)(CurrentPostComponent);
