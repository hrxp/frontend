import axios from 'axios';

const fetchChannels = () => {
  return axios
    .get('http://localhost:3000/channels') // Todo: Setup dev and prod urls
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error, 'Fetch channels failed!');
    });
};

const fetchChannelMessages = channelId => {
  return axios
    .get(`http://localhost:3000/channels/${channelId}/messages`) // Todo: Setup dev and prod urls
    .then(response => {
      console.log(response, 'Fetch messages success!');
      return response.data;
    })
    .catch(error => {
      console.log(error, 'Fetch messages failed!');
    });
};

export { fetchChannels, fetchChannelMessages };
