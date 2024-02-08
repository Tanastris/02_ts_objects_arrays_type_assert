interface MathFunction {
  (num1: number, num2: number): number;
}

const sum: MathFunction = function (x, y) {
  const rez = x + y;
  console.log('rez ===', rez);
  return rez;
};
const minus: MathFunction = function (x, y) {
  const rez = x - y;
  console.log('rez ===', rez);
  return rez;
};
const multiply: MathFunction = function (x, y) {
  const rez = x - y;
  console.log('rez ===', rez);
  return rez;
};
