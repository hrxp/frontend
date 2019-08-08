import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Chat from "../../components/Chat/Chat";

const Home = (props) => {
  return (
    <div className="home">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;
