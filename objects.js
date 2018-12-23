var playlist = {
  "My Bloody Valentine": "California Love",
  "Phil Ochs": "No idea",
  "Slowdive": "Stuff"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}

