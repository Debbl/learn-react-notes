import React, { PureComponent } from 'react';
import { addAction, changeBannersAction, changeRecommendsAction, incAction } from '../store/actionCreators';
// import { connect } from '../utils/connect';
import { connect } from 'react-redux';
import axios from 'axios';

class Home3 extends PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata",
    }).then((res) => {
      const data = res.data.data;
      console.log(data);
      this.props.changeBanners(data.banner.list);
      this.props.changeRecommends(data.recommend.list);
    })
  }
  render() {
    return (
      <div>
        <h1>Home3</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={() => this.props.increment()}>+1</button>
        <button onClick={() => this.props.addNumber(5)}>+5</button>
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
  changeBanners: function(banners) {
    dispatch(changeBannersAction(banners));
  },
  changeRecommends: function(recommends) {
    dispatch(changeRecommendsAction(recommends));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home3);
