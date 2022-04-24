import {ADD_FACE, REMOVE_FACE} from './types';

export const addFace = () => {
  return {
    type: ADD_FACE,
  }
}

export const removeFace = () => {
  return {
    type: REMOVE_FACE,
  }
}
