import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
  height:58px;
  border-bottom:1px solid #f0f0f0;

`
export const WrapperContainer = styled.div`
  height:100%;
  width: 1150px;
  margin: 0 auto;
  position: relative;
`
export const Logo = styled.a.attrs({
  href: '/'
})
  `
  height: 56px;
  position:absolute;
  top:0;
  left:0;
  display: block;
  width: 100px;
  background:url(${logoPic});
  background-size:contain;
`
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;

`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }

`


