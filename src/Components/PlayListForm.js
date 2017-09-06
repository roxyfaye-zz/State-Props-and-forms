import React, { Component } from 'react';

//The state for your PlayListForm component should have userName, songArtist, songTitle, and songNotes in order to function properly with the fetch functions from the tinylasgna.js file that you will copy into the component. Follow the directions in that file.
//******************************************************************************
//******************************************************************************
//In your PlayListForm component you should have a addToList function that happens
//when the form is submitted.
//This expression or method (depending on the syntax you choose) will be comparable to this:
class PlayListForm extends Component {
  constructor(props) {
    super(props)
    this.handleinputchange = this.handleInputChange.bind(this);
    this.addSong = this.addSong.bind(this);

    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }
  }
  handleInputChange(key) {
    return function(event) {
      var state = {};
      state[key] = event.target.value;
      this.setState(state);
    }.bind(this);
  }

  AddSong = (event) => {
    event.preventDefault();
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle: ''});
  }

  render() {
    return (
      
    );

}
}

export default PlayListForm;
//******************************************************************************
