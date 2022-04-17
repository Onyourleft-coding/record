const data = {
  测试1: 10,
  测试2: 20,
  测试3: 30,
  测试4: 40,
  测试5: 50,
};

const getValue = (value) => {
  return data[value];
};
console.log(getValue('测试2'));
