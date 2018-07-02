import React, { Component } from "react"
import Header from "../../Header/Header"
import "./about.css"
import Why from './Why'
import What from './What'

import { Link } from "react-router-dom"
import { Menu, Icon } from "antd"
const SubMenu = Menu.SubMenu

class About extends Component {
  rootSubmenuKeys = ["sub1", "sub2", "sub4"]

  state = {
    openKeys: ["sub1"],
    readingText: <What />
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    )
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys })
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }

  generalInfo(val) {
    this.setState({ readingText: val })
  }

  render() {
    return (
      <div className="About-primary">
        <Header />
        About page
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: 256 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="info-circle" />
                <span>General info:</span>
              </span>
            }
          >
            <Menu.Item key="1" onClick={()=> this.generalInfo(<What />)}>What does this site do?</Menu.Item>
            <Menu.Item key="2" onClick={()=> this.generalInfo(<Why />)}>Why build this?</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="double-right" />
                <span>Navigation:</span>
              </span>
            }
          >
            <Menu.Item key="5">
              <Link to="/main">Home</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/main/boards">Boards</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>Tech used in this project:</span>
              </span>
            }
          >
            <Menu.Item key="9">
              <a target="_blank" href="https://www.javascript.com/">
                Javascript (primary language)
              </a>
            </Menu.Item>
            <Menu.Item key="10">
              <a target="_blank" href="https://reactjs.org//">
                ReactJS
              </a>
            </Menu.Item>
            <Menu.Item key="11">
              <a
                target="_blank"
                href="https://github.com/ReactTraining/react-router"
              >
                React-Router
              </a>
            </Menu.Item>
            <Menu.Item key="12">
              <a target="_blank" href="https://github.com/reduxjs/react-redux">
                React-Redux
              </a>
            </Menu.Item>
            <Menu.Item key="13">
              <a target="_blank" href="https://expressjs.com/">
                Node/Express
              </a>
            </Menu.Item>
            <Menu.Item key="14">
              <a
                target="_blank"
                href="https://en.wikipedia.org/wiki/Representational_state_transfer"
              >
                RESTful Web Services
              </a>
            </Menu.Item>
            <Menu.Item key="15">
              <a target="_blank" href="https://www.postgresql.org/">
                PostgreSQL
              </a>
            </Menu.Item>
            <Menu.Item key="16">
              <a target="_blank" href="https://github.com/dmfay/massive-js">
                MassiveJS
              </a>
            </Menu.Item>
            <Menu.Item key="17">
              <a target="_blank" href="https://firebase.google.com/docs/auth/">
                Firebase Authentication
              </a>
            </Menu.Item>
            <Menu.Item key="18">
              <a target="_blank" href="https://github.com/react-dnd/react-dnd">
                React DND (Drag and Drop)
              </a>
            </Menu.Item>
            <Menu.Item key="19">
              <a target="_blank" href="https://ant.design/">
                Ant Design
              </a>
            </Menu.Item>
            <Menu.Item key="20">And more...</Menu.Item>
          </SubMenu>
        </Menu>
        {this.state.readingText}
      </div>
    )
  }
}
export default About
