import React, {Component} from 'react';
import socketIOClient from 'socket.io-client';

class PlayQuiz extends Component {
  constructor(){
    super();
    this.state = {
      endpoint:"localhost:3000",
      waiting: true,
      next: false
    }
  }

  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('stopquestion', this.state.next)
  }

setNext = () => {
  this.setState({next: true});
}

render(){
  const socket = socketIOClient(this.state.endpoint);
  socket.on('stopquestion', (index) => {


  })
  return(
    <div>
    {this.state.waiting === true ?
    <div>
    <h1 className='f3 white bg-animate pa3'>Waiting for competition</h1>
    </div>
  :
  <div>
    <h1 className='f3 white bg-animate pa3'> Ready to play </h1>
  </div>
      }
  </div>
    );
  }
}

export default PlayQuiz;
