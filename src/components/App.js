import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { loadPosts } from '../AC';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
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
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
            <td>94</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

App.propTypes = {
  loadPosts: PropType.func.isRequired,
};

App.state = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  loadPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
