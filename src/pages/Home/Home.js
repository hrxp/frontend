import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Chat from '../../components/Chat/Chat';

class Home extends Component {
  state = {
    nameInput: '',
    currentChannel: 'general'
  };

  changeChannel = channel => {
    this.setState({
      currentChannel: channel
    });
  };

  render() {
    console.log(this.state.currentChannel);
    return (
      <div className="home">
        <div className="home__main">
          <Sidebar
            name={this.state.nameInput} // Todo: login component removed. Will need to get this from Login Page when implemented
            currentChannel={this.state.currentChannel}
            changeChannel={this.changeChannel}
          />
          <Chat channel={this.state.currentChannel} />
        </div>
      </div>
    );
  }
}

export default Home;
