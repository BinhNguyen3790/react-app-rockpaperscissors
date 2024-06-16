const initialState = {
  arrayChose: [
    { id: "rock", img: "./assets/imgs/rock.png", chose: true },
    { id: "paper", img: "./assets/imgs/paper.png", chose: false },
    { id: "scissors", img: "./assets/imgs/scissors.png", chose: false },
  ],
  result: "I'm Iron Man, I love you 3000!!!",
  youWin: 0,
  numberPlay: 0,
  computer: { id: "rock", img: "./assets/imgs/rock.png" },
};

const RockPaperScissors = (state = initialState, action) => {
  switch (action.type) {
    case "CHOSE":
      {
        let arrayChoseUpdate = [...state.arrayChose];
        arrayChoseUpdate = arrayChoseUpdate.map((item, index) => {
          if (item.id === action.id) {
            return { ...item, chose: true };
          }
          return { ...item, chose: false };
        });
        state.arrayChose = arrayChoseUpdate;
        return { ...state };
      }
      break;
    case "RANDOM":
      {
        let randomNumber = Math.floor(Math.random() * 3);
        let ramdomItem = state.arrayChose[randomNumber];
        state.computer = ramdomItem;
        return { ...state };
      }
      break;
    case "ENDGAME":
      {
        state.numberPlay += 1;
        let player = state.arrayChose.find((item) => item.chose === true);
        let computer = state.computer;
        switch (player.id) {
          case "rock":
            {
              if (computer.id === "rock") {
                state.result = "The results were tied!!";
              } else if (computer.id === "paper") {
                state.result = "The results is that you lost!!";
              } else {
                state.result = "The results is that you won!!";
                state.youWin += 1;
              }
            }
            break;
          case "paper":
            {
              if (computer.id === "rock") {
                state.result = "The results is that you won!!";
                state.youWin += 1;
              } else if (computer.id === "paper") {
                state.result = "The results were tied!!";
              } else {
                state.result = "The results is that you lost!!";
              }
            }
            break;
          case "scissors":
            {
              if (computer.id === "rock") {
                state.result = "The results is that you lost!!";
              } else if (computer.id === "paper") {
                state.result = "The results is that you won!!";
                state.youWin += 1;
              } else {
                state.result = "The results were tied!!";
              }
            }
            break;
          default:
            state.result = "I'm Iron Man, I love you 3000!!!";
            break;
        }
        return { ...state };
      }
      break;
    default:
      return { ...state };
  }
};

export default RockPaperScissors;
