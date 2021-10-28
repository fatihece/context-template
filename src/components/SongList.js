import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    return <div>SongList</div>;
  }
}


//this is convention
const mapStateTOProps = () => {
  
}

export default connect()(SongList);

// function connect(){
// return function () {
//   return "Hİ there";
//   }
// }
//connect()() // first set retrun the function, second set invokes the function get returned