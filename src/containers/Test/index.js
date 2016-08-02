import React, {Component} from 'react';
import {Link} from 'react-router'
import LikeIcon from '../../components/LikeIcon'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AutoCompleteExampleSimple from '../../components/AutoCompleteExampleSimple'




class Home extends React.Component {
  render() {
    return (
      <div>
      <div>
        <Link to="/">跳转回首页</Link>
      </div>
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <LikeIcon/>
          <AutoCompleteExampleSimple/>
        </div>
      </MuiThemeProvider>
      </div>
      </div>
      
    );
  }
}

export default Home;