
// You should implement your task here.

const { underline } = require("colors");

module.exports = function towelSort (matrix) {
  let arr = [];
  let count = 1;
  if (!arguments.length) {
    return [];
  }
  matrix.forEach(elem => {
    count % 2 !== 0 ? arr.push(...elem) : arr.push(...elem.reverse());
    count++;
  });
  return arr;
}
