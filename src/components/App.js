import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadPosts, sortPosts } from '../AC';
import { SORT_BY_ID, SORT_BY_USER, SORT_BY_TITLE, SORT_BY_BODY} from '../constants'
import { sortedPosts, getPostLoaded, getPostsLoading } from '../selectors';
import './App.css';

class App extends Component {
    componentDidMount() {
        const { loaded } = this.props;
        if (!loaded) {
            this.props.loadPosts();
        }
    }

  handlerSortSelect = culumn => {
      this.props.sortPosts(culumn)
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
                      <th><span onClick={() => { this.handlerSortSelect(SORT_BY_ID); }}>ID</span></th>
                      <th><span onClick={() => { this.handlerSortSelect(SORT_BY_USER); }}>User</span></th>
                      <th><span onClick={() => { this.handlerSortSelect(SORT_BY_TITLE); }}>Title</span></th>
                      <th><span onClick={() => { this.handlerSortSelect(SORT_BY_BODY); }}>Body</span></th>
                  </tr>
              </thead>
              <tbody>
                  {posts.map(renderTable)}
              </tbody>
          </table>
      );
  }
}

App.propTypes = {
    loadPosts: PropTypes.func.isRequired,
    posts: PropTypes.array,
    loaded: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    sortPosts: PropTypes.func.isRequired,
};

App.defaultProps = {
    posts: [],
};

const mapStateToProps = state => ({
    posts: sortedPosts(state),
    loaded: getPostLoaded(state),
    loading: getPostsLoading(state),
});

const mapDispatchToProps = {
    loadPosts,
    sortPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
