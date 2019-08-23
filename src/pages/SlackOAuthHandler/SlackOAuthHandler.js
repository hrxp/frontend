import React from "react"
import axios from "axios"

export default class SlackOAuthHandler extends React.Component {
  async componentDidMount() {
    const currentHref = window.location.href // URL string
    const currentUrl = new URL(currentHref) // `URL` instance
    const oauthCode = currentUrl.searchParams.get("code")

    try{
      const res = await axios.get(`http://localhost:3001/auth/access_token?code=${oauthCode}`)
      localStorage.setItem("hrxp_jwt", res.data)
      window.location.href = "/"
    } catch(e) {
      console.error("Axios error",  e)
      window.location.href = "/login"
    }
  }

  render() {
    return <h3>Exchanging your Slack login for an access token... <a href="/login">Back to login</a></h3>
  }
}
