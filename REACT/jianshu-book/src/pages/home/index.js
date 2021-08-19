import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HomeWrapper, HomeLeft, HomeRight, TopicWrapper, TopicItem, ListItem,
  ListInfo, RecommendWrapper, RecommendItem, WriterWrapper
} from './style'
import List from './components/list'
import { actionCreators } from './store/index'
class Home extends Component {
  componentDidMount () {
    this.props.changeHomeData()
  }
  render () {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <List />
          </HomeLeft>
          <HomeRight>right</HomeRight>
        </HomeWrapper>
      </div>
    );
  }

}


const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData () {
      dispatch(actionCreators.getHomeInfo())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
