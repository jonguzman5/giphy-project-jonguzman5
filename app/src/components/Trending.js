import React, {Component} from 'react';
import axios from 'axios';
import Trend from './Trend';

class Trending extends Component {
  constructor(props){
    super(props)
    this.state = {
      query: []
    }
  }

  componentDidMount(){
    const input = this.state.search;
    const KEY = 'JjIwbA5iRRKn02sRLnakMOfgYXxPFVLC'
    axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${KEY}`)
      .then(res => {
        const data = res.data.data;
        //console.log(data);
        let arr = [];
        data.forEach(r => {
          arr.push(r.images.original.url);
        })
        this.setState({query: arr})
    })
  }

  render(){
    return (
      <div>
        <h1>TRENDING!</h1>
        <ul>
          {Object.keys(this.state.query).map(key => (
            <Trend
              key={key}
              index={key}//to access key
              images={this.state.query[key]}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Trending;
