import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const useWhoAmI = async () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await axios('http://localhost:3001/whoami', {
          headers: {
            Authorization: localStorage.getItem('accessToken'),
          },
        });
        setData(user.data);
      } catch (err) {
        if (err.response.status === 401) {
          navigate('/login');
        }
      }
    };
    fetchData();
  }, [navigate]);
  return data;
};

export default useWhoAmI;

// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, [url]);

//   return [data];
// };

// export default useFetch;
