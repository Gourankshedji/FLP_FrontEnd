import React, { Component } from 'react';
import AppointmentService from '../services/AppointmentService';
import { AiFillHome } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import { ImCross } from "react-icons/im";




class ListAppointmentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            appointments: []
        }
        this.bookAppointment = this.bookAppointment.bind(this);
        this.deleteAppointment = this.deleteAppointment.bind(this);
        this.Home = this.Home.bind(this);
    }
    deleteAppointment(appointmentId) {
        AppointmentService.deleteAppointment(appointmentId).then(res => {
            this.setState({ appointments: this.state.appointments.filter(appointment => appointment.appointmentId !== appointmentId)});
        });

    }
    componentDidMount() {
        AppointmentService.getAppointments().then((res) => {
            this.setState({appointments: res.data });

        });
    }
    bookAppointment() {
        this.props.history.push('/book-appointment');
    }
    Home() {
        this.props.history.push('/home');
    }
    render() {
        // const dob=new Date("dob")

        return (
            <div>
                <h2 className="text-center">Appointment List</h2>

                <div className="row mx-auto text-center">
                    <div className='AddBtnApt'>
                        <CgAddR onClick={this.bookAppointment} size={62} color='blue'></CgAddR>
                        {/* <button className="btn btn-primary appBtn" onClick={this.bookAppointment}>Book Appointment</button>&nbsp; */}
                        <AiFillHome size={62} color='gray' onClick={this.Home}></AiFillHome>
                        {/* <button className='btn btn-warning appBtn' onClick={this.Home}>Home</button> */}
                    </div>

                </div>
                <div className="AptContainer">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr className="text-center">
                                <th>Appointment-Id</th>
                                <th> AdharNo</th>
                                <th>Hospital-Id</th>
                                <th>Gender</th>
                                <th>DOB</th>
                                {/* <th>Appointment Date</th>
                          <th>Time</th> */}
                                <th>Vaccine-Id</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.appointments.map(
                                    appointment =>
                                        <tr className="text-center" key={appointment.appointmentId}>
                                            <td>{appointment.appointmentId}</td>
                                            <td>{appointment.adharNo}</td>
                                            <td>{appointment.hospital.hospitalId}</td>
                                            <td>{appointment.gender}</td>
                                            <td>{new Date(appointment.dob).toLocaleDateString()}</td>
                                            {/* <td>{appointment.appointmentDate}</td>
                                  <td>{appointment.time}</td> */}
                                            <td>{appointment.vaccineId.vaccineId}</td>
                                            <td><ImCross className='text-center' onClick={() => this.deleteAppointment(appointment.appointmentId)} size={20} color='red'></ImCross></td>
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

export default ListAppointmentComponent;