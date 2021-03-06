import * as actionTypes from '../actions';

const initialState = {
  notes: [],
  note: {},
  getting: false,
  gettingNote: false,
  adding: false,
  deleting: false,
  editing: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING:
    return { ...state, getting: true };
    case actionTypes.GET:
    return { ...state, notes: [...action.payload], getting: false };

    case actionTypes.GETTING_NOTE:
    return { ...state, gettingNote: true };
    case actionTypes.GET_NOTE:
    return { ...state, note: action.payload, gettingNote: false };

    case actionTypes.ADDING:
    return { ...state, adding: true };
    case actionTypes.ADDED:
    return { ...state, adding: false };
    case actionTypes.EDITING:
    return { ...state, editing: true };
    case actionTypes.EDITED:
    return {
        ...state,
        notes: state.notes.map(note => {
          if (note._id === action._id) {
            return { ...action.payload };
          } else {
            return note;
          }
        }),
        editing: false
    };
    case actionTypes.DELETING:
    return { ...state, deleting: true };
    case actionTypes.DELETED:
    return { ...state, deleting: false };
    case actionTypes.ERROR:
    return { ...state, getting: false, adding: false, deleting: false, editing: false, error: action.payload
      };
    default:
    return state;
  }
}
