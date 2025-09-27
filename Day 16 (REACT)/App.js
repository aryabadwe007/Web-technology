import React, { Component } from 'react';

class LifecycleTracker extends Component {
  constructor(props) {
    super(props);
    // 1. Initialize state
    this.state = {
      count: 0
    };
    // 💡 Mounting Phase: The first method called.
    console.log('1. [Mounting] Constructor: State is initialized.');
  }

  static getDerivedStateFromProps(props, state) {
    // 💡 Mounting/Updating Phase: Called before render(). Use this to update state based on props.
    console.log('2/4. [Mounting/Updating] getDerivedStateFromProps: Checking for prop changes.');
    return null; // Return null to indicate no state change from props
  }

  componentDidMount() {
    // 💡 Mounting Phase: Called immediately after the component is inserted into the DOM (mounted).
    // This is the ideal place for side effects like API calls, setting up subscriptions, or timers.
    console.log('4. [Mounting] componentDidMount: Component is now in the DOM. Starting a timer.');
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 💡 Updating Phase: Called before re-rendering when new props or state are received.
    // Return true to allow the update, false to prevent it. (Used for performance optimization).
    console.log('5. [Updating] shouldComponentUpdate: Checking if component needs to re-render.');
    return nextState.count < 5; // Stop updates after count reaches 5
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 💡 Updating Phase: Called right before the changes are applied to the DOM.
    // Use this to capture information (like scroll position) before the DOM changes.
    console.log('6. [Updating] getSnapshotBeforeUpdate: Capturing data before DOM update.');
    return prevState.count; // The returned value is passed to componentDidUpdate
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 💡 Updating Phase: Called immediately after re-rendering.
    // Used for side effects that need to run after a state/prop change and re-render.
    console.log(`8. [Updating] componentDidUpdate: Component re-rendered. Previous count was ${snapshot}.`);
    if (this.state.count === 5) {
      console.log('Count reached 5. Stopping the timer.');
      clearInterval(this.timer);
    }
  }

  componentWillUnmount() {
    // 💡 Unmounting Phase: Called immediately before the component is destroyed and removed from the DOM.
    // This is the ideal place to perform cleanup (cancel network requests, clear timers, remove event listeners).
    console.log('9. [Unmounting] componentWillUnmount: Component is being removed. Cleaning up timer.');
    clearInterval(this.timer);
  }
  
  // The only required method
  render() {
    // 💡 Mounting/Updating Phase: Creates and returns the JSX structure.
    console.log('3/7. [Mounting/Updating] render: Creating the component structure.');
    return (
      <div style={{ padding: '20px', border: '1px solid gray', textAlign:"center" }}>
        <h2>Class Component Lifecycle Tracker</h2>
        <p>Current Count: **{this.state.count}**</p>
        <p>Check the browser console to see the method calls in order.</p>
        <button onClick={() => this.setState({ count: 0 })}>
          Reset Count
        </button>
      </div>
    );
  }
}

export default LifecycleTracker;