import axios from 'axios';

import host from '../constants/hosts';

const getUsers = () => {
  return axios.get(host);
};

export default {
  getUsers,
};
