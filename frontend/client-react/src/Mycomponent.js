import React, { Component } from 'react';

class Mycomponent extends Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      count: 0,
    };
    console.log('Constructor: Component is being constructed.');
  }

  // Runs after the component is inserted into the DOM
  componentDidMount() {
    console.log('componentDidMount: Component has mounted.');
    // Simulating an API call by setting state after 2 seconds
    // setTimeout(() => {
    //   this.setState({ count: this.state.count + 1 });
    // }, 2000);
  }

  // Runs every time the component's state or props are updated
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component has updated.');
    console.log('Previous State:', prevState);
    console.log('Current State:', this.state);
  }

  // Runs just before the component is removed from the DOM
  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be unmounted.');
  }

  // Render method to return the UI
  render() {
    console.log('Render: Rendering the component.');
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default Mycomponent;
