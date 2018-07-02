import React, {Component} from 'react';
import Header from '../../Header/Header'
import './about.css'

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;


class About extends Component {

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    
      state = {
        openKeys: ['sub1'],
      };
    

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

render() {
return(
<div className="About-primary">
<Header />
    About page
    <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256 }}
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>This Project's Tech Stack:</span></span>}>
          <Menu.Item key="9">Primarily Javascript</Menu.Item>
          <Menu.Item key="10">React</Menu.Item>
          <Menu.Item key="11">Node/Express</Menu.Item>
          <Menu.Item key="12">PostgreSQL</Menu.Item>
          <Menu.Item key="13">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
</div>
)}
}
export default About