/**Question 2
Start this one from scratch if question 1 had ANY challenge.
Add a button to clear the fields of question 1. This button will clear the two input fields.
 */
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { name: '', lastName: '' };
    this.onClickDeleteAll = this.onClickDeleteAll.bind(this);
  }
  submitHandler = (ev) => {
    ev.preventDefault();
    window.alert(`Hello: ${this.state.name} ${this.state.lastName}`);
  };

  onClickDeleteAll() {
    this.setState({ name: '', lastName: '' });
  }

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.onChangeHandler}
            value={this.state.name}
          />
          <input
            type="text"
            name="lastName"
            placeholder="LastName"
            onChange={this.onChangeHandler}
            value={this.state.lastName}
          />
          <input type="submit" value="Enter" />
          <input
            type="button"
            value="Delete All"
            onClick={this.onClickDeleteAll}
          />
        </form>
        <h3>
          {this.state.name} - {this.state.lastName}
        </h3>
      </div>
    );
  }
}
export default App;
