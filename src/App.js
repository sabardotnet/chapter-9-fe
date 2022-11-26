import ReactDOM from 'react-dom/client';
import react from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard';
import Landing from './pages/Landing';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useNavigate, Navigate } from 'react-router-dom';
import GameDetail from './pages/GameDetail/GameDetail';
import GameList from './pages/GameList/GameList';
import Janken from './pages/Janken/Janken';
import Login from './component/Login';
import UserRegistered from './component/UserRegistered';
import Register from './component/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<UserRegistered />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/" element={<Landing />} />
        <Route path="/game-list" element={<GameList />} />
        <Route path="/game-detail" element={<GameDetail />} />
        <Route path="/game/janken" element={<Janken />} />
      </Routes>
    </>
  );
}
export default App;
