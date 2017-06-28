import constants from '../constants/actionConstants';

const getUsers = () => ({
  type: constants.USER_FETCH_REQUEST
});

export default {
  getUsers,
};
