// 数组

// 创建数组
let fruits = ['Apple', 'Banner']
console.log('fruits', fruits.length);//2

// 通过索引访问数组元素

let frist = fruits[0]
console.log('frist', frist);//Apple

let last = fruits[fruits.length - 1]
console.log('last', last);//Banner

//遍历数组
fruits.forEach(function (item, index, array) {
    console.log(item, index);
    //Apple 0
    //Banner 1
})

//添加元素到数组的末尾
let newLength = fruits.push('Orange')
console.log('newLength', newLength);//3

//删除数组末尾的元素
let lastList = fruits.pop()
console.log("lastList", lastList);