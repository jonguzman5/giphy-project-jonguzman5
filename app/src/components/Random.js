import React, {Component} from 'react';
import axios from 'axios';

class Random extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: ''
    }
  }

  myChangeHandler = (e) => {
    this.setState({search: e.target.value});
  }

  mySubmitHandler = (e) => {
    e.preventDefault();
    const input = this.state.search;
    const KEY = 'JjIwbA5iRRKn02sRLnakMOfgYXxPFVLC'
    axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${KEY}`)
      .then(res => {
        const data = res.data;
        console.log(data);
        //this.setState({search: data.data[0].url})
    })
  }


  render(){
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>RANDOM!</h1>
        <input type='text' onChange={this.myChangeHandler}/>
        <input type='submit' />
{/*        <ul>
          {Object.keys(this.state.zips).map(key => (
            <Zip
              key={key}
              index={key}//to access key
              //details={this.state.zips[key]}
              code={this.state.zips[key]}
            />
          ))}
        </ul>*/}
      </form>
    )
  }
}

export default Random;
