import React, {Component} from 'react';
import $ from 'jquery';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term : ''};
  }

  render () {
    return (
       <div>
         <input id="searchInput" onChange = {event => {this.setState({term: event.target.value})}} />
         value of the input: {this.state.term}
       </div>
    );
  }
}

export default SearchBar;
