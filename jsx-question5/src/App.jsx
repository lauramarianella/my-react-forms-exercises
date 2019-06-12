/** Question 5
Start this one from scratch if question 4 had ANY challenge.
So far we've only had 1 form. Now we want to have two forms. The first form will be the same as question 4. 
The second form will ask: "Give us feedback on this page" with an input box and its own submit button. 
When the user clicks on the submit box, a popup appears that says something like 
"you've submitted 234 characters of feedback" where 234 is the number of characters of the string entered in the input
 box by the user.
*/
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { name: '', lastName: '', feedback: '', numCharsFeedback: 0 };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickDeleteAll = this.onClickDeleteAll.bind(this);
    this.onClickSwap = this.onClickSwap.bind(this);
    this.onSubmitFeedbackHandler = this.onSubmitFeedbackHandler.bind(this);
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
  onSubmitFeedbackHandler = (ev) => {
    ev.preventDefault();
    this.state.numCharsFeedback = String(this.state.feedback).length;
    alert(
      `you've submitted ${this.state.numCharsFeedback} characters of feedback`
    );
  };

  render() {
    return (
      <div>
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
        <div>
          <form onSubmit={this.onSubmitFeedbackHandler}>
            <p>Give us feedback on this page</p>
            <input
              type="text"
              name="feedback"
              onChange={this.onChangeHandler}
            />
            <input type="submit" value="Enter" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
