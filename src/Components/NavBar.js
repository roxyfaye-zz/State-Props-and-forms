import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">Play What?</h1>
            <hr className="my-4"/>
            <p className="lead">Ear tunes.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
