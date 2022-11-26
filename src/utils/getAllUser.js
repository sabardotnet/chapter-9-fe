import axios from 'axios';

const getAllUser = async () => {
  const user = await axios('http://localhost:3001/datauser');

  return user;
};

export default getAllUser;
