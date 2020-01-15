import React, {Component} from 'react';

class Search extends Component {
  render(){
    const images = this.props.images;
    return (
      <img src={images}/>
    )
  }
}

export default Search;
