import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from 'ACTIONS/counter2';

class Counter2 extends React.Component {
  render() {
    const { count, isIncrementing, isDecrementing, increment, incrementAsync, decrement, decrementAsync } = this.props;

    return (
      <div>
        <h3>Counter2 Page</h3>
        <p>Count: {count}</p>

        <p>
          <button onClick={() => increment()} disabled={isIncrementing}>Increment</button>
          <button onClick={() => incrementAsync()} disabled={isIncrementing}>Increment Async</button>
        </p>

        <p>
          <button onClick={() => decrement()} disabled={isDecrementing}>Decrement</button>
          <button onClick={() => decrementAsync()} disabled={isDecrementing}>Decrement Async</button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter2.count,
  isIncrementing: state.counter2.isIncrementing,
  isDecrementing: state.counter2.isDecrementing
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter2)
