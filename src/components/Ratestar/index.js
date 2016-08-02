import React, {Component} from 'react'
import Rate from 'antd/lib/rate'

class Ratestar extends Component {

  state = {
    value: 3,
        count: null
      }

  handleChange=(value)=> {
      this.setState({ value });
    }

    render() {
      const { value } = this.state;
      return (
        <span>
        <Rate onChange={this.handleChange} value={value} />
          {value && <span className="ant-rate-text">{value} 星</span>}
      </span>
      );
    }
}



export default Ratestar