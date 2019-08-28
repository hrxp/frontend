import React from 'react';

const MessagesContext = React.createContext({});

export const MessagesConsumer = MessagesContext.Consumer;

export class MessagesProvider extends React.Component {
  state = {
    messages: []
  }

  render() {
    return (
      <MessagesContext.Provider value={this.state}>
        {this.props.children}
      </MessagesContext.Provider>
    )
  }
}

export default MessagesContext;