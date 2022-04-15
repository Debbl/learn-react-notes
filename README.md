# 一些重点
## 1. 数组的 map
```jsx
{/*数组的 map 高阶函数*/}
const names = ['abc', 'cba', 'mba'];

const newNames = names.map((item, index, arr) => {
    return item;
})
```
## 2. 类组件中 `this` 的指向
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

## 3. React 的设计原则 state 中的数据是不可变的

## 4. 生命周期（类组件）

- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

### 生命周期是一个抽象的概念，在生命周期的整个过程，分成了很多个阶段；

- 比如装载阶段（Mount），组件第一次在DOM树中被渲染的过程；
- 比如更新过程（Update），组件状态发生变化，重新更新渲染的过程；
- 比如卸载过程（Unmount），组件从DOM树中被移除的过程；

### React内部为了告诉我们当前处于哪些阶段，会对我们组件内部实现的某些函数进行回调，这些函数就是生命周期函数：

- 比如实现`componentDidMount`函数：组件已经挂载到DOM上时，就会回调；
- 比如实现`componentDidUpdate`函数：组件已经发生了更新时，就会回调；
- 比如实现`componentWillUnmount`函数：组件即将被移除时，就会回调；

## 5. 组件间的通信

## 6. 跨组件通信

### Props

### Contenxt

### Events

## 7. setState的使用

### 如何获取异步的结果

> this.setState({}, callback)

```javascript
this.setState({
  message: "Hello React",
}, () => {
  console.log(this.state.message);
})
```

```javascript
componentDidMount() {
  console.log(this.state.message);
}
```

- 在组件生命周期或React合成事件中，setState是**异步**； 
- 在setTimeout或者原生dom事件中，setState是**同步**；

### 数据合并

> Object.assign()

### 本身的合并，异步的关系

```javascript
// 1. setState 本身的合并
this.setState({
    counter: this.state.counter + 1,
})
this.setState({
    counter: this.state.counter + 1,
})
this.setState({
    counter: this.state.counter + 1,
})
```

> 解决方案

```javascript
this.setState((preState, props) => {
  console.log(props);
  return  {
    counter: preState.counter + 1
  }
})
this.setState((preState, props) => {
  return  {
    counter: preState.counter + 1
  }
})
this.setState((preState, props) => {
  return  {
    counter: preState.counter + 1
  }
})
```

## 8. React 性能优化

- key
- PureComponet/React.memo() 的 shallowEqual 浅层比较

### setState 不可变的力量

- 有利于 shouldComponentUpdate 优化

## 9. ref 受控组件和非受控组件

### ref

- 字符串
- 对象
- 函数

> forwordRef

### 受控组件

> 所有会改变的数据都应该放在 state 里

- 单项数据流

## 10. 高阶组件

- 增强 Props
- 登录鉴权
- 生命周期劫持
- redux connect
- react router 的 withRouter

## 11. CSS

- 内联样式
- 普通 CSS
- css-in-js

## 12. classnames

> 和 Vue 一样的效果

```bash
yarn add classnames
```

## 13. AntDesign

## 14. React-transition-group

- Transition

- CSSTransition'

  > 三种状态

  - -appear、-appear-active、-appear-done
  - -enter、-enter-active、-enter-done
  - -exit、-exit-active、-exite-done

- SwitchTransition
- TransitionGroup

## 15. redux

- reducer
- store
- action

### redux 中的异步操作

- 可以把网络请求放在 redux 里面在更新数据，直接封装一层，组件只关心派发 action 来操作数据。
- 默认在 redux 中不支持异步请求。
- 可以使用中间件。

## 16. React-router

- hash
- history

## 17. React-Hooks

- `useState()`
  - state 更新的值要不一样， React 内部会做优化，复杂值（如数组）一样会导致组件不会重新渲染。

- `useEffect()`

  - 不传第二个参数，`componentDidMount() componentDidUpdate()`
  - return 一个函数，`componentWillUnmount()`, 有区别

  - 模仿组件的生命周期。

- `useContext()`
- `useReducer()` 是 `useState()` 的替代品
  - 多个 `reducer` 不可以共享里面的数据
- `useCallback()` 进行性能优化的
  - 函数返回一个 memoized 的值
  - 函数依赖不变，多次定义返回相同的值
  - **用在将组件中的一个函数传给一个子组件使用**，避免子组件的 props 中的函数值会重新定义获得的是一个不一样的值，没有很好的优化，重复渲染
- `useMemo()` 
  - 返回一个 momoized 的值
