export const storeData = (data) => {
  return {
    type: "STORE_DATA",
    payload: data,
  };
};

export const incrementScore = () => {
  return {
    type: "INCREMENT_SCORE",
  };
};

export const endGame = (result) => {
  return {
    type: "END_GAME",
    result,
  };
};
