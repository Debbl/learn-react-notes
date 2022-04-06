import React, { PureComponent } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './SwitchTransition.css';

export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOn: true,
    };
  }
  render() {
    const { isOn } = this.state;
    return (
      <div>
        <SwitchTransition>
          <CSSTransition
            key={isOn ? 'on' : 'off'}
            classNames={'btn'}
            timeout={300}
          >
            <button onClick={() => this.setState({ isOn: !isOn })}>
              {isOn ? 'on' : 'off'}
            </button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    );
  }
}
