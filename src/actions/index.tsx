export const selectUser = (user_info: any) => {
  return {
    type: 'SELECT_USER',
    payload: user_info
  };
};

