import { combineReducers } from 'redux';

const userReducer = () => {
  return [
    { name: 'pep', surname: 'guardiola', id: 1 },
    { name: 'pedro', surname: 'penelope', id: 2 }
  ];
}

const selectUserReducer = (selectedUser: any = null, action: any) => {
  switch (action.type) {
    case 'SELECT_USER':
      return action;
    default:
      return selectedUser;
  }
}

export default combineReducers({
  user: userReducer,
  selectedUser: selectUserReducer
});