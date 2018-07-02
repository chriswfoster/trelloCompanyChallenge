import React, { Component } from "react"

class What extends Component {
  render() {
    return (
      <div className="Info-primary">
        <p className="Info-title"> What does this site do?</p>
        <p className="Info-body">
          This site is a user friendly (drag and drop)
          note-taking/organizational tool.
        </p>
        <p className="Info-body">
          You can use this site to plan out a project, give yourself reminders,
          or to simply take notes. Everything is stored in the database so it'll
          be here when you return next time!
        </p>
      </div>
    )
  }
}
export default What
