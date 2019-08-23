import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Chat from '../../components/Chat/Chat';
import Login from '../../components/Login/Login';

class Home extends Component {
  state = {
    // loggedIn: false,
    // nameInput: '',
    // name: '',
    currentChannel: 'general'
  };

  submitName(e) {
    e.preventDefault();
    let newUser = this.state.nameInput;
    this.setState({
      name: newUser,
      loggedIn: true
    });
  }

  changeName(e) {
    this.setState({
      nameInput: e.target.value
    });
  }

  changeChannel = channel => {
    this.setState({
      currentChannel: channel
    });
  };

  render() {
    console.log(this.state.currentChannel);
    return (
      <div className="home">
        {/* <Login
          loggedIn={this.state.loggedIn}
          submitName={this.submitName.bind(this)}
          changeName={this.changeName.bind(this)}
        /> */}
        {/* {!this.state.loggedIn || ( */}
        <div className="home__main">
          <Sidebar
            name={this.state.nameInput}
            currentChannel={this.state.currentChannel}
            changeChannel={this.changeChannel}
          />
          <Chat channel={this.state.currentChannel} />
        </div>
        {/* )} */}
      </div>
    );
  }
}

export default Home;
