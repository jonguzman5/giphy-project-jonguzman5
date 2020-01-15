import React, {Component} from 'react';
import axios from 'axios';

class Random extends Component {
  constructor(props){
    super(props)
    this.state = {
      url: ''
    }
  }

  myChangeHandler = (e) => {
    this.setState({url: e.target.value});
  }

  mySubmitHandler = (e) => {
    e.preventDefault();
    const input = this.state.url;
    const KEY = 'JjIwbA5iRRKn02sRLnakMOfgYXxPFVLC'
    axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${KEY}`)
      .then(res => {
        const data = res.data;
        console.log(data);
        this.setState({url: data.data.images.original.url})
    })
  }


  render(){
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>RANDOM!</h1>
        <input type='submit' />
        <img src={this.state.url}/>
      </form>
    )
  }
}

export default Random;
