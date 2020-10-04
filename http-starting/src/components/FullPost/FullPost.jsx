import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import "./FullPost.css";

class FullPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedPost: null,
    };
  }

  componentDidUpdate() {
    const { postId } = this.props;
    const { loadedPost } = this.state;
    if (postId && ((!loadedPost) || (loadedPost && loadedPost.id !== postId))) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => {
          this.setState({
            loadedPost: response.data,
          });
        });
    }
  }

  render() {
    const { postId } = this.props;
    const { loadedPost } = this.state;
    let post = <p>Please select a Post!</p>;
    if (postId) {
      post = <p>Loading...</p>;
    }
    if (loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{loadedPost.title}</h1>
          <p>{loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>

      );
    }
    return post;
  }
}

FullPost.propTypes = {
  postId: PropTypes.string,
};

export default FullPost;
