import React, { Component } from 'react';
import './PlayListItem.js'

//Your PlayListcomponent should pass down the state in the form of props to your PlayListItem component which will render the actual play list entries. (Hint: PlayListItem should be imported in PlayList)

//The state for your PlayList should just have one key value pair, songs, in order to properly function with the fetch function from the tinylasagna.js file that you will copy into the PlayListComponent (follow the directions in that file).

//Inside of a componentDidMount function on the PlayList component
//You should have the following fetch call to retrieve the playlists
//from the server. Don't worry as much about how these function for now, as much placing
//them in the right locations and getting them to work/sync up properly with the component.

//******************************************************************************
//***************************************************************************

fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
  return results.json();
}).then(data => {
  this.setState({songs: data});
  console.log("state", this.state.songs);
})

//Also in your PlayList component you should have a function that manually updates
//the playlist when a user presses a button. Use the following "fetchData" function
//to manually update your playlist.

fetchData = (e) => {
  e.preventDefault();
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
    return results.json();
  }).then(data => {
    this.setState({songs: data});
  })
}

export default PlayList;
