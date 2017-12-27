var playlist = {
  artistName: "Queen",
  songTitle: "Killer Queen"
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