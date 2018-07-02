import React, { Component } from "react"

class Why extends Component {
  render() {
    return (
      <div className="Info-primary">
        <p className="Info-title"> Why did I build this site?</p>
        <p className="Info-body">
          I originally built the site as a challenge for a job. The employer
          wanted to see my capability at utilizing React with Redux, and the
          React Drag 'n Drop tool.
        </p>
        <p className="Info-body">
          A bit after I submitted the project, I thought I'd add full
          functionality, a database, and a user environment to it. And here we
          are.
        </p>
      </div>
    )
  }
}
export default Why
