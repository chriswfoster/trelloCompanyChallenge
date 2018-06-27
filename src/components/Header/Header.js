import React, { Component } from "react"
import { Button, Menu, Icon, Dropdown, Input } from "antd"
import { connect } from "react-redux"

import "./header.css"
class Header extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }

  showModal() {
    this.setState({ showModal: false })
  }

  render() {
    const menu = (  <Menu
      // visible={this.state.showModal
    >
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item><Input /></Menu.Item>
    </Menu>)
    return (
      <div className="Header-primary">
        <Button
          onClick={() => this.setState({ showModal: true })}
          type="primary"
        >
          <Dropdown overlay={menu}>
    <p className="ant-dropdown-link" >
      Boards <Icon type="down" />
    </p>
  </Dropdown>
        </Button>
     
        <p>Rtello</p>
        <p>Console stuff</p>
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(mapStateToProps, {})(Header)