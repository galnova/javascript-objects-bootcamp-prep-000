var playlist = {
  // artistName: "Queen",
  // songTitle: "Killer Queen"
};

function updatePlaylist(object, artistName, songTitle) {
  Object.assign({}, playlist, {
    artistName: ['Phil Ochs'],
    songTitle: ['Here\'s to the State of Mississippi']
  });
  
  return playlist;
}

function removeFromPlaylist() {
  delete playlist.artistName;
  
  return playlist;
}