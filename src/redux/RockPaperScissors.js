const initialState = {
  arrayChose: [
    { id: "rock", img: "./assets/imgs/rock.png", chose: false },
    { id: "paper", img: "./assets/imgs/paper.png", chose: true },
    { id: "scissors", img: "./assets/imgs/scissors.png", chose: false },
  ],
  result: "I'm Iron Man, I love you 3000!!!",
  youWin: 0,
  numberPlay: 0,
  computer: { id: "rock", img: "./assets/imgs/rock.png" },
};

const RockPaperScissors = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default RockPaperScissors;
