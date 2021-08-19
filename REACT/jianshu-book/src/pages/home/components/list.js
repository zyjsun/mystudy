import React, { Component } from 'react';
import { ListItem, ListInfo } from '../style'
import { connect } from 'react-redux';
class List extends Component {

  render () {
    const { list } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <ListItem key={index}>
                <img className="pic" src={item.object.data.list_image_url}></img>
                <ListInfo>
                  <h3 className="title">{item.object.data.title}</h3>
                  <p className="desc">{item.object.data.public_abbr}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
      </div>
    );
  }
}
const mapState = (state) => ({
  list: state.home.get('articleList')
  // state.getIn(['home', 'articleList'])

})
export default connect(mapState, null)(List);
