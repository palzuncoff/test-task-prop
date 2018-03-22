import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadPosts } from '../AC';
import { sortedPosts } from '../selectors';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    const { posts } = this.props;
    const renderTable = post => (
      <tr key={post.id}>
        <td>{post.id}</td>
        <td>{post.userId}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
      </tr>);

    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Tytle</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => renderTable(post))}
        </tbody>
      </table>
    );
  }
}

App.propTypes = {
  loadPosts: PropTypes.func.isRequired,
  posts: PropTypes.array,
};

App.defaultProps = {
  posts: [],
};

App.state = {};

const mapStateToProps = state => ({
  posts: sortedPosts(state, 'userId'),
});

const mapDispatchToProps = {
  loadPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
