import React, {Component} from 'react'
import Switch from 'antd/lib/switch'
import Button from 'antd/lib/button'
import Progress from 'antd/lib/progress'

const ButtonGroup = Button.Group;

class Myprogress extends Component {

  state = {
    percent: 0
  }

  increase =  () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  }


  decline= () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  }


  render() {
    return (
      <div>
        <Progress type="circle" percent={this.state.percent}  status="success" strokeWidth={2} />
        <ButtonGroup>
          <Button type="ghost" onClick={this.decline} icon="minus" />
          <Button type="ghost" onClick={this.increase} icon="plus" />
        </ButtonGroup>
      </div>
    );
  }
}



export default Myprogress