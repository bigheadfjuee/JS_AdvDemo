const mpv = require('node-mpv')

const player = new mpv({
  'verbose': true,
  'audio_only': true
})

player.load('./test.m4a')
player.volume(100)

player.on('statuschange', (status) => {
  console.log(status);
})

player.on('stopped', () => {
  console.log('stopped');
})

player.play()