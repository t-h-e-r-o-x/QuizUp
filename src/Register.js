import React,{Component} from 'react';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameEnter = (event) => {
    this.setState({name:event.target.value});
  }

  onPasswordEnter = (event) => {
    this.setState({password: event.target.value});
  }

  onEmailEnter = (event) => {
    this.setState({email: event.target.value});
  }

  onSubmit = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        email : this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.id){
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
    })
  }

  render(){
    return(
      <article className="br2 ba dark-gray b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 white fw6 ph0 mh0 center">Welcome</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f5 white" htmlFor="name">Name</label>
                <input onChange={this.onNameEnter} className="pa2 white input-reset ba b--mid-gray bg-transparent hover-bg-mid-gray hover-black w-100" type="text" name="name"  id="name"/>
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f5 white" htmlFor="email-address">Email</label>
                <input onChange={this.onEmailEnter} className="pa2 white input-reset ba b--mid-gray bg-transparent hover-bg-mid-gray hover-black w-100" type="email" name="email-address"  id="email-address"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f5 white" htmlFor="password">Password</label>
                <input onChange={this.onPasswordEnter} className="b pa2 white input-reset ba b--mid-gray bg-transparent hover-bg-mid-gray hover-black w-100" type="password" name="password"  id="password"/>
              </div>
            </fieldset>
            <div className="">
              <input onClick={this.onSubmit} className="b white ph3 pv2 input-reset ba b--mid-gray bg-transparent bg-animate hover-bg-mid-gray grow pointer f5 dib" type="submit" value="Register"/>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
