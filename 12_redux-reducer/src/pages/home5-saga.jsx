import React, { PureComponent } from 'react';
import { fetchHomeMultiDataAction } from '../store/home/actionCreators';
import { addAction, incAction } from '../store/counter/actionCreators';
// import { connect } from '../utils/connect';
import { connect } from 'react-redux';

/**
 * redux-saga 的使用
 */
class Home5 extends PureComponent {
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
        <h2>Recommend</h2>
        <ul>
          {this.props.recommends.map((item) => (
            <li key={item.acm}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counterInfo.counter,
  banners: state.homeInfo.banners,
  recommends: state.homeInfo.recommends,
});

const mapDispatchToProps = (dispatch) => ({
  increment: function () {
    dispatch(incAction());
  },
  addNumber: function (num) {
    dispatch(addAction(num));
  },
  getHomeMultiData() {
    dispatch(fetchHomeMultiDataAction);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home5);
