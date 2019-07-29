import { createStore } from 'effector';
import { fetchTrack } from './effects';
import { setCurrentTrack } from './events';
import { audioContext } from './audio';

export const $currentTrack = createStore({})
  .on(setCurrentTrack, (_, track) => track);

export const $currentTrackUrl = $currentTrack.map((currentTrack) => currentTrack.url);

$currentTrackUrl.watch(fetchTrack);