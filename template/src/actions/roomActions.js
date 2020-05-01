import { UPDATE_ROOM } from '../constants';
export const updateRoom = room => {
  return {
    type: UPDATE_ROOM,
    payload: room,
  };
};
