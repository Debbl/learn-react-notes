import React from 'react';
import { decAction, subAction } from '../store/actionCreators';
// import { connect } from '../utils/connect';
import { connect } from 'react-redux';

function About3(props) {
  return (
    <div>
      <h1>About3</h1>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={() => props.decrement()}>-1</button>
      <button onClick={() => props.subNumber(5)}>-5</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});
const mapDispatchToProps = (dispatch) => ({
  decrement: function () {
    dispatch(decAction());
  },
  subNumber: function (num) {
    dispatch(subAction(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(About3);
