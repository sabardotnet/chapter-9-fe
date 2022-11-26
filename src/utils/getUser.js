import axios from 'axios';

const getUser = async (id) => {
  const user = await axios('http://localhost:3001/profile/' + id);

  return user;
};

export default getUser;
