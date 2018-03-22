import React, { Component } from 'react';
import './App.css'

class App extends Component {
  state = {}

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

export default App;
