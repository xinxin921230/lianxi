import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBarExampleIcon from '../../components/AppBarExampleIcon'
import AppBarExampleIconMenu from '../../components/AppBarExampleIconMenu'
import AutoCompleteExampleSimple from '../../components/AutoCompleteExampleSimple'
import {Link} from 'react-router'

class Home extends React.Component {
  render() {
    return (
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <Link to="/test">跳转到测试页面</Link>
          <AppBarExampleIcon title="My AppBar" />
          <AppBarExampleIconMenu title="AppBarExampleIconMenu" />
          <AutoCompleteExampleSimple/>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default Home;