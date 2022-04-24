import {ADD_FACE, REMOVE_FACE} from '../actions/types';

const generalReducer = (state, action) => {
  switch (action.type) {
    case ADD_FACE:
      return {...state, coolFaces: state.coolFaces + 1};
    case REMOVE_FACE:
      return {...state, coolFaces: state.coolFaces > 0 ? state.coolFaces - 1 : 0};
    default:
      throw new Error(`${action.type} has no generalReducer`);
  }
}

export {generalReducer};