import React, { Component } from 'react';
import '../Styles/App.css';

import NavBar from './NavBar.js';
import PlayListItem from './PlayListItem.js'
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js';



//Your App.js component should only have import statements for your NavBar, PlayList, and PlayListForm.

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
      </div>
    );
  }
}

export default App;
