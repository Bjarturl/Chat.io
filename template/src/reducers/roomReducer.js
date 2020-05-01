import { UPDATE_ROOM } from '../constants';

export default function(state = "", action) {
  switch (action.type) {
    case UPDATE_ROOM: return action.payload;
    default: return state;
  };
};