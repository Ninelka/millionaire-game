import styles from './NewGame.module.css';
import logo from './../../logo.svg';
import { useGame } from '../../hooks/useGame';
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import {
  useAppDispatch,
  useAppSelector,
  setAmountOfQuestions,
} from '../../store';

const NewGame = () => {
  const { startGameHandler } = useGame();
  const dispatch = useAppDispatch();
  const { amountOfQuestions } = useAppSelector((state) => state.game);

  const handleChange = (e: SelectChangeEvent) => {
    dispatch(setAmountOfQuestions(e.target.value));
  };

  return (
    <section className={styles.container}>
      <img src={logo} className={styles.logo} alt="millionaire game logo" />
      <h1 className={styles.title}>Who wants to be a millionaire?</h1>
      <div>
        <InputLabel id="select-label">Choose a number of questions:</InputLabel>
        <Select
          labelId="select-label"
          label="Questions"
          value={amountOfQuestions}
          defaultValue={'15'}
          onChange={handleChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </div>
      <button onClick={startGameHandler}>Start</button>
    </section>
  );
};

export default NewGame;
