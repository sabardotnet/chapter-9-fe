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
      <div classname="latar1">
        <Navbar navbar-expand-lg style={{ backgroundColor: 'rgb(253, 86, 228)', fontFamily: 'Broadway' }} variant="light">
          <Container>
            <div classname="navbar ms-auto">
              <Navbar.Brand href="/home">
                Game4Grup<i class="ri-game-fill"></i>
              </Navbar.Brand>
            </div>
            <Nav className="justify-content-end">
              <li className="our-team">
                <Nav.Link href="#our-team">
                  <i class="ri-group-fill huruf_20px">Our-team</i>
                </Nav.Link>
              </li>
              <li className="game">
                <Nav.Link href="/game-list">
                  <i class="ri-star-half-fill huruf_20px">GAMES</i>
                </Nav.Link>
              </li>
              <li className="leaderboard">
                <Nav.Link href="/leaderboard">
                  <i class="ri-dashboard-2-line huruf_20px">Leaderboard</i>
                </Nav.Link>
              </li>
              <li className="login">
                <Nav.Link href="/login">
                  <i class="ri-login-circle-line huruf_20px">Login</i>
                </Nav.Link>
              </li>
              <li className="register">
                <Nav.Link href="register">
                  <i class="ri-registered-fill huruf_20px">register</i>
                </Nav.Link>
              </li>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <section id="jumbotron" className="ld-page">
        <div className="row" style={{ width: '100%' }}>
          <div className="col col-md-12 ld-button">
            <div>
              <img src="/assets/grup4.jpg" style={{ width: '200px' }} className="rounded-circle img-thumbnail" />
            </div>
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fd56e4"
          fill-opacity="1"
          d="M0,224L30,192C60,160,120,96,180,101.3C240,107,300,181,360,218.7C420,256,480,256,540,218.7C600,181,660,107,720,96C780,85,840,139,900,160C960,181,1020,171,1080,138.7C1140,107,1200,53,1260,53.3C1320,53,1380,107,1410,133.3L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <section id="our-team">
        <div className="container" style={{ paddingTop: '15px', paddingBottom: '15px' }}>
          <div className="row title-ld text-center mb-3">
            <div className="col col-md">
              <h1>Our team</h1>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col col-md-3 col-sm">
              <Card>
                <Card.Img variant="top" src="/assets/zuhairah.jpg" style={{ height: '200px' }} />
                <Card.Body>
                  <Card.Title>Suhairoh || Front-End Developer</Card.Title>
                  <Card.Text>mengerjakan tampilan mulai dari warna-jenis-ukuran font, gambar, serta memastikan desain web mampu memaksimalkan user.</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col col-md-3 col-sm">
              <div className="card card-grup">
                <Card.Img variant="top" src="/assets/adli.jpeg" style={{ height: '200px' }} />
                <Card.Body>
                  <Card.Title>Adli Rahadyan || Back-End Developer</Card.Title>
                  <Card.Text>bekerja dengan framework untuk membangun software server-side, menciptakan, mengintegrasi, dan mengelola database.</Card.Text>
                </Card.Body>
              </div>
            </div>
            <div className="col col-md-3 col-sm">
              <div className="card card-grup">
                <Card.Img variant="top" src="/assets/syafii.jpg" style={{ height: '200px' }} />
                <Card.Body>
                  <Card.Title>.A. Muzaki Syafii || Back-End Developer</Card.Title>
                  <Card.Text>bekerja dengan sistem operasi, integrasi , merancang atau mengembangkan software di sisi server.</Card.Text>
                </Card.Body>{' '}
              </div>
            </div>
            <div className="col col-md-3 col-sm">
              <div className="card card-grup">
                <Card.Img variant="top" src="/assets/galuh.jpg" style={{ height: '200px' }} />
                <Card.Body>
                  <Card.Title>Akmal Galuh || Front-End Developer</Card.Title>
                  <Card.Text>membuat fitur meningkatkan user, memastikan keseimbangan antar fitur fungsional dengan estetis diwebsite.</Card.Text>
                </Card.Body>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fd56e4"
            fill-opacity="1"
            d="M0,128L30,138.7C60,149,120,171,180,165.3C240,160,300,128,360,144C420,160,480,224,540,224C600,224,660,160,720,128C780,96,840,96,900,117.3C960,139,1020,181,1080,202.7C1140,224,1200,224,1260,192C1320,160,1380,96,1410,64L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </section>

      <Footer />
    </>
  );
}

export default Landing;
