import React, {Component} from 'react';

class NavBer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.children);
    return (
      <div className='nav-bar'>
        <div className='nav-left'>
          {this.props.children[0]}
        </div>
        <div className='nav-center'>
          {this.props.children[1]}
        </div>
        <div className='nav-right'>
          {this.props.children[2]}
        </div>
      </div>
    )
  }
}

export default NavBer;
