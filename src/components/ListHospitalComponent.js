import React, { Component } from 'react';
import { AiFillHome } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import HospitalService from '../services/HospitalService';




class ListHospitalComponent extends Component {
    constructor(props){
        super(props)
       
        this.state={
            hospitals:[]
        }
        this.addHospital=this.addHospital.bind(this);
        this.deleteHospital=this.deleteHospital.bind(this);
        this.Home=this.Home.bind(this);
    }
    deleteHospital(hospitalId){
        HospitalService.deleteHospital(hospitalId).then(res =>{
            this.setState({hospitals: this.state.hospitals.filter(hospital=> hospital.hospitalId!==hospitalId)});
        });

    }
    componentDidMount(){
        HospitalService.getHospitals().then((res) => {
            this.setState({hospitals: res.data});

        });
    }
    addHospital(){
        this.props.history.push('/add-hospital');
    }
    Home(){
        this.props.history.push('/home');
    }
    render() {
        return (
            <div>
              <h2 className="text-center">Hospital List</h2>
              
              <div className="row mx-auto text-center">
                  <div className='AddBtnApt'>
                  <CgAddR onClick={this.addHospital} size={62} color='blue'></CgAddR>
                  {/* <button className="btn btn-primary appBtn" onClick={this.bookAppointment}>Book Appointment</button>&nbsp; */}
                  <AiFillHome size={62} color='gray' onClick={this.Home}></AiFillHome>
                  {/* <button className='btn btn-warning appBtn' onClick={this.Home}>Home</button> */}
                  </div>

              </div>
              <div className="AptContainer">
              <table className="table table-striped table-bordered">
                  <thead>
                      <tr className="text-center">
                          <th>Hospital-Id</th>
                          <th> Hospital-Name</th>
                          <th>Hospital-Contact</th>
                          <th>City</th>
                          <th>PinCode</th>
                          <th>Available-Id</th>
                          <th>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.hospitals.map(
                              hospital =>
                              <tr className="text-center" key={hospital.hospitalId}>
                                  <td>{hospital.hospitalId}</td>
                                  <td>{hospital.hospitalName}</td>
                                  <td>{hospital.hospitalContact}</td>
                                  <td>{hospital.cityName}</td>
                                  <td>{hospital.pincode}</td>
                                  {/* <td>{appointment.appointmentDate}</td>
                                  <td>{appointment.time}</td> */}
                                  <td>{hospital.available.availableId}</td>
                                  <td><ImCross className='text-center' onClick={ ()=> this.deleteHospital(hospital.hospitalId)} size={20} color='red'></ImCross></td>
                                  {/* <button onClick={ ()=> this.deleteAppointment(appointment.appointmentId)} className="btn btn-danger">Delete</button></td> */}
                                  

                              </tr>
                          )
                      }
                  </tbody>
              </table>

              </div>

            </div>
        );
    }
}

export default ListHospitalComponent;