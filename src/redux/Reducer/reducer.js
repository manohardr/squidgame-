const initialState = {
  score: 0,
  gameStatus: " ", //  win, fail, time
  storedData: "",
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_DATA":
      // An object to store time scores for each difficulty level
      const difficultyScores = {
        Easy: { n: 10, y: 40 },
        Medium: { n: 15, y: 40 },
        Hard: { n: 25, y: 40 },
      };
      
      const selectedDifficulty = action.payload.difficulty;
      const timeScore = difficultyScores[selectedDifficulty];

      return {
        ...state,
        storedData: timeScore, // Store the data in the state
      };

    case "INCREMENT_SCORE":
      console.log(state.score);
      console.log(state.storedData);
      if (state.score === state.storedData.n) {
        return {
          ...state,
          score: state.score,
          gameStatus: "win",
        };
      } else {
        return { ...state, score: state.score + 1 };
      }

    case "END_GAME":
      return { ...state, gameStatus: action.result };
    default:
      return state;
  }
};

export default gameReducer;
