/** Question 4
Start this one from scratch if question 3 had ANY challenge.
Same as question 3, but add another button that swaps the text of the two input boxes. 
In other words, the first name becomes the last name and the last name becomes the first name.*/
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { name: '', lastName: '' };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickDeleteAll = this.onClickDeleteAll.bind(this);
    this.onClickSwap = this.onClickSwap.bind(this);
  }

  onSubmitHandler = (ev) => {
    ev.preventDefault();
    window.alert(`Hello: ${this.state.name}  ${this.state.lastName}`);
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
    return (
      <div>
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
        <div>
          {this.state.name} {this.state.lastName}
        </div>
      </div>
    );
  }
}

export default App;
