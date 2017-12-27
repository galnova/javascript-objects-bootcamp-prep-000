var playlist = {
  // artistName: "Queen",
  // songTitle: "Killer Queen"
};

function updatePlaylist(object, artistName, songTitle) {
  return Object.assign({}, playlist, {
    artistName: ['Phil Ochs'],
    songTitle: ['Here\'s to the State of Mississippi']
  });

}

function removeFromPlaylist() {
  delete playlist.artistName;
  
  return playlist;
}