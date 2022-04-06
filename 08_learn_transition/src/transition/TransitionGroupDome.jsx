import React, { PureComponent } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TransitionGroup.css';

export default class TransitionGroupDome extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      names: ["Debbl", "kobe", "lelei"],
    }
  }
  render() {
    return (
      <TransitionGroup>
        {this.state.names.map((item,index) => (
          <CSSTransition key={index}timeout={500} classNames="item">
            <div>{item}</div>
          </CSSTransition>
        ))}
        <button onClick={() => this.addName()}>+name</button>
      </TransitionGroup>
    );
  }
  addName() {
    this.setState({
      names: [...this.state.names, "ding"],
    })
  }
}
