function sumFor(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}
console.log(sumFor([1, 2, 3]));
function sumWhile(nums) {
  let i = 0;
  let sum = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  return sum;
}
console.log(sumWhile([1, 2, 3]));
function sumRecursion(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  return nums.pop() + sumRecursion(nums);
}
console.log(sumRecursion([1, 2, 3]));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) {
    return memo + num;
  });
}
console.log(sumTheSimpleWay([1, 2, 3]));
