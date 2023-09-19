import './App.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.nextPage = this.nextPage.bind(this);
  }
  nextPage(){
    this.props.history.push('page2');
  }
  render(){
    return(
      <div className="app">
      <header className="App-header">
      <br/>
      <button onClick={this.nextPage}>to Page2</button>
      </header>
      </div>
    );
  }
}
export default App;