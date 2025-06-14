// JavaScript para el reproductor de música
const musicPlayer = {
  songs: [
    "https://youtu.be/ssVCtZBQyus?si=UZh7r2hB3DlrBSF6"
  ],
  currentSongIndex: 0,
  audioPlayer: document.getElementById("audioPlayer"),

  playPause: function() {
    if (this.audioPlayer.paused) {
      this.audioPlayer.play();
    } else {
      this.audioPlayer.pause();
    }
  },

  next: function() {
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    this.audioPlayer.src = this.songs[this.currentSongIndex];
    this.audioPlayer.play();
  },

  previous: function() {
    this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
    this.audioPlayer.src = this.songs[this.currentSongIndex];
    this.audioPlayer.play();
  },

  setVolume: function(value) {
    this.audioPlayer.volume = value / 100;
  },

  init: function() {
    this.audioPlayer.src = this.songs[this.currentSongIndex];
  }
};

document.getElementById("playPauseButton").addEventListener("click", function() {
  musicPlayer.playPause();
});

document.getElementById("nextButton").addEventListener("click", function() {
  musicPlayer.next();
});

document.getElementById("previousButton").addEventListener("click", function() {
  musicPlayer.previous();
});

document.getElementById("volumeControl").addEventListener("input", function(event) {
  musicPlayer.setVolume(event.target.value);
});

// Initialize the player with the first song
musicPlayer.init();
