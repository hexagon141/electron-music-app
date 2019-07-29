import { fetchTrack } from './effects';

export const audioContext = new AudioContext();

const source = audioContext.createBufferSource();
source.connect(audioContext.destination);

fetchTrack.done.watch(({ result }) => {
  audioContext.decodeAudioData(result.data, (decodedTrack) => {
    source.buffer = decodedTrack;
    source.start();
  });
});


