function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}
const it = makeRangeIterator(1, 30, 3);

let resultsd = it.next();
while (!resultsd.done) {
  console.log(resultsd.value);
  resultsd = it.next();
}

console.log("Iterated over sequence of size: ", resultsd.value);
