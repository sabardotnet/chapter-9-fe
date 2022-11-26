import react, { useEffect, useState } from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import '../component/Pages.css';
import getAllUser from '../utils/getAllUser.js';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

function Home() {
  const [alluser, setAllUser] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userGenerate = async () => {
      const datas = await getAllUser();
      const hasil = datas.data;

      const sortdata = hasil.sort((a, b) => (a.skor > b.skor ? -1 : 1));
      setAllUser(sortdata);
    };
    userGenerate();
  }, []);
  useEffect(() => {
    const whoAmI = async () => {
      try {
        const user = await axios('http://localhost:3001/whoami', {
          headers: {
            Authorization: localStorage.getItem('accessToken'),
          },
        });
        setUser(user.data);
      } catch (err) {
        if (err.response.status === 401) {
          navigate('/login');
        }
      }
    };

    whoAmI();
  }, []);
  return (
    <>
      <div className="latar">
        <div className="container">
          <Header />
          <div className="home-content rounded shadow">
            <h1 className="p-3 text-light tulis-tengah">Leaderboard</h1>
            <div className="profile-profile-box">
              <div className="profile-left-profile">
                <div className="border rounded p-3">
                  <h3 className="lead-badge-req">You can get some badge when you reach requirement score</h3>
                  <ul>
                    <li>
                      <h5>Gold Badge When Your Total Score More Than 1000</h5>
                    </li>
                    <li>
                      <h5>Silver Badge When Your Total Score More Than 500</h5>
                    </li>
                    <li>
                      <h5>Bronze Badge When Your Total Score More Than 200</h5>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="profile-right-profile">
                <table className="table table-hover table-dark">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Username</th>
                      <th scope="col">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {alluser.map((user, index) => (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{user.username}</td>
                        <td>{user.skor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
