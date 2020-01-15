import React, {Component} from 'react';

class Trend extends Component {
  render(){
    const images = this.props.images;
    return (
      <img src={images}/>
    )
  }
}

export default Trend;
