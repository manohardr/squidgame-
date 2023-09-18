import React from 'react';
import { useSelector } from 'react-redux';

const GameDisplay = () => {
  const score = useSelector((state) => state.score);
  const gameStatus = useSelector((state) => state.gameStatus);

  const renderMessage = () => {
    if (gameStatus === 'win') {
      return `You win! You clicked the green box ${score} times!`;
    } else if (gameStatus === 'fail') {
      return 'Game Over! You clicked the red box!';
    } else if (gameStatus === 'time') {
      return 'Game Over! Time has expired!';
    } else {
      return 'Good luck!';
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body bg bg-dark">
              <h4 className="card-title text-success">Game Information</h4>
              <p className="card-text text-white">Score: {score}</p>
              <p className="card-text text-white">{renderMessage()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDisplay;
