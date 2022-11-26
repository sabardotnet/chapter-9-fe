import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import face from '../images/face.jpg';
import getUser from '../utils/getUser.js';
import '../component/Pages.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [user, setUser] = useState([]);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

  const handleInputEdit = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const updateUser = async () => {
    setEdit(false);

    const updateUser = await axios.post('http://localhost:3001/edit', {
      id: user.id,
      username: user.username,
      skor: user.skor,
      email: user.email,
    });
  };

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
    <div className="latar">
      <div className="container">
        <Header />
        <div className="home-content rounded shadow">
          <h1 className="p-3 text-light tulis-tengah">Profile</h1>
          <div className="profile-profile-box">
            <div className="profile-left-profile">
              <div className="profile-badge">
                {user.skor > 1000 ? <div className="rounded-circle profile-badge-list profile-gold">1000 Poin</div> : null}
                {user.skor > 500 ? <div className="rounded-circle profile-badge-list profile-silver">500 Poin</div> : null}
                {user.skor > 200 ? <div className="rounded-circle profile-badge-list profile-bronze">200 Poin</div> : null}
              </div>

              <div className="border rounded-circle profile-foto">
                <img src={face} className="profile-pict"></img>
              </div>
            </div>
            {edit ? (
              <div className="profile-right-profile">
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input className="form-control shadow" name="username" value={user.username} onChange={handleInputEdit} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input className="form-control shadow" value={user.email} name="email" onChange={handleInputEdit} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input className="form-control shadow" value="***************" name="password" onChange={handleInputEdit} disabled />
                </div>
                <div className="mb-3">
                  <label className="form-label">Score</label>
                  <input className="form-control shadow" value={user.skor} name="score" onChange={handleInputEdit} />
                </div>
                <button className="home-edit-button w-100 rounded-3" onClick={updateUser}>
                  Apply
                </button>
              </div>
            ) : (
              <div className="profile-right-profile">
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input className="form-control shadow" name="username" value={user.username} onChange={handleInputEdit} disabled />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input className="form-control shadow" value={user.email} name="email" onChange={handleInputEdit} disabled />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input className="form-control shadow" value="***************" name="password" onChange={handleInputEdit} disabled />
                </div>
                <div className="mb-3">
                  <label className="form-label">Score</label>
                  <input className="form-control shadow" value={user.skor} name="score" onChange={handleInputEdit} disabled />
                </div>
                <button className="home-edit-button w-100 rounded-3" onClick={() => setEdit(true)}>
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Profile;
