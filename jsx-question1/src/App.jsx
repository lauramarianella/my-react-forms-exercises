import React from 'react';

// Make a form with 2 text inputs: first name and last name. It also has a submit button.
// When the user clicks the submit button,
// make a popup that says something like "Hello Bob Dole" where Bob
// is the first name entered by the user and Dole the last.

class App extends React.Component {
  constructor() {
    super();
    this.state = { name: '', lastName: '' };
  }
  submitHandler = (ev) => {
    ev.preventDefault();
    window.alert(`Hello: ${this.state.name} ${this.state.lastName}`);
  };

  onChangeNameHandler = (ev) => {
    this.setState({ name: ev.target.value });
  };
  onChangeLastNameHandler = (ev) => {
    this.setState({ lastName: ev.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" onChange={this.onChangeNameHandler} />
          <input type="text" onChange={this.onChangeLastNameHandler} />
          <input type="submit" value="Submit" />
        </form>
        <h3>
          {this.state.name}-{this.state.lastName}
        </h3>
      </div>
    );
  }
}

export default App;
