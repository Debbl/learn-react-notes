import React, { PureComponent } from 'react';
import store from '../store';
import { storeContext } from './context';

export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC(WrappedComponent) {
    class EnhanceComponent extends PureComponent {
      constructor(props) {
        super(props);
        this.state = {
          storeState: mapStateToProps(store.getState()),
        };
      }
      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          console.log('state', store.getState());
          this.setState({
            storeState: mapStateToProps(store.getState()),
          });
        });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(store.getState())}
            {...mapDispatchToProps(store.dispatch)}
          />
        );
      }
    };
    EnhanceComponent.contextType = storeContext;
    return EnhanceComponent;
  };
}
