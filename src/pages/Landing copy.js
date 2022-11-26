import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';
import '../component/Pages.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <div classname="latar">
        <Navbar navbar-expand-lg style={{ backgroundColor: 'pink', fontFamily: 'Broadway' }} variant="light">
          <Container>
            <div classname="navbar ms-auto">
              <Navbar.Brand href="/home">
                Game4Grup<i class="ri-game-fill"></i>
              </Navbar.Brand>
            </div>
            <Nav className="justify-content-end">
              <li className="game">
                <Nav.Link href="#game-list">
                  <i class="ri-star-half-fill">GAMES</i>
                </Nav.Link>
              </li>
              <li className="leaderboard">
                <Nav.Link href="#leaderboard">
                  <i class="ri-dashboard-2-line">Leaderboard</i>
                </Nav.Link>
              </li>
              <li className="login">
                <Nav.Link href="#login">
                  <i class="ri-login-circle-line">Login</i>
                </Nav.Link>
              </li>
              <li className="register">
                <Nav.Link href="#register">
                  <i class="ri-registered-fill">register</i>
                </Nav.Link>
              </li>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <section id="jumbotron" className="ld-page">
        <div className="row" style={{ width: '100%' }}>
          <div className="col col-md-12 ld-button">
            <h1 className="ld-title">
              <span className="ld-span-1">Let's Play</span>
              <span className="ld-span-2">Welcome To Best Free Online GAMES </span>
            </h1>
            <button className="home-ld-button" onClick={() => navigate('/game-list')}>
              PlayNow
            </button>
          </div>
        </div>
      </section>
      <section id="team">
        <div className="row">
          <div className="col text-center">
            <h1>Our team</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-md-3 col-sm-12">
            <Card>
              <Card.Img variant="top" src="iyyok.jpg/100px180" />
              <Card.Body>
                <Card.Title>Suhairoh</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col col-md-3 col-sm-12">
            <div className="card card-grup">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Adli</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </div>
          </div>
          <div className="col col-md-3 col-sm-12">
            <div className="card card-grup">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Ahmad</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>{' '}
            </div>
          </div>
          <div className="col col-md-3 col-sm-12">
            <div className="card card-grup">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>galuh</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Landing;
