import React ,{Component} from 'react'
import axios from 'axios';
import { BASE_URL_FOR_API } from '../../config/types';
import EachStudent from './EachStudent';



class StudentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refId:0,
      numberOfStudents:20,
      studentList:[]
    };

   
  }

  componentDidMount(){
    this.getStudents()
  }

  getStudents= () => {
      const reqbody = {
        refId:this.state.refId,
        numberOfStudents:this.state.numberOfStudents
      };
    
      console.log(reqbody)
      axios.post(BASE_URL_FOR_API+'/api/student/all', reqbody)
      .then(
        (response) => {    
          console.log(response.data)     
            if (response.data.status === "Success"){
              this.setState({
                  studentList: response.data.data,
              });
            }else{
              this.setState({
                studentList:[]
              });
            }
        }
      );
  }
  
  render(){

    var rows = [];
    for (var i = 0; i < this.state.studentList.length; i++) {

      
        rows.push(<EachStudent key={i} student={this.state.studentList[i]} />);
    }
    return (
    <div>
         <table>
        <thead>
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Nationality</th>
              <th>Date of Birth</th>
              <th>Education Background</th>
              <th>Preferred Mode of Contact</th>
          </tr>
        </thead>

        <tbody>
        {rows}
        </tbody>
      </table>
     
        
    </div>);
  }
}

export default StudentList