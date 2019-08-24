import axios from "axios";

axios.interceptors.request.use(function(config) {
  const token = localStorage.getItem("hrxp_jwt");
  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(null, function(error) {
  if (error.response.status === 401) {
    // API auth error
    window.location.href = "/login";
    console.warn("Unauthorized API call detected; redirecting to login");
    return;
  }

  return error;
});

const fetchChannels = () => {
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
