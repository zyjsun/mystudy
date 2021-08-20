import { LoginWrapper, LoginBox, Input, Button } from './style'
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { actionCreators } from './store/index'
class Login extends Component {
  render () {
    if (!this.props.loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' onChange={(e) => { this.account = e.target.value }}></Input>
            <Input placeholder='密码' onChange={(e) => { this.password = e.target.value }}></Input>
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to='/'></Redirect>
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.login.get('Login')
  }
}

const mapDispatchToProps = (dispatch) => ({
  login (accountElem, passwordElem) {//innnerRef拿的是Dom
    dispatch(actionCreators.login(accountElem, passwordElem))
    // console.log(accountElem, passwordEle);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
