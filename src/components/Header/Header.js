import React, { Component } from "react"
import { Button, Menu, Icon, Dropdown, Input } from "antd"
import { connect } from "react-redux"
import { boardView, getUserBoards, getLists } from "../../ducks/reducer"
import { Link } from "react-router-dom"
import RTelloIcon from "./childComponents/RTelloIcon.js"
import CreateNewBoard from "../routedComponents/Main/childComponents/Boards/CreateNewBoard"
import UserIcon from "./childComponents/UserIcon"

import "./header.css"
class Header extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }

  componentDidMount() {
    this.props.getUserBoards(this.props.user.uid)
  }

  showModal() {
    this.setState({ showModal: false })
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <Input />
        </Menu.Item>
        {this.props.userBoardList.map((item, i) => (
          <Menu.Item
            onClick={() =>
              this.props.boardView(this.props.userBoardList[i]) &&
              this.props.getLists(this.props.userBoardList[i].id)
            }
            key={i}
          >
            <Link to="/lists">{item.name}</Link>
          </Menu.Item>
        ))}
        <Menu.Item>
          <CreateNewBoard />
        </Menu.Item>
      </Menu>
    )
    return (
      <div className="Header-primary">
        <Button
          onClick={() => this.setState({ showModal: true })}
          type="primary"
        >
          <Dropdown overlay={menu}>
            <p className="ant-dropdown-link">
              Boards <Icon type="down" />
            </p>
          </Dropdown>
        </Button>

        <RTelloIcon />
        <UserIcon />
      </div>
    )
  }
}
const mapStateToProps = state => state
export default connect(
  mapStateToProps,
  { boardView, getUserBoards, getLists }
)(Header)
