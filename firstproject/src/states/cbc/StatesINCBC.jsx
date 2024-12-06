import { Component } from "react";

class StatesINCBC extends Component {
  state = { count: 0 }; //initializing state
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    console.log(this);
    return (
      <>
        <h1>State in Class based </h1>
        <h2>
          Counter <mark>{this.state.count}</mark>
        </h2>
        <button onClick={this.increment}>increment</button>
        <hr />
        <button onClick={this.decrement}>decrement</button>
        <hr />
        <button onClick={this.reset}>reset</button>
      </>
    );
  }
}

export default StatesINCBC;
