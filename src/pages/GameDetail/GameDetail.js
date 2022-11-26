import { Link } from "react-router-dom";
import "../../component/Game.css";
import "../../component/Pages.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { useEffect, useState } from "react";
import getAllUser from "../../utils/getAllUser.js";

const GameDetail = () => {
  const [alluser, setAllUser] = useState([]);

  useEffect(() => {
    const userGenerate = async () => {
      const datas = await getAllUser();
      const hasil = datas.data;

      const sortdata = hasil.sort((a, b) => (a.skor > b.skor ? -1 : 1));
      setAllUser(sortdata);
    };

    userGenerate();
  }, []);

  return (
    <>
      <div className="latar">
        <div className="container">
          <Header />
          <div className="home-content">
            <h1 className="tulis-tengah">Game Detail</h1>
            <div className="game-card rounded-5 p-3 m-3">
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                  <img
                    src="suit.jpg"
                    className="img-fluid d-block mx-auto rounded-5"
                    alt="janken game"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h2 className="card-title">Janken</h2>
                    <p className="card-text">
                      What is the concept of Rock Paper Scissors? Each gesture
                      defeats one and is defeated by one of the other two: rock
                      defeats scissors but is defeated by paper; paper defeats
                      rock but is defeated by scissors. The person whose gesture
                      defeats the other is selected.
                    </p>
                    <div className="game-game-bottom">
                      <div className="leaderboard w-50 p-2">
                        <h5 className="card-text">Top 3 LeaderBoard</h5>

                        <table className="table table-hover table-dark">
                          <thead>
                            <tr>
                              <th scope="col">No</th>
                              <th scope="col">Username</th>
                              <th scope="col">Score</th>
                            </tr>
                          </thead>
                          <tbody>
                            {alluser.slice(0, 3).map((user, index) => (
                              <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.username}</td>
                                <td>{user.skor}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="w-50 p-2">
                        <Link to="/game/janken">
                          <button className="rounded-5 home-edit-button w-50">
                            Play Now!
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
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

export default GameDetail;
