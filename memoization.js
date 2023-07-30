// ex: function that is task heavy
function heavyTask() {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  return i;
}
// memoize function that takke the task heavy function as an argument and return another function
// that will cache the result of the task heavy function and return the cached value if the function is called again

const memoize = (fn) => {
  const cache = {};
  return (value) => {
    if (cache[value]) {
      console.log("from cache");
      return cache[value];
    } else {
      console.log("from function");
      const result = fn(value);
      cache[value] = result;
      return result;
    }
  };
};
const result = memoize(heavyTask);
// on first call, it will run the function
console.log(result(1));
// on second call, it will return the cached value
console.log(result(1));
