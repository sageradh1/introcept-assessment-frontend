import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import InputGroup from '../common/InputGroup';
// import { createProfile } from '../../actions/profileActions';
import { BASE_URL_FOR_API } from '../../config/types';
import axios from 'axios';
import SuccessMsg from '../alerts/Success';
import ErrorMsg from '../alerts/Error';


class CreateStudent extends Component {
  constructor(props) {
    super(props);
    // Select options for status
    this.educationOptions = [
        { label: 'Primary Level', value: 'Primary Level' },
        { label: 'Secondary Level', value: 'Secondary Level' },
        { label: "Bachelor's Level", value:  "Bachelor's Level" },
        { label: "Master's Level", value: "Master's Level" },
        { label: "Phd Level", value: "Phd Level" },
        { label: 'Other', value: 'Other' }
      ];
  
      // Select options for gender
      this.genderOptions = [
              { label: 'Male', value: 'Male' },
              { label: 'Female', value: 'Female' },
              { label: 'Others', value:  'Others' },
              { label: 'Dont like to say', value: 'Dont like to say' }
          ];
  
      // Select options for Preferred Mode of communication
      this.modeOfComOptions = [
              { label: 'Email', value: 'Email' },
              { label: 'Phone', value: 'Phone' },
              { label: 'None', value:  'None' }    
          ];
  

    this.state = {
        name:'',
        gender:this.genderOptions[0]['value'],
        phone:0,
        email: '',
        nationality:'',
        dob:new Date().toJSON().slice(0,10).replace(/-/g,'/'),
        educationbackground:this.educationOptions[0]['value'],
        preferredmodeofcontact:this.modeOfComOptions[0]['value'],
        errors: {},
        isSuccess:false,
        isRequestMade:false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
        name:this.state.name,
        gender:this.state.gender,
        phone:this.state.phone,
        email: this.state.email,
        nationality:this.state.nationality,
        dob:this.state.dob,
        educationbackground:this.state.educationbackground,
        preferredmodeofcontact:this.state.preferredmodeofcontact
    };

    console.log(profileData)
    axios.post(BASE_URL_FOR_API+'/api/student/', profileData)
    .then(
      (response) => {         
          if (response.data.status === "Success"){
            this.setState({
                isSuccess: true,
                isRequestMade:true
            });
          }else{
            this.setState({
                isSuccess: false,
                isRequestMade:true
            });
          }
        });

  }

  onChange(e) {
    if(e.target.name==='phone' && typeof(e.target.value)==='string'){
        this.setState({ 
          [e.target.name]: parseInt(e.target.value ,10),
          isRequestMade:false,
        });
    }else{
        this.setState({ [e.target.name]: e.target.value ,
          isRequestMade:false,
        });
    } 
    
  }

  render() {
    const { errors } = this.state;

    var messagePart = (
      <div></div>
    );
    
    console.log(this.state.isSuccess)
    console.log(!this.state.isRequestMade)

    if (this.state.isSuccess && this.state.isRequestMade) {
     messagePart = (
        <div>
          <SuccessMsg message="Successfully Added" />
        </div>
      );
    }
    if (!this.state.isSuccess && this.state.isRequestMade){
      messagePart = (
        <div>
            <ErrorMsg message="Sorry could not add the student. Check the format of data."/>
        </div>
        );
    }

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h4 className="display-2 text-center">Add a new student</h4>
                      
              {messagePart}        
              
              <p className="lead text-center">
                Please fill information below:
              </p>
              
              <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                        label="Name"
                        placeholder="* Full name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        error={errors.name}
                        info=""
                    />
                        
                    <SelectListGroup
                        label="Gender"
                        placeholder="* Gender"
                        name="gender"
                        value={this.state.gender}
                        onChange={this.onChange}
                        options={this.genderOptions}
                        error={errors.status}
                        info=""
                    />
            
 

                <InputGroup
                    label='Phone'
                    placeholder="Phone"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.onChange}
                    error={errors.phone}
                    type="number"
                    onChange={this.onChange}
                />          

                    <TextFieldGroup
                        label="Email"
                        placeholder="Your email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={errors.email}
                        info=""
                        type="email"
                    />

                    <TextFieldGroup
                        label="Nationality"
                        placeholder="Nationality"
                        name="nationality"
                        value={this.state.nationality}
                        onChange={this.onChange}
                        error={errors.nationality}
                        info=""
                        type="text"
                    />

                    <TextFieldGroup
                        label="Date of Birth"
                        placeholder="DOB"
                        name="dob"
                        value={this.state.dob}
                        onChange={this.onChange}
                        error={errors.dob}
                        info=""
                        type="date"
                    />
                            
                    <SelectListGroup
                        label="Qualification"
                        placeholder=""
                        name="educationbackground"
                        value={this.state.educationbackground}
                        onChange={this.onChange}
                        options={this.educationOptions}
                        error={errors.educationbackground}
                        info=""
                    />

                    <SelectListGroup
                        label="Prefered Mode Of Communication"
                        placeholder=""
                        name="preferredmodeofcontact"
                        value={this.state.preferredmodeofcontact}
                        onChange={this.onChange}
                        options={this.modeOfComOptions}
                        error={errors.preferredmodeofcontact}
                        info=""
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-info btn-block mt-4"
                    />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateStudent