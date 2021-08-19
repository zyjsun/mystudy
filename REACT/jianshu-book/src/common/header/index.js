import React from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';
import { actionCreators } from './store/index'
import {
  HeaderWrapper,
  Logo,
  Nav,
  WrapperContainer,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style'


const Header = (props) => {
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
          <SearchWrapper>
            <CSSTransition in={props.focused} timeout={200} classNames='slide'>
              <NavSearch className={props.focused ? 'focused' : ''} onFocus={props.changeOnfocus} onBlur={props.changeOnfocus}></NavSearch>
            </CSSTransition>
            <i className={props.focused ? 'iconfont focused' : 'iconfont'}>&#xe64d;</i>
          </SearchWrapper>
          <Addition>
            <Button className='writing'>
              <i className='iconfont'>&#xe7c2;</i>
              写文章
            </Button>
            <Button className='reg'>
              注册
            </Button>
          </Addition>
        </Nav>
      </WrapperContainer>
    </HeaderWrapper>
  );
}


const mapStateToProps = (state) => {
  //state是最外层的store里面的数据，get要获取immuteable创建对象返回的值
  // if (state.header.get('focused')) {
  //   return {
  //     focused: false
  //   }
  // }
  return {
    focused: state.header.get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeOnfocus () {
      dispatch(actionCreators.searchFocus())
    }
  }
}
// class Header extends Component {
//   // constructor(props) {
//   //   super(props)
//   //   // this.state = {
//   //   //   focused: false
//   //   // }
//   // }
//   // handleInputFocus () {
//   //   this.setState({
//   //     focused: true
//   //   })
//   // }
//   // handleInputBlur () {
//   //   this.setState({
//   //     focused: false
//   //   })
//   // } 有无construct 为有无状态组件
//   render () {
//     return (
//       <HeaderWrapper>
//         <WrapperContainer>
//           <Logo />
//           <Nav>
//             <NavItem className='left active'>首页</NavItem>
//             <NavItem className='left'>下载app</NavItem>
//             <NavItem className='right'>登录</NavItem>
//             <NavItem className='right'>
//               <i className='iconfont'> &#xe636;</i>
//             </NavItem>
//             <SearchWrapper>
//               <CSSTransition in={this.props.focused} timeout={200} classNames='slide'>
//                 <NavSearch className={this.props.focused ? 'focused' : ''} onFocus={this.props.changeOnfocus} onBlur={this.props.changeOnfocus}></NavSearch>
//               </CSSTransition>
//               <i className={this.props.focused ? 'iconfont focused' : 'iconfont'}>&#xe64d;</i>
//             </SearchWrapper>
//             <Addition>
//               <Button className='writing'>
//                 <i className='iconfont'>&#xe7c2;</i>
//                 写文章
//               </Button>
//               <Button className='reg'>
//                 注册
//               </Button>
//             </Addition>
//           </Nav>
//         </WrapperContainer>
//       </HeaderWrapper>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     focused: state.focused
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeOnfocus () {
//       const action = {
//         type: 'change_focus_value'
//       }
//       dispatch(action)
//     }
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Header);
