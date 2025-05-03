/*  loopingList.js */

const songs = [
  { title: "Let's Dance", src: "Let's Dance.m4a" },
  { title: "Brick House", src: "Brick House.m4a" },  
  { title: "I Can't Go for That", src: "I Can't Go for That.m4a" },
  { title: "September", src: "September.m4a" },
  { title: "Dance Away", src: "Dance Away.m4a" },    
];

let currentSong = 0;
const audio = document.getElementById('audio');
const songTitle = document.getElementById('song-title');

// Load and play the current song
function loadSong(index) {
  audio.src = songs[index].src;
  songTitle.textContent = songs[index].title;
  audio.play();
}

// Move to next song when current ends
audio.addEventListener('ended', () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
});

// Start with the first song
loadSong(currentSong);
