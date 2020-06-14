import React,{ Component } from 'react'

class SuccessMsg extends Component {
  render(){

    return <div className="container" style={successStyle}>
              <div className="alert alert-danger">{this.props.message}</div>
              </div>
  } 
}

const successStyle =  {
  backgroundColor:'#ffedf2',
  color: 'green'
}
    
export default SuccessMsg
