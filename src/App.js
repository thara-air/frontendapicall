import React, { Component } from 'react'
import './App.css';
import PostForm from './components/PostForm'
import PostList from './components/PostList';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/api'
class App extends Component {
  render() {
    return (
      <div className="App">
        <PostList />
      </div>
    )
  }
}
export default App
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
