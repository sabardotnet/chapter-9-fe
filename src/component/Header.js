import react from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    localStorage.removeItem('accessToken');
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark rounded">
      <Link className="navbar-brand" to="/home">
        Game4Grup<i class="ri-game-fill"></i>
      </Link>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav end">
          <li className="nav-item active">
            <Link className="nav-link" to="/game-list">
              <i class="ri-file-list-line"></i> Game List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/leaderboard">
              Leaderboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={logoutHandler} to="/">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
