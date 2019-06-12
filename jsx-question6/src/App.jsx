/**Question 6 (advanced)
Only do this question if you have no other homework to do.
Long forms can be annoying to fill out. Sometimes it's a good idea to split a form into two parts. 
When the user submits the first part, the second one appears.
Create a react app with a form that's split into two parts. */

import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { name: '', lastName: '', feedback: '', numCharsFeedback: 0 };
    this.formNro = 0;

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickDeleteAll = this.onClickDeleteAll.bind(this);
    this.onClickSwap = this.onClickSwap.bind(this);
  }

  onSubmitHandler = (ev) => {
    ev.preventDefault();

    if (this.formNro === 0) {
      window.alert(`Hello: ${this.state.name}  ${this.state.lastName}`);
      this.setState({ name: '', lastName: '' });
    } else if (this.formNro === 1) {
      this.state.numCharsFeedback = String(this.state.feedback).length;

      alert(
        `you've submitted ${this.state.numCharsFeedback} characters of feedback`
      );

      this.setState({ feedback: '', numCharsFeedback: 0 });
    }

    this.formNro++;
  };

  onChangeHandler = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value });
  };
  onClickDeleteAll() {
    this.setState({ name: '', lastName: '' });
  }
  onClickSwap() {
    let tmp = this.state.name;
    this.setState({ name: this.state.lastName, lastName: tmp });
  }

  render() {
    let formulaire = '';
    if (this.formNro === 0) {
      formulaire = (
        <form onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={this.onChangeHandler}
          />
          <input
            type="text"
            placeholder="lastName"
            name="lastName"
            value={this.state.lastName}
            onChange={this.onChangeHandler}
          />
          {this.state.name && this.state.lastName ? (
            <input type="submit" value="Enter" />
          ) : (
            ''
          )}
          <input
            type="button"
            onClick={this.onClickDeleteAll}
            value="Clear all"
          />
          <input type="button" onClick={this.onClickSwap} value="Swap" />
        </form>
      );
    } else if (this.formNro === 1) {
      formulaire = (
        <form onSubmit={this.onSubmitHandler}>
          <p>Give us feedback on this page</p>
          <input
            type="text"
            name="feedback"
            onChange={this.onChangeHandler}
            value={this.state.feedback}
          />
          <input type="submit" value="Enter" />
        </form>
      );
    } else {
      formulaire = 'End';
    }

    return <div>{formulaire}</div>;
  }
}

export default App;
