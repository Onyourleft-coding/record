const arr = [
  { name: '测试1', group: 1 },
  { name: '测试2', group: 1 },
  { name: '测试3', group: 2 },
  { name: '测试4', group: 1 },
  { name: '测试4', group: 2 },
  { name: '测试5', group: 2 },
];

// 找出套餐1 先过滤再重组
const findGroupOne = arr
  .filter((item) => item.group === 1)
  .map((item) => item.name);
console.log('所有的套餐1', findGroupOne);

// 查询特定物品

const findTarget = arr.find(
  (item) => item.name === '测试4' && item.group === 1
);

console.log('查询特定物品', findTarget);

// 巧用运算符
// 这个时候可以使用
const selectKey = selectRow ?? ' '; //如果没有?? 这行代码报错运行不了
