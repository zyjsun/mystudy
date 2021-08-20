import React, { Component } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { actionCreators } from '../store/index'
class List extends Component {

  render () {
    const { list } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to={`/detail/${item.object.data.id}`}>
                <ListItem >
                  <img className="pic" src={item.object.data.list_image_url}></img>
                  <ListInfo>
                    <h3 className="title">{item.object.data.title}</h3>
                    <p className="desc">{item.object.data.public_abbr}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => this.props.getMoreList(2)}>阅读更多</LoadMore>
      </div>
    );
  }
}
const mapState = (state) => ({
  list: state.home.get('articleList')
  // state.getIn(['home', 'articleList'])
})

const mapDispatch = (dispatch) => ({
  getMoreList (page) {
    dispatch(actionCreators.getMoreList(page))
  }
})
export default connect(mapState, mapDispatch)(List);
