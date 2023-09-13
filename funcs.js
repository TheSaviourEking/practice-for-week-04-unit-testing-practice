function isFive(num) {
  // Your code here
  return num === 5;
}

function isOdd(number) {
  // Your code here
  if (typeof number !== 'number') throw TypeError('It should be a number')

  return number % 2 === 0 ? false : true;
}

function myRange(min, max, step = 1) {
  // Your code here
  const result = []
  for (let i = min; i <= max; i += step) {
    result.push(i);
  }

  return result;
}


module.exports = { isFive, isOdd, myRange };
