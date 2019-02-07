const sounds = {
    KeyZ: "boom",
    KeyX: "clap",
    KeyC: "hihat",
    KeyV: "openhat",
    KeyB: "snare",
    KeyN: "tink",
    KeyM: "tom"
}
let activeChannels = [
    {
      name: 'channel1',
      sounds: [],
      isRecording: false,
      recStart: null
    }, 
    {
      name: 'channel2',
      sounds: [],
      isRecording: false,
      recStart: null
    },
    {
      name: 'channel3',
      sounds: [],
      isRecording: false,
      recStart: null
    },
    {
      name: 'channel4',
      sounds: [],
      isRecording: false,
      recStart: null
    },
]
document.addEventListener("keypress", (e)=>{
  const soundName = sounds[e.code];
    let audioDOM = document.querySelector(`#${soundName}`);
    audioDOM.currentTime = 0;
    audioDOM.play();
})
 