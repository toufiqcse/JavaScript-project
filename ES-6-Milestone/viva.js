function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY;
  console.log(max_num);
  for (let num of nums) {
    if (num > max_num) {
      num = max_num;
    }
  }
  return max_num;
}
const max = find_max(10);
console.log(max);
