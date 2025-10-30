// Initialize the sound player with a nice instrument
const player = new mm.SoundFontPlayer(
  'https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus'
);

// Twinkle Twinkle melody as NoteSequence
const twinkle = {
  notes: [
    { pitch: 60, startTime: 0.0, endTime: 0.5 },
    { pitch: 60, startTime: 0.5, endTime: 1.0 },
    { pitch: 67, startTime: 1.0, endTime: 1.5 },
    { pitch: 67, startTime: 1.5, endTime: 2.0 },
    { pitch: 69, startTime: 2.0, endTime: 2.5 },
    { pitch: 69, startTime: 2.5, endTime: 3.0 },
    { pitch: 67, startTime: 3.0, endTime: 4.0 },

    { pitch: 65, startTime: 4.0, endTime: 4.5 },
    { pitch: 65, startTime: 4.5, endTime: 5.0 },
    { pitch: 64, startTime: 5.0, endTime: 5.5 },
    { pitch: 64, startTime: 5.5, endTime: 6.0 },
    { pitch: 62, startTime: 6.0, endTime: 6.5 },
    { pitch: 62, startTime: 6.5, endTime: 7.0 },
    { pitch: 60, startTime: 7.0, endTime: 8.0 },
  ],
  totalTime: 8.0,
};

// Create the visualizer
const canvas = document.getElementById('canvas');
const visualizer = new mm.Visualizer(twinkle, canvas, {});

// When player plays notes, update the visualizer
player.callbackObject = {
  run: (note) => visualizer.redraw(note),
  stop: () => {}
};

// Play and stop controls
document.getElementById('playBtn').addEventListener('click', async () => {
  if (player.isPlaying()) player.stop();
  visualizer.redraw(); // reset scroll
  await player.start(twinkle);
});

document.getElementById('stopBtn').addEventListener('click', () => {
  player.stop();
});
