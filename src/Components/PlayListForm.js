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
      console.log(response, "Here you are");

    }).catch(err => {
      console.log(err, "Not so fast");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle: ''});
  }

  render() {
    return (
      <div className="card-block col-4">
        <div className="card ">
          <h3 className='card-header'>Add your Song:</h3>
          <div class="form-line">
            <form onSubmit={this.addToList}>
              <div className="form-group">
                <label>
                  Your Name:
                  <input type="text" className="form-control" value={this.state.userName} onChange={this.handleInputChange("userName")} name="userName"/>
                </label>
              </div>
              <div className="form-group">
                <label>
                  Artist/Band:
                  <input onChange={this.handleInputChange("songArtist")} className="form-control" name="songArtist" type="text" value={this.state.songArtist}/>
                </label>
              </div>
              <div className="form-group">
                <label>
                  Song Title:
                  <input onChange={this.handleInputChange("songTitle")} className="form-control" name="songTitle" type="text" value={this.state.songTitle}/>
                </label>
              </div>
              <div className="form-group">
                <label>
                  Comments:
                  <textarea onChange={this.handleInputChange("songNotes")} className="form-control" name="songNotes" type="text" rows="3" value={this.state.songNotes}/>
                </label>
              </div>
              <div className="form-group">
                <input className="btn btn-success submit" type="submit" value="Submit"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }



}

export default PlayListForm;
//******************************************************************************
