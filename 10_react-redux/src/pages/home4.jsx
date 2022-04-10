import React, { PureComponent } from 'react';
import {
  addAction,
  changeBannersAction,
  changeRecommendsAction,
  getHomeMultiDataAction,
  incAction,
} from '../store/actionCreators';
// import { connect } from '../utils/connect';
import { connect } from 'react-redux';
import axios from 'axios';

/**
 * redux-thunk 的使用
 */
class Home4 extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getHomeMultiData();
  }
  render() {
    return (
      <div>
        <h1>Home3</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={() => this.props.increment()}>+1</button>
        <button onClick={() => this.props.addNumber(5)}>+5</button>
        <h2>Banners</h2>
        <ul>
          {this.props.banners.map((item) => (
            <li key={item.acm}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  banners: state.banners,
});

const mapDispatchToProps = (dispatch) => ({
  increment: function () {
    dispatch(incAction());
  },
  addNumber: function (num) {
    dispatch(addAction(num));
  },
  getHomeMultiData() {
    dispatch(getHomeMultiDataAction);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home4);
