import { combineReducers } from 'redux';

const userReducer = () => {
  return [
    { name: 'pep', surname: 'guardiola', id: 1 },
    { name: 'pedro', surname: 'penelope', id: 2 }
  ];
}

const selectUserReducer = (state: any = null, action: any) => {
  switch (action.type) {
    case 'SELECT_USER':
      return action.payload;
    default:
      return state;
  }
}

const postsReducer = (state: any = [], action: any) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return [...action.payload, ...state];
    case 'ADD_POST':
      return [action.payload, ...state];
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  users: userReducer,
  selectedUser: selectUserReducer,
  posts: postsReducer,
});

export type Appstate = ReturnType<typeof rootReducer>