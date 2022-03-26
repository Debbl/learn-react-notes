# 一些重点
## 数组的 map
```jsx
{/*数组的 map 高阶函数*/}
const names = ['abc', 'cba', 'mba'];

const newNames = names.map((item, index, arr) => {
    return item;
})
```
## 类组件中 `this` 的指向
> 函数的 this 指向有四种，和函数的调用者有关，如 button 的 onClick 事件是有外部调用的，所以这里要考虑 this 的指向
- 第一种解决方案
> 使用 函数的 bind() 显示绑定
```jsx
<button onClick={handleClick.bind(this)}>按钮</button>
```
> 在类组件中的 constructor 中重新赋值 函数
```jsx
class App extends React.Component {
  constructor() {
    super();
    // 重新赋值 handleClick 函数
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    console.log("按钮点击了");
  }

  render() {
    return (
      <div>
        <h2>App</h2>
        {/* 这里传递的是 绑定 this 后的函数 */}
        <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
}
```
- 第二种解决方案
> 使用箭头函数。因为箭头函数不绑定 this，箭头函数的 this，指向的上层作用域的 this
```jsx
<button onClick={() => this.handleClick()}>按钮</button>
```

## React 的设计原则 state 中的数据是不可变的

## 生命周期（类组件）

- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

### 生命周期是一个抽象的概念，在生命周期的整个过程，分成了很多个阶段； 

- 比如装载阶段（Mount），组件第一次在DOM树中被渲染的过程； 
- 比如更新过程（Update），组件状态发生变化，重新更新渲染的过程； 
- 比如卸载过程（Unmount），组件从DOM树中被移除的过程；

### React内部为了告诉我们当前处于哪些阶段，会对我们组件内部实现的某些函数进行回调，这些函数就是生命周期函数： 

- 比如实现`componentDidMount`函数：组件已经挂载到DOM上时，就会回调； 
- 比如实现`componentDidUpdate`函数：组件已经发生了更新时，就会回调； 
- 比如实现`componentWillUnmount`函数：组件即将被移除时，就会回调； 

