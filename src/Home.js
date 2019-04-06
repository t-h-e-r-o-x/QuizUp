import React, {Component} from 'react';
import MakeQuiz from './MakeQuiz';
import PlayQuiz from './PlayQuiz';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      makequiz: false,
      playquiz: false
    }
  }

onSubmitMake = () => {
  this.setState({makequiz:true});
}

onSubmitPlay = () => {
  this.setState({playquiz:true});
}


  render(){
    return(
      <div>
        {this.state.makequiz === true?
            <MakeQuiz />
            :
            (this.state.playquiz === true?
            <PlayQuiz />
          :
          <div>
          <p className='f3 ba b--gold gold link bg-animate hover-bg-black pa3 pointer' onClick = {this.onSubmitMake}>Make A Quiz</p>
          <p className='f3 ba b--gold gold link bg-animate hover-bg-black pa3 pointer' onClick = {this.onSubmitPlay}>Play a Quiz</p>
          </div>
        )
      }

      </div>
    );
  }
}

export default Home;
