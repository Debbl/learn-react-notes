import React, { PureComponent } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TransitionGroup.css';

export default class TransitionGroupDome extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      names: ['Debbl', 'kobe', 'lelei'],
    };
  }
  render() {
    return (
      <>
        <TransitionGroup>
          {this.state.names.map((item, index) => (
            <CSSTransition key={item} timeout={500} classNames="item">
              <div>
                <span>{item}</span>
                <button onClick={() => this.delName(index)}>-</button>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
        <button onClick={() => this.addName()}>+name</button>
      </>
    );
  }
  addName() {
    this.setState({
      names: [...this.state.names, 'ding'],
    });
  }
  delName(index) {
    this.setState({
      names: this.state.names.filter((name, indey) => indey !== index),
    });
  }
}
