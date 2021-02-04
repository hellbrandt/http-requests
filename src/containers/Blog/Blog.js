import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        fullPost: {
            title: null,
            body: null
        }
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Neil'
                    }
                });
                this.setState({ posts: updatedPosts })
                // console.log(response);
            });
    }

    showFullPostHander = (clickedPost) => {
        this.setState({ fullPost: clickedPost });
    }

    render() {
        const posts = this.state.posts.map(post => {
            return (
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.showFullPostHander(post)}
                />
            )
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost title={this.state.fullPost.title} content={this.state.fullPost.body} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;