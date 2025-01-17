import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
      //error: ''
    }
  }

  componentDidMount() {
    getUrls()
    .then(data => this.setState({urls: data}))
    //.catch(error => this.setState({error: error}))
  }

  postUrls = (data) => {
    this.setState({urls: [...this.state.urls], data})
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm postUrls={this.postUrls}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
