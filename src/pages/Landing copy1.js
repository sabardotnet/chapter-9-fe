import react from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';
import '../component/Pages.css';

function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <div className="latar">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark rounded">
            <Link className="navbar-brand" to="/home">
              Gamepedia
            </Link>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav end">
                <li className="nav-item active">
                  <Link className="nav-link" to="/game-list">
                    Game List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/leaderboard" className="nav-link">
                    Leaderboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="land-box-main mb-3 rounded border">
            <div className="p-3 land-main-word">
              <h1 className="land-title">
                <span className="land-span-1">Let's Play</span>
                <span className="land-span-2">Our Best Free Online Games</span>
                <span className="land-span-3">No Download</span>
                <span className="land-span-4">No subscription</span>
              </h1>
              <button className="home-edit-button" onClick={() => navigate('/game-list')}>
                Let's Play
              </button>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Landing;
