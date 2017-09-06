import React, { Component } from 'react';

class PlayListItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { playlistitem } = this.props;
    console.log(this.props);
    return (

      <div className="col-sm-4" key={ playlistitem.url }>
        <div class="card">
          <div class="card-block">
            <h4 class="card-title">
              { playlistitem.name }</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayListItem;
