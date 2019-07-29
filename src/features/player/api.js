import { httpClient } from '../../http-client';

export const playerApi = {
  fetchTrack: (url) => httpClient.get(url, { responseType: 'arraybuffer' }),
};