import React,{ Component }from 'react'

class ErrorMsg extends Component {
  render (){
    return <div className="container" style={errorStyle}>
    <div className="alert alert-danger">{this.props.message}</div>
  </div>
  }  
}
const errorStyle  = {
  backgroundColor: '#ffedf2',
  color:'#f00'
}

export default ErrorMsg