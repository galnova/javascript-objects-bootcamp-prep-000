var playlist = {
  artistName: "Queen",
  songTitle: "Killer Queen"
};

function updatePlaylist(object, artistName, songTitle) {
  Object.assign({}, playlist, {
    artistName: ['MyChemicalRomance'],
    songTitle: ['Black Parade']
  });
}

function removeFromPlaylist() {
  
}