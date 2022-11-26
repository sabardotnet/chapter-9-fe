import react, { useEffect, useState } from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import suit from '../images/suit.jpg';
import getUser from '../utils/getUser.js';
import '../component/Pages.css';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

export default function Home() {
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
  console.log(user);
  return (
    <>
      <div className="latar">
        <div className="container">
          <Header />
          <div className="container home-content rounded p-3 shadow">
            <h4 className="home-left text-light">Hi,Welcome {user.username}</h4>
            <p className="home-left text-light">Recomended Game For You</p>
            <div className="home-box-game mb-3 rounded border">
              <div className="p-3">
                <img src={suit}></img>
              </div>
              <div className="p-3 text-light home-detail">
                <h3 className="text-white">Rock-Paper-Scissors</h3>
                <p>Our most played game</p>
                <p>
                  What is the concept of Rock Paper Scissors? Each gesture defeats one and is defeated by one of the other two: rock defeats scissors but is defeated by paper; paper defeats rock but is defeated by scissors. The person whose
                  gesture defeats the other is selected.
                </p>
                <button className="home-edit-button" onClick={() => navigate('/game-list')}>
                  Play Now
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

// export default Home;
