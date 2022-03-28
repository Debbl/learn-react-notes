import React, { Component } from 'react';

export default class App0801 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: ['星际穿越', '盗梦空间']
    }
  }
  render() {
    return (
      <div>
        <h2>电影列表</h2>
        <ul>
          {this.state.movies.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button onClick={() => this.insertMovie()}>添加电影</button>
      </div>
    );
  }

  insertMovie() {
    // 1. 列表后添加，性能优化不明显
    // this.setState({
    //   movies: [...this.state.movies, '大话西游']
    // })

    // 2. 中间插入，key 效果明显
    this.setState({
      movies: ['大话西游', ...this.state.movies]
    })
  }
}
