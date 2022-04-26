import React, { Component } from 'react';
import { postUrls } from '../../apiCalls'

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value });
    //console.log(this.state.title)
  }

  // handleUrlChange = (e) => {
  //   this.setState({[e.target.name]: e.target.value})
  // }

  handleSubmit = (e) => {
    e.preventDefault();
  
    postUrls({
      title: this.state.title,
      long_url: this.state.urlToShorten
    }).then(data => this.props.postUrls(data))
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          className='title-input'
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={(e) => this.handleChange(e)}
        />

        <input
          className='url-input'
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={(e) => this.handleChange(e)}
        />

        <button className='button-submit' onClick={(e) => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
