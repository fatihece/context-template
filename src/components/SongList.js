import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    //this.props  = songs: state.songs
    console.log(this.props)
    return <div>SongList</div>;
  }
}


//this is convention
const mapStateToProps = (state) => {
  return {songs: state.songs}
}

export default connect(mapStateToProps)(SongList);

// function connect(){
// return function () {
//   return "Hİ there";
//   }
// }
//connect()() // first set retrun the function, second set invokes the function get returned