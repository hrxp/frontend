import React from "react";
import Channels from "../Channels/Channels";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<h2 className="sidebar--header">
				HRX Portal
				<button className="login">Login</button>
			</h2>
			<div className="sidebar--username">
				<span className="user-online">&middot;</span> username here
			</div>
			<Channels />
		</div>
	)
}

export default Sidebar