import React, {Component} from 'react';
import axios from 'axios';
import Search from './Search';

class Regular extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: []
    }
  }

  myChangeHandler = (e) => {
    this.setState({search: e.target.value});
  }

  mySubmitHandler = (e) => {
    e.preventDefault();
    const input = this.state.search;
    const KEY = 'JjIwbA5iRRKn02sRLnakMOfgYXxPFVLC'
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=${KEY}`)
      .then(res => {
        const data = res.data.data;
        //console.log(data);
        let arr = [];
        data.forEach(r => {
          arr.push(r.images.original.url);
        })
        this.setState({search: arr});
    })
  }


  render(){
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>REGULAR!</h1>
        <input type='text' onChange={this.myChangeHandler}/>
        <input type='submit' />
        <div>
          {Object.keys(this.state.search).map(key => (
            <Search
              key={key}
              index={key}//to access key
              images={this.state.search[key]}
            />
          ))}
        </div>
        {/*<img src={this.state.search} alt="gif"/>*/}
      </form>
    )
  }
}

export default Regular;
