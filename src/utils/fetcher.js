import axios from 'axios';
const PORT = process.env.PORT || 3000;

const fetchChannels = () => {
  console.log(process.env)
  console.log(process.env.PORT)
  console.log(process.env.REACT_APP_API_BASE_URL)
  return axios
    .get(`${process.env.REACT_APP_API_BASE_URL}/channels`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error, "Fetch channels failed!");
    });
};

const fetchChannelMessages = channelName => {
  return axios
    .get(
      `${process.env.REACT_APP_API_BASE_URL}/channels/${channelName}/messages`
    )
    .then(response => {
      console.log(response, "Fetch messages success!");
      return response.data;
    })
    .catch(error => {
      console.log(error, "Fetch messages failed!");
    });
};

export { fetchChannels, fetchChannelMessages };
