import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TabControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    }
  }
  render() {
    const {titles} = this.props;
    const {currentIndex} = this.state;
    return (
      <div className="tab-control">
        {titles.map((item, index) => (
          <div key={item}
              className={'tab-item' + (index === currentIndex && ' active')}
              onClick={() => this.itemClick(index)}>
                {item}
          </div>
        ))}
      </div>
    )
  }

  itemClick(index) {
    this.setState({
      currentIndex: index,
    })
    this.props.itemClick(index);
  }
}

TabControl.propTypes = {
  titles: PropTypes.array.isRequired,
}

export default TabControl;
