import axios from 'axios';

const fetchChannels = () => {
  return (
    axios
      // .get('http://localhost:3000/channels') // Todo: Setup dev and prod urls
      .get('https://hrx-portal-api-dev.herokuapp.com/channels')
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error, 'Fetch channels failed!');
      })
  );
};

const fetchChannelMessages = channelName => {
  return (
    axios
      // .get(`http://localhost:3000/channels/${channelId}/messages`) // Todo: Setup dev and prod urls
      .get(
        `https://hrx-portal-api-dev.herokuapp.com/channels/${channelName}/messages`
      )
      .then(response => {
        console.log(response, 'Fetch messages success!');
        return response.data;
      })
      .catch(error => {
        console.log(error, 'Fetch messages failed!');
      })
  );
};

export { fetchChannels, fetchChannelMessages };
