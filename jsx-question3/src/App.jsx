/**Question 3
Start this one from scratch if question 2 had ANY challenge.
Same as question 2, except the submit button appears only if the user has typed something into BOTH input boxes. 
Otherwise, there is no submit button and the user will be unable to submit.
 */
import React, { Component } from 'react';
import './App.css';

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
          {this.state.name && this.state.lastName ? (
            <input type="submit" value="Enter" />
          ) : (
            ''
          )}
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
