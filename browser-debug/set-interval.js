let clock = 0;
const timeId = setInterval(() => {
  //   clock++;
  console.log(++clock);
  if (clock > 10) {
    clearInterval(timeId);
  }
}, 1000);
