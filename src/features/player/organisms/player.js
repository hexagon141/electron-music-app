import React from 'react';
import { createStoreObject } from 'effector';
import { createComponent } from 'effector-react';
import { setCurrentTrack, fetchTrack } from '../model';
import { Icon } from '../../../ui/atoms';

const setTrack = () => setCurrentTrack({ url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg' });

export const Player = createComponent(
  createStoreObject({
    isPending: fetchTrack.pending,
  }),
  (_, { isPending }) => (
    <button onClick={setTrack}>
      <Icon name="video" size={40}/>
    </button>
  ),
);