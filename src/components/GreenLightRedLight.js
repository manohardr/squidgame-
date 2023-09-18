import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementScore, endGame } from "../redux/Action/action";
import GameDisplay from "./GameDisplay";
import "./Style.css";

const GreenLightRedLight = () => {
  const [isGreen, setIsGreen] = useState(null); // State to update color

  const score = useSelector((state) => state.score);
  const timeScore = useSelector((state) => state.storedData);
  const gameStatus1 = useSelector((state) => state.gameStatus);

  const dispatch = useDispatch();

  //Function to change color randomly
  const getRandomColor = () => {
    return Math.random() < 0.5 ? "red" : "green";
  };

  useEffect(() => {
    let colorChangeInterval;
    if (timeScore) {
      const startRandomColorChange = () => {
        colorChangeInterval = setInterval(() => {
          if (
            score === timeScore.n ||
            gameStatus1 === "fail" ||
            gameStatus1 === "time"
          ) {
            clearInterval(colorChangeInterval); // Stop generating random colors
          } else {
            const randomColor = getRandomColor();
            setIsGreen(randomColor);
          }
        }, Math.floor(Math.random() * 1000) + 1000); // Change color randomly after 1s and before 2s
      };
      startRandomColorChange();
    }

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(colorChangeInterval);
    };
  }, [timeScore, score, gameStatus1]);

  const handleBoxClick = (color) => {
    if (color === "green") {
      dispatch(incrementScore());
    } else {
      dispatch(endGame("fail"));
    }
  };
// Game runs till time y = 40s
  useEffect(() => {
    const gameTimer = setTimeout(() => {
      if (score < timeScore.n) {
        dispatch(endGame("time"));
      }
    }, timeScore.y * 1000);
    return () => clearTimeout(gameTimer);
  }, [score, timeScore, dispatch]);

  return (
    <div className="container-fluid mt-3">
      <div className="row justify-content-center align-items-center">
        <h2 className="text-center text-dark">SquidGame</h2>
        <div className="col-md-6 text-center">
          <div className="mb-4 ">
            {isGreen === "green" ? (
              <button
                className=" greenbox btn btn-success btn-lg"
                onClick={() => handleBoxClick("green")}
              ></button>
            ) : (
              <button
                className="redbox btn btn-danger btn-lg"
                onClick={() => handleBoxClick("red")}
              ></button>
            )}
          </div>
          <GameDisplay />
        </div>
      </div>
    </div>
  );
};

export default GreenLightRedLight;
