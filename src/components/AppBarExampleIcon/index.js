import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router'

import * as style from './style'

class AppBarExampleIcon extends Component {

  render () {
    return (
      <AppBar
        title={<Link to="/test" style={style.styleTitle()}>首页</Link>}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        style={style.style1()}
      />
    )
  }
}




export default AppBarExampleIcon;