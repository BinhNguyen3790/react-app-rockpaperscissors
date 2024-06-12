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
        // let index = arrayChoseUpdate.findIndex((item) => item.id === action.id);
        // if (index !== -1) {
        //   arrayChoseUpdate[index].chose = true;
        // }
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
    default:
      return { ...state };
  }
};

export default RockPaperScissors;
