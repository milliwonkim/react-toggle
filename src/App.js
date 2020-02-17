import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    isActive: false
  }

  ToggleClass = (e) => {
    this.setState({ isActive: !this.state.isActive })
  }

  render() {
    return (
      <div className="App">
        <div
          className={(this.state.isActive) ? 'non-active' : 'active'}
          onClick={this.ToggleClass}
        >
          ON
        </div>
        <div
          className={(!this.state.isActive) ? 'non-active' : 'active'}
          onClick={this.ToggleClass}
        >
          OFF
        </div>
      </div>
    );
  }
}

export default App;
