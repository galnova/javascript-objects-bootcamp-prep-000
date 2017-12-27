var playlist = {
  artistName: "Phil Ochs",
  songTitle: "Here's to the State of Mississippi"
};

function updatePlaylist(object, artistName, songTitle) {
  Object.assign({}, playlist, {
    artistName: ['Phil Ochs'],
    songTitle: ['Black Parade']
  });
  
  return playlist;
}

function removeFromPlaylist() {
  delete playlist.artistName;
  
  return playlist;
}