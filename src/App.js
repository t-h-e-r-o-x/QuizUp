import React, {Component} from 'react';
import './App.css';
import SignIn from './SignIn';
import Register from './Register';
import Navigation from './Navigation';

const initialState = {
  route: 'signin'
  isSignedIn:false
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  onRouteChange = (route) =>{
    if(route==='signout'){
      this.setState(initialState);
}
  else if( route==='home'){
    this.setState({isSignedIn: true});
}
this.setState({route: route});
  }

  render() {
    return (
      <div className="App">
      <Navigation onRouteChange = {this.onRouteChange} isSignedIn = {this.state.isSignedIn}/>
      {this.state.route === 'signin'?
        <SignIn onRouteChange = {this.onRouteChange}/>
        :
        <Register onRouteChange = {this.onRouteChange}/>
      }
      </div>
    );
  }
}

export default App;
