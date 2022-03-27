import React, {Component} from 'react';
import TabControl from './TabControl';
import './style.css';

class App0401 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: ['新款', '精选', '流行'],
      currentIndex: 0,
    }
  }

  itemClick(index) {
    this.setState({
      currentIndex: index,
    })
  }
  render() {
    const {titles, currentIndex} = this.state;
    return (
      <div>
        <h2>App0401</h2>
        <TabControl titles={this.state.titles} itemClick={(index) => this.itemClick(index)} />
        <h2>{titles[currentIndex]}</h2>
      </div>
    )
  }
}

export default App0401;
