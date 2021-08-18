import React, { Component } from 'react';

import {
  HeaderWrapper,
  Logo,
  Nav,
  WrapperContainer,
  NavItem
} from './style'
class Header extends Component {
  render () {
    return (
      <HeaderWrapper>
        <WrapperContainer>
          <Logo />
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载app</NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'>
              <i className='iconfont'> &#xe636;</i>
            </NavItem>
          </Nav>
        </WrapperContainer>
      </HeaderWrapper>
    );
  }
}

export default Header;
