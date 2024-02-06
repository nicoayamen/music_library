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
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

const printPlaylists = function(obj) {
  // playlist is the key and is looping thru the objects playlist id
  for (playlistId in obj.playlists) {
    // declare track as the objects playlist values, which gives us the the whole playlists obj
    let track = obj.playlists[playlistId];
    // we declare list as the template literals, using the track obj keys to get the val
    const list = `${track.id}: ${track.name} - ${track.tracks.length} tracks`;
    console.log(list);
  }

};

//printPlaylists(library);

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

const printTracks = function(obj) {
  const { tracks } = obj;
  for (key in tracks) {
    const { id, name, artist, album } = tracks[key];
    let val = `${id}: ${name} by ${artist} (${album})`
    console.log(val);
  }
};

//printTracks(library);
// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

const printPlaylist = function(playlistId) {
  const { playlists } = library;
  //console.log("444", playlists)
  //const { tracks } = library;
  for (p in playlists) {
    //console.log("!!!" , p);
    let track = playlists[p];
   // console.log("@@@" , track)
    if (p === playlistId) {
      console.log(`${track.id}: ${track.name} - ${track.tracks.length} tracks`);
    }
  }
  //for (key1 in playlists) {
    //console.log(key1);
 // }
};

printPlaylist("p02");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {

};


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {

};


// adds a playlist to the library
const addPlaylist = function(name) {

};


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};