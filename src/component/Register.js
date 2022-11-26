import { Alert, Button, Container } from 'reactstrap';
import './login.css';
import axios from '../api/axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const registerHandler = async () => {
    const register = await axios.post('http://localhost:3001/register', {
      username,
      email,
      password,
    });
    console.log(register);
    localStorage.setItem('accessToken', register.data.token);
    navigate('/registered');
  };
  return (
    // <form>
    <div className="background">
      <div className="form">
        <Container className="text-center title--login">
          <h1>REGISTER</h1>
        </Container>
        <div className="mb-3">
          <label className="form-label text--style">Email address</label>
          <input type="email" className="form-control input--style" placeholder="ex:John@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className="mb-3">
          <label className="form-label text--style">Username</label>
          <input type="text" className="form-control input--style" placeholder="ex:John123" value={username} onChange={(e) => setUsername(e.target.value)}></input>
          <div id="emailHelp" className="form-text text--style">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label text--style">Password</label>
          <input type="password" className="form-control input--style" placeholder="ex:1234" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <button onClick={registerHandler} type="submit" className="btn button--text">
          Submit
        </button>
      </div>
    </div>
    // </form>
  );
}
