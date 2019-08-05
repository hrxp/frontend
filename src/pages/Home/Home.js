import React from "react";
import Channels from "../../components/Channels/Channels";

const Home = () => {
  return (
    <div className="home">
      <div className="sidebar">
        <h2 className="sidebar--header">HRX Portal</h2>
        <Channels />
      </div>
    </div>
  );
};

export default Home;
