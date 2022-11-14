function factorialRecursion(i) {
  if (i == 1) {
    return 1;
  }
  return i * factorialRecursion(--i);
}
console.log(factorialRecursion(4));
