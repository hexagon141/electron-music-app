import { createEffect } from 'effector';
import { playerApi } from '../api';

export const fetchTrack = createEffect({
  handler: playerApi.fetchTrack,
});