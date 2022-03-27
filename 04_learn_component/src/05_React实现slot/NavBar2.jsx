import React, {Component} from 'react';

class NavBer2 extends Component {
  render() {
    const {leftSlot, centerSlot, rightSlot} = this.props;
    return (
      <div className='nav-bar'>
        <div className='nav-left'>
          {leftSlot}
        </div>
        <div className='nav-center'>
          {centerSlot}
        </div>
        <div className='nav-right'>
          {rightSlot}
        </div>
      </div>
    )
  }
}

export default NavBer2;
