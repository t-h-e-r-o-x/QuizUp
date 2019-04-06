import React, {Component} from 'react';

class MakeQuiz extends Component{
  constructor(){
    super();
    this.state = {
      question: "" ,
      correctoption: "",
      wrongoption1: "",
      wrongoption2: "",
      wrongoption3: ""
    }
  }

onEnterQuestion = (event) => {
  this.setState({question: event.target.value})
}

onEnterCorrectOption = (event) => {
  this.setState({correctoption: event.target.value})
}

onEnterWrongOption1 = (event) => {
  this.setState({wrongoption1: event.target.value})
}

onEnterWrongOption2 = (event) => {
  this.setState({wrongoption2: event.target.value})
}

onEnterWrongOption3 = (event) => {
  this.setState({wrongoption3: event.target.value})
}

onSubmit = () => {
  fetch("https://localhost:3000/makequiz", {
    method:'post',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      quest:this.state.question,
      copt:this.state.correctoption,
      wopt1:this.state.wrongoption1,
      wopt2:this.state.wrongoption2,
      wopt3:this.state.wrongoption3
    })
  })
}

  render(){
    return(
      <article className="br2 ba white b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 white fw6 ph0 mh0 center">QUESTION CARD</legend>
            <div className="mt3">
              <label className="db white fw6 lh-copy f5" htmlFor="question">Question</label>
              <input onChange={this.onEnterQuestion} className="pa2 white input-reset ba b--mid-gray bg-transparent hover-bg-mid-gray hover-black w-100" type="question" name="question"  id="question"/>
            </div>
            <div className="mv3">
              <label className="db white fw6 lh-copy f5" htmlFor="correctoption">Correct Option:</label>
              <input onChange={this.onEnterCorrectOption} className="b white pa2 input-reset ba b--mid-gray bg-transparent hover-bg-mid-gray hover-black w-100" type="correctoption" name="correctoption"  id="correctoption"/>
            </div>
            <div className="mv3">
              <label className="db white fw6 lh-copy f5" htmlFor="wrongoption1">Wrong Option1:</label>
              <input onChange={this.onEnterWrongOption1} className="b white pa2 input-reset ba b--mid-gray bg-transparent hover-bg-mid-gray hover-black w-100" type="wrongoption1" name="wrongoption1"  id="wrongoption1"/>
            </div>
            <div className="mv3">
              <label className="db white fw6 lh-copy f5" htmlFor="wrongoption2">Wrong Option2:</label>
              <input onChange={this.onEnterWrongOption2} className="b white pa2 input-reset ba b--mid-gray bg-transparent hover-bg-mid-gray hover-black w-100" type="wrongoption2" name="wrongoption2"  id="wrongoption2"/>
            </div>
            <div className="mv3">
              <label className="db white fw6 lh-copy f5" htmlFor="wrongoption3">Wrong Option3:</label>
              <input onChange={this.onEnterWrongOption3} className="b white pa2 input-reset ba b--mid-gray bg-transparent hover-bg-mid-gray hover-black w-100" type="wrongoption3" name="wrongoption3"  id="wrongoption3"/>
            </div>
          </fieldset>
          <div className="">
            <input onClick={this.onSubmit} className="b white ph3 pv2 input-reset ba b--mid-gray bg-transparent bg-animate hover-bg-mid-gray grow pointer f4 dib" type="submit" value="Make Question"/>
          </div>
        </div>
      </main>
    </article>
    );
  }
}

export default MakeQuiz;
