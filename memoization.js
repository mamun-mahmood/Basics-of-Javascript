// ex: function that is task heavy
function heavyTask() {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  return i;
}
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
