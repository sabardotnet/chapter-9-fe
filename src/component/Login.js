import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import './login.css';
import { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const getHandler = async () => {
    const getData = await axios.get('http://localhost:3001/datauser');
    console.log(getData);
  };
  const loginHandler = async () => {
    const login = await axios.post('http://localhost:3001/login', {
      email,
      password,
    });

    localStorage.setItem('accessToken', login.data.token);
    console.log(localStorage);

    if (!login.data.token) {
      navigate('/login');
      alert('Player Data Not Found');
      return;
    }
    navigate('/home');
  };

  return (
    // <form>
    <div className="background">
      <div className="form">
        <Container className="text-center margin--header">
          <h1 className="title--login">LOGIN</h1>
        </Container>
        <Container className="margin--form">
          <div className="mb-3">
            <label className="form-label text--style">Email address</label>
            <input type="email" className="form-control input--style " placeholder="ex:John@gmail.com" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className="mb-3">
            <label className="form-label text--style">Password</label>
            <input type="password" className="form-control input--style" placeholder="ex:1234" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <button onClick={getHandler} className="btn">
            <Link to="/register" className="btn button--text">
              Get Data
            </Link>
          </button>
          <button onClick={loginHandler} className="btn button--text ms-1 ps-4 pe-4">
            Submit
          </button>
        </Container>
      </div>
    </div>
    // </form>
  );
}
