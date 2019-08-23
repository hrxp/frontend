import axios from 'axios';

axios.interceptors.request.use(function (config) {
  config.headers.common.Authorization = `Bearer ${localStorage.getItem("hrxp_jwt")}`
  return config
});

axios.interceptors.response.use(null, function (error) {
  if(error.response.status === 401) {
    // API auth error
    window.location.href = "/login"
    console.warn("Unauthorized API call detected; redirecting to login")
    return
  }

  return error
});

const fetchChannels = () => {
  return axios
    .get('http://localhost:3000/channels') // Todo: Setup dev and prod urls
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error, 'Fetch channels failed!');
    });
};

const fetchChannelMessages = channelId => {
  return axios
    .get(`http://localhost:3000/${channelId}/messages`) // Todo: Setup dev and prod urls
    .then(response => {
      console.log(response, 'Fetch messages success!');
      return response.data;
    })
    .catch(error => {
      console.log(error, 'Fetch messages failed!');
    });
};

export { fetchChannels, fetchChannelMessages };
