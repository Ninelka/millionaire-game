import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuestion } from '../components/Question/Question';

interface IGameState {
  questions: IQuestion[];
  currentQuestionIndex: number;
  currentReward: number;
  correctAnswersCounter: number;
}

const initialState: IGameState = {
  questions: [],
  currentQuestionIndex: 0,
  currentReward: 0,
  correctAnswersCounter: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
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
      state.correctAnswersCounter = 0;
      state.currentReward = 0;
    },
  },
});

export const { getAllQuestions, goToNextQuestion, resetGame } =
  gameSlice.actions;
export default gameSlice.reducer;
