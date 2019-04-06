import React, { Component} from 'react';
import MakeQuizSports from './MakeQuizSports';
import MakeQuizMusic from './MakeQuizMusic';

class MakeQuiz extends Component {
  constructor(){
    super();
    this.state = {
      sports:false,
      music:false
    }
  }

  onSubmitSports = () => {
    this.setState({sports:true});
  }

  onSubmitMusic = () => {
    this.setState({music:true});
  }

  render(){
    return(
      <div>
      {this.state.sports === true?
      <MakeQuizSports />
      :
        (this.state.music === true?
        <MakeQuizMusic />
        :
        <div>
        <h2 className='f3 ba white bg-animate pa3'> Choose Category </h2>
        <p className='f3 ba b--gold gold link bg-animate hover-bg-black pa3 pointer' onClick = {this.onSubmitSports}>Sports</p>
        <p className='f3 ba b--gold gold link bg-animate hover-bg-black pa3 pointer' onClick = {this.onSubmitMusic}>Music</p>
        </div>
      )
    }
    </div>
    );
  }
}

export default MakeQuiz;
