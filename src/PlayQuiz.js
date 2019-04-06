import React, {Component} from 'react';
import socketIOClient from 'socket.io-client';

class PlayQuiz extends Component {
  constructor(){
    super();
    this.state = {
      endpoint:"localhost:3000",
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
}

}

export default PlayQuiz;
