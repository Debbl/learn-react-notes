# 一些重点
## 数组的 map
```jsx
{/*数组的 map 高阶函数*/}
const names = ['abc', 'cba', 'mba'];

const newNames = names.map((item, index, arr) => {
    return item;
})
```