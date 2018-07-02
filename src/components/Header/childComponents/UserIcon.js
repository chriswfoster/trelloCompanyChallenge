import React, { Component } from "react"
import { Button, Menu, Icon, Dropdown, Input } from "antd"
import { connect } from "react-redux"

class UserIcon extends Component {
  render() {
      console.log(this.props.user)
    const {displayname, email} = this.props.user
    const menu = (
      <Menu>
        <Menu.Item>{displayname} ({email})</Menu.Item>
        <Menu.Item><hr /></Menu.Item>
        <Menu.Item>About</Menu.Item>
      </Menu>
    )
    const matches = this.props.user.displayname ? displayname.match(/\b(\w)/g).join('') : 'N/A'
    return (
      <div className="UserIcon-primary">
        <Dropdown overlay={menu}>
          <p className="ant-dropdown-link">
        {matches}
          </p>
        </Dropdown>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {})(UserIcon)
