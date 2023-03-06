import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuestion } from '../components/Question/Question';

interface IGameState {
  questions: IQuestion[];
  currentQuestionIndex: number;
  currentReward: number;
  amountOfQuestions: string;
}

const initialState: IGameState = {
  questions: [],
  currentQuestionIndex: 0,
  currentReward: 0,
  amountOfQuestions: '5',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setAmountOfQuestions: (state, action: PayloadAction<string>) => {
      state.amountOfQuestions = action.payload;
    },
    getAllQuestions: (state, action: PayloadAction<IQuestion[]>) => {
      state.questions = action.payload;
    },
    goToNextQuestion: (state) => {
      state.currentReward += 500;
      state.currentQuestionIndex += 1;
    },
    resetGame: (state) => {
      state.questions = [];
      state.currentQuestionIndex = 0;
      state.currentReward = 0;
    },
  },
});

export const {
  setAmountOfQuestions,
  getAllQuestions,
  goToNextQuestion,
  resetGame,
} = gameSlice.actions;
export default gameSlice.reducer;
