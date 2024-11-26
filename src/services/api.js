import axios from 'axios';

export const getProfiles = () => {
  return axios.get(
    'https://6710ce3ba85f4164ef2f5ff8.mockapi.io/api/profilestanstack'
  );
};

export const addProfile = (newUserData) => {
  return axios.post(
    'https://6710ce3ba85f4164ef2f5ff8.mockapi.io/api/profilestanstack',
    newUserData
  );
};
