import React, { Component } from "react";

import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPostId: null,
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => ({
          ...post,
          author: "Max",
        }));

        this.setState(
          {
            posts: updatedPosts,
          },
        );
      });
  }

  postSelectedHandler = (id) => {
    this.setState(
      { selectedPostId: id },
    );
  };

  render() {
    const { posts, selectedPostId } = this.state;
    const displayPosts = posts.map((post) => (
      <Post
        key={post.id}
        title={post.title}
        author={post.author}
        clicked={() => this.postSelectedHandler(post.id)}
      />
    ));

    return (
      <div>
        <section className="Posts">
          {displayPosts}
        </section>
        <section>
          <FullPost postId={selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
