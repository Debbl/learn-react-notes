import React from 'react';
import { addAction, incAction } from '../store/actionCreators';
import { connect } from '../utils/connect';

function Home2(props) {
  return (
    <div>
      <h1>Home</h1>
      <h2>当前计数：{props.counter}</h2>
      <button onClick={() => props.increment()}>+1</button>
      <button onClick={() => props.addNumber(5)}>+5</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increment: function () {
    dispatch(incAction());
  },
  addNumber: function (num) {
    dispatch(addAction(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home2);
