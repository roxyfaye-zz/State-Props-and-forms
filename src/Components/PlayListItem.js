import React, {Component} from 'react';

class PlayListItem extends Component {


  render() {
    const { song } = this.props;
    return (

      <div className="card-block col-12" key={song.id}>
        <div class="card">
          <div class="card-block">
            <p className="card-title">
              Title: {song.songTitle}</p>
            <p className="card-title">{song.songTitle}
              Artist: {song.songArtist}</p>
            <p className="card-title">User: {song.userName}</p>
            <p className="card-title">Comments: {song.songNotes}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayListItem;
