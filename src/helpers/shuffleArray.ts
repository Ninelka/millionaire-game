export const shuffleArray = (array: string[]) => [
  ...array.sort(() => 0.5 - Math.random()),
];
