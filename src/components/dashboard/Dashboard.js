import React, { Component } from 'react'
import StudentList from '../student/StudentList'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m12">
            <StudentList />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard