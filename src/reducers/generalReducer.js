import {ADD_FACE, REMOVE_FACE} from '../actions/types';

const initialState = {
  coolFaces: 2
}

const generalReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_FACE:
      return {...state, coolFaces: state.coolFaces + 1};
    case REMOVE_FACE:
      return {...state, coolFaces: state.coolFaces > 0 ? state.coolFaces - 1 : 0};
    default:
      return state;
  }
}

export {generalReducer};