import react, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import '../../App.css';
import '../../component/Pages.css';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
const GameList = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

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
          <div className="p-4">
            <h1 className="m-4 tulis-tengah">Game List</h1>
            <div className="game-list d-sm-flex justify-content-between flex-wrap px-0">
              <Link to="/game-detail">
                <div className="game-card rounded-5 bg-opacity-10 p-1" style={{ width: '18rem', height: '20rem' }}>
                  <img className="rounded-5 gambar" src="suit.jpg" alt="game icon" />
                  <div className="card-body">
                    <h5 className="card-title w-100">Janken</h5>
                  </div>
                </div>
              </Link>
              <div className="p-1 game-card rounded-5" style={{ width: '18rem' }}>
                <img className="rounded-5 gambar" src="coming-soon.jpeg" alt="game icon" />
                <div className="card-body">
                  <h5 className="card-title">Coming Soon</h5>
                  <p className="card-text"></p>
                </div>
              </div>
              <div className="game-card rounded-5 p-1" style={{ width: '18rem' }}>
                <img className="rounded-5 gambar" src="coming-soon.jpeg" alt="game icon" />
                <div className="card-body">
                  <h5 className="card-title">Coming Soon</h5>
                  <p className="card-text"></p>
                </div>
              </div>

              <div className="game-card rounded-5 p-1" style={{ width: '18rem' }}>
                <img className="rounded-5 gambar" src="coming-soon.jpeg" alt="game icon" />
                <div className="card-body">
                  <h5 className="card-title">Coming Soon</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default GameList;
