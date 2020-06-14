import React,{ Component } from 'react'

class EachStudent extends Component {
  render(){
    return (
    <tr>
            <td>{this.props.student.id}</td>
            <td>{this.props.student.name}</td>
            <td>{this.props.student.gender}</td>
            <td>{this.props.student.phone}</td>
            <td>{this.props.student.email}</td>
            <td>{this.props.student.nationality}</td>
            <td>{this.props.student.dob}</td>
            <td>{this.props.student.educationbackground}</td>
            <td>{this.props.student.preferredmodeofcontact}</td>
    </tr>

           );
  } 
}

export default EachStudent
