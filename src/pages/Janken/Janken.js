import { useEffect } from 'react';
import { useState } from 'react';
import styles from './Janken.module.css';
import axios from 'axios';
import useWhoAmI from '../../utils/useWhoAmI';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

const Janken = () => {
  const navigate = useNavigate();

  const comSelection = ['rock', 'paper', 'scissor'];
  const [player, setPlayer] = useState({});
  const [winner, setWinner] = useState('VS');
  const [score, setScore] = useState(0);
  const [comScore, setComScore] = useState(0);
  const [userPick, setUserPick] = useState('');
  const [comPick, setComPick] = useState('');
  const [roundFinish, setRoundFinish] = useState(false);
  const [roundPlay, setRoundPlay] = useState(0);
  const [gameFinish, setGameFinish] = useState(false);

  const updatePlayerScore = async (score) => {
    try {
      const updateScore = await axios.put(
        'http://localhost:3001/janken',
        {
          id: player.id,
          skor: score,
        },
        {
          headers: {
            Authorization: localStorage.getItem('accessToken'),
          },
        }
      );
      return updateScore;
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const whoAmI = async () => {
      try {
        const user = await axios('http://localhost:3001/whoami', {
          headers: {
            Authorization: localStorage.getItem('accessToken'),
          },
        });
        setPlayer(user.data);
      } catch (err) {
        if (err.response.status === 401) {
          navigate('/login');
        }
      }
    };
    whoAmI();
    console.log(player);
  }, []);

  useEffect(() => {
    determineWinner();
    if (roundFinish) {
      if (roundPlay === 3) {
        setGameFinish(true);
        setRoundFinish(false);
      }
      console.log({
        gameFinish,
        roundFinish,
        roundPlay,
        score,
        comScore,
        userPick,
        comPick,
        player,
      });
    }
  }, [roundFinish]);

  useEffect(() => {
    if (gameFinish) {
      const currentSkor = player.skor;
      if (score > comScore) {
        setWinner(` ${player.username} Win the Game!`);
        setPlayer({ ...player, skor: currentSkor + 1 });
        updatePlayerScore(currentSkor + 1);
      } else if (comScore > score) {
        setWinner('COM Win the Game!');
        return;
      } else {
        setWinner('its a draw!');
        return;
      }
    }
  }, [gameFinish]);

  const hitApiForUpdateScore = () => {};

  const nextRound = () => {
    setWinner('VS');
    setUserPick('');
    setComPick('');
    setRoundFinish(false);
  };

  const getUserPick = (pick) => {
    if (!roundFinish && !gameFinish) {
      setUserPick(pick);
      getComPick();
      if (roundPlay !== 3) {
        setRoundFinish(true);
      }
      setRoundPlay((state) => state + 1);
    }
  };

  const getComPick = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const randomPick = comSelection[randomNumber];
    setComPick(randomPick);
  };

  const determineWinner = () => {
    if (userPick === 'scissor') {
      if (comPick === 'scissor') {
        setWinner('Draw');
      } else if (comPick === 'rock') {
        setWinner('COM win');
        setComScore((state) => state + 1);
      } else if (comPick === 'paper') {
        setWinner(`${player.username} win`);
        setScore((state) => state + 1);
      }
    } else if (userPick === 'rock') {
      if (comPick === 'scissor') {
        setWinner(`${player.username} win`);
        setScore((state) => state + 1);
      } else if (comPick === 'rock') {
        setWinner('Draw');
      } else if (comPick === 'paper') {
        setWinner('COM win');
        setComScore((state) => state + 1);
      }
    } else if (userPick === 'paper') {
      if (comPick === 'scissor') {
        setWinner('COM win');
        setComScore((state) => state + 1);
      } else if (comPick === 'rock') {
        setWinner(`${player.username} win`);
        setScore((state) => state + 1);
      } else if (comPick === 'paper') {
        setWinner('Draw');
      }
    }
  };

  const resetAll = () => {
    setWinner('VS');
    setScore(0);
    setComScore(0);
    setUserPick('');
    setComPick('');
    setRoundFinish(false);
    setRoundPlay(0);
    setGameFinish(false);
  };

  return (
    <div className={styles.gameScreen}>
      <header id={styles.header} className="container">
        <img id={styles.backIcon} src="/assets/back.png" alt="back-icon" />
        <h1>ROCK PAPER SCISSORS</h1>
      </header>
      <main className="container">
        {gameFinish ? (
          <>
            <button onClick={() => resetAll()}>continue?</button>
            <Link to="/game-list">
              {' '}
              <button>game over</button>{' '}
            </Link>
          </>
        ) : null}
        <div className={`${styles.gameGrid}`}>
          <div className={styles.playerName}>
            <h3>{player.username}</h3>
          </div>
          <div id={styles.pRock} className={userPick === 'rock' ? styles.jankenPick : null} onClick={() => getUserPick('rock')}>
            <img className={styles.pRock} src="/assets/batu.png" alt="" />
          </div>
          <div id={styles.pPaper} className={userPick === 'paper' ? styles.jankenPick : null} onClick={() => getUserPick('paper')}>
            <img className={styles.pPaper} src="/assets/kertas.png" alt="" />
          </div>
          <div id={styles.pScissor} className={userPick === 'scissor' ? styles.jankenPick : null} onClick={() => getUserPick('scissor')}>
            <img className="p-scissor" src="/assets/gunting.png" alt="" />
          </div>
          <p id={styles.winner} className={styles.vs}>
            {winner}
          </p>
          <div className={styles.comName}>
            <h3>COM</h3>
          </div>
          <div id={styles.cRock} className={comPick === 'rock' ? styles.jankenPick : null}>
            <img className={styles.cRock} src="/assets/batu.png" alt="" />
          </div>
          <div id={styles.cPaper} className={comPick === 'paper' ? styles.jankenPick : null}>
            <img className={styles.cPaper} src="/assets/kertas.png" alt="" />
          </div>
          <div id={styles.cScissor} className={comPick === 'scissor' ? styles.jankenPick : null}>
            <img className={styles.cScissor} src="/assets/gunting.png" alt="" />
          </div>

          {roundFinish && <img className={styles.refresh} src="/assets/refresh.png" alt="" onClick={nextRound} disabled={gameFinish} />}
        </div>
      </main>
    </div>
  );
};

export default Janken;
