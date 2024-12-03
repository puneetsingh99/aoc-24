export const splitColumnsIntoArray = (input) => {
  const lines = input
    .trim()
    .split("\n")
    .filter((line) => line.trim());

  const col1 = [];
  const col2 = [];

  lines.forEach((line) => {
    const [num1, num2] = line.trim().split(/\s+/);
    col1.push(Number(num1));
    col2.push(Number(num2));
  });

  return [col1, col2];
};
