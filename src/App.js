import React, {Component} from 'react';
import './App.css';
import SignIn from './SignIn';
import Register from './Register';
import Navigation from './Navigation';
import Home from './Home';

const initialState = {
  route: 'signin',
  isSignedIn:false,
  user:{
    id:'',
    name:'',
    email: ''
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
      id: data.id,
      name: data.name,
      email: data.email
    }
  })
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
      {this.state.route === 'home'?
        <Home user = {this.state.user}/>
        :
        (this.state.route === 'signin'?
          <SignIn onRouteChange = {this.onRouteChange} loadUser = {this.loadUser}/>
          :
          <Register onRouteChange = {this.onRouteChange} loadUser = {this.loadUser}/>
        )
      }
      </div>
    );
  }
}

export default App;
