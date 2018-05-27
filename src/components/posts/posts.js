import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { List } from "./list";
import { loadPost } from "./actions";
import { connect } from "react-redux";

class PostsComponent extends Component {
  componentDidMount() {
    this.props.loadPost();
  }
  render() {
    return (
      <div>
        {this.props.posts.length === 0 ? (
          <div>
            <h4>No posts yet...</h4>
          </div>
        ) : (
          <List posts={this.props.posts} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: Object.keys(state.posts).map(id => state.posts[id])
});

const mapDispatchToProps = dispatch => ({
  loadPost: bindActionCreators(loadPost, dispatch)
});

export const Posts = connect(mapStateToProps, mapDispatchToProps)(
  PostsComponent
);
