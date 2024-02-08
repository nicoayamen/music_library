const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylists: function() {
    for (let playlistId in this.playlists) {
      let playlist = this.playlists[playlistId];
      console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },
  printTracks: function() {
    for (key in this.tracks) {
      let trackNames = this.tracks[key];
      console.log(`${trackNames.id}: ${trackNames.name} by ${trackNames.artist} (${trackNames.album})`);
    }
  },
  printPlaylist: function(playlistId) {
    for (p in this.playlists) {
      let playlist = this.playlists[p];
      if (p === playlistId) {
        console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length}`);
        for (trackId of playlist.tracks) {
          let printTracks = this.tracks[trackId];
          console.log(`${printTracks.id}: ${printTracks.name} by ${printTracks.artist} (${printTracks.album})`);
        }
      }
    }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    for (p in this.playlists) {
      let playlist = this.playlists[p];
      if (p === playlistId && !playlist.tracks.includes(trackId)) {
        playlist.tracks.push(trackId);
        console.log(playlist.tracks);
      }
    }
  },
  addTrack: function(name, artist, album) {
    //create a new object to add into library.tracks obj
    let newTrack = {
      id: `${generateUid()}`,
      name: name,
      artist: artist,
      album: album,
    };
    //placing newTrack into library.tracks
    this.tracks[newTrack.id] = newTrack;
  
    console.log(this.tracks);
  
  },
  addPlaylist: function(name) {
    //gives us an array of all the tracks obj
    let tracks = Object.keys(this.tracks);
    // declare a new obj to go into playlists
    const newPlaylist = {
      id: `${generateUid()}`,
      name: name,
      tracks: tracks,
    };
  
    // add newPlaylist obj into library.playlists
    this.playlists[newPlaylist.id] = newPlaylist;
    console.log(this.playlists);
  
  },
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

//library.printPlaylists();

//printPlaylists(library);

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

//library.printTracks();

//printTracks(library);
// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

//library.printPlaylist("p01");

//printPlaylist("p01");

/*
// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  const { playlists } = library;
  for (p in playlists) {
    let playlist = playlists[p];
    if (p === playlistId && !playlist.tracks.includes(trackId)) {
      playlist.tracks.push(trackId);
      console.log(playlist.tracks);

    }

  }

};

//library.addTrackToPlaylist("t03", "p01");


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  //create a new object to add into library.tracks obj
  let newTrack = {
    id: `${generateUid()}`,
    name: name,
    artist: artist,
    album: album,
  };
  //placing newTrack into library.tracks
  library.tracks[newTrack.id] = newTrack;

  console.log(library.tracks);

};

//library.addTrack("Bill Nye the Science Guy", "Bill Nye", "Classic Hits");

// adds a playlist to the library
const addPlaylist = function(name) {
  //gives us an array of all the tracks obj
  let tracks = Object.keys(library.tracks);
  // declare a new obj to go into playlists
  const newPlaylist = {
    id: `${generateUid()}`,
    name: name,
    tracks: tracks,
  };

  // add newPlaylist obj into library.playlists
  library.playlists[newPlaylist.id] = newPlaylist;
  console.log(library.playlists);

};
library.addPlaylist("Deez");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}; */