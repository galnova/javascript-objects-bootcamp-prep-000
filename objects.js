var playlist = {
  Kanye: "Gold Digger"
};

function updatePlaylist(object, key, value) {
  
  return Object.assign(obj, {[key]:value});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  
  return playlist;
}