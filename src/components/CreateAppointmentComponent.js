import axios from 'axios';
import React, { Component } from 'react';
import AppointmentService from '../services/AppointmentService';
import { ImCross } from "react-icons/im";
import { FaSave } from "react-icons/fa";

class CreateAppointmentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adharNo: '',
            hospitalId: '',
            gender: '',
            dob: '',
            vaccineId: '',

            hospitals: [],
            vaccines: [],

            adharNoError: '',
            hospitalIdError: '',
            genderError: '',
            dobError: '',
            vaccineIdError: '',



        }
        this.changeAdharNoHandeler = this.changeAdharNoHandeler.bind(this);
        this.changeHospitalIdHandeler = this.changeHospitalIdHandeler.bind(this);
        this.changeGenderHandeler = this.changeGenderHandeler.bind(this);
        this.changeDOBHandeler = this.changeDOBHandeler.bind(this);
        this.changeVaccineIdHandeler = this.changeVaccineIdHandeler.bind(this);
        this.saveAppointment = this.saveAppointment.bind(this);
        this.cancelAppointment = this.cancelAppointment.bind(this);
        this.validate = this.validate.bind(this);
    }
    componentDidMount() {
        axios.get('http://localhost:8080/covidVaccination/hospital/getHospitalList')
            .then((response) => {
                let hosps = response.data.map((hosp) => {
                    console.log(hosp.hospitalId + "  " + hosp.hospitalName)
                    return { value: hosp.hospitalId, display: hosp.hospitalName };
                });
                this.setState({
                    hospitals: [{ value: "-1", display: "Select hospital" }].concat(hosps),

                });
            })
        axios.get('http://localhost:8080/Vaccine/vaccine/selectAll')
            .then((response) => {
                let vacs = response.data.map((vac) => {
                    console.log(vac.vaccineId + "  " + vac.typeofVaccine)
                    return { value: vac.vaccineId, display: vac.typeofVaccine };
                });
                this.setState({
                    vaccines: [{ value: "-1", display: "Select Vaccine" }].concat(vacs),

                });
            })

    }
    validate = () => {
        let adharNoError = "";
        let hospitalIdError = "";
        let genderError = "";
        let dobError = "";
        let vaccineIdError = "";
        if (!this.state.adharNo) {
            adharNoError = "Adhar Number Should Not be blank";
        }
        if (!this.state.hospitalId) {
            hospitalIdError = "Select Hospital ";
        }
        if (!this.state.gender) {
            genderError = "Gender shold not be blank  ";
        }
        if (!this.state.dob) {
            dobError = "Enter the Date of Birth  ";
        }
        if (!this.state.vaccineId) {
            vaccineIdError = "Select vaccine to get vaccinated  ";
        }
        if (adharNoError || hospitalIdError || genderError || dobError || vaccineIdError) {
            this.setState({
                adharNoError,
                hospitalIdError,
                genderError,
                dobError,
                vaccineIdError
            });
            return false;
        }
        return true;
    };
    saveAppointment = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            this.setState({
                adharNoError: "",
                hospitalIdError: "",
                genderError: "",
                dobError: "",
                vaccineIdError: ""
            });


            let appointment = {
                adharNo: this.state.adharNo,
                hospital: { hospitalId: this.state.hospitalId, },
                //hospitalId:this.state.hospitalId,
                gender: this.state.gender,
                dob: this.state.dob,
                //   vaccineId:this.state.vaccineId
                vaccineId: { vaccineId: this.state.vaccineId, },
            };
            console.log('appointment => ' + JSON.stringify(appointment));
            AppointmentService.createAppointment(appointment).then(res => {
                this.props.history.push('/appointments');
                alert("New Appointment Booked...");
            }).catch(error => { alert(error.response.data.errors) })
        }
        else {
            alert("Appointment Data False ...Please enter correct details..");
        }
    };

    changeAdharNoHandeler = (event) => {
        this.setState({ adharNo: event.target.value, adharNoError: '' });
    }
    changeHospitalIdHandeler = (event) => {
        this.setState({ hospitalId: event.target.value, hospitalIdError: '' });
    }
    changeGenderHandeler = (event) => {
        this.setState({ gender: event.target.value, genderError: '' });
    }
    changeDOBHandeler = (event) => {
        this.setState({ dob: event.target.value, dobError: '' });
    }
    changeVaccineIdHandeler = (event) => {
        this.setState({ vaccineId: event.target.value, vaccineIdError: '' });
    }

    cancelAppointment() {
        this.props.history.push('/appointments');
    }
    render() {
        return (
            <div>
                <div className="AptContainer">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center">Book Appointment</h2>
                            <div className="card-body">

                                <form>
                                    <div className="form-group">
                                        <label>Adhar No :</label>
                                        <input placeholder="Adhar No" name="adharNo" className="form-control"
                                            value={this.state.adharNo} onChange={this.changeAdharNoHandeler}></input>
                                        <div style={{ fontSize: "2", color: "blue" }}>{this.state.adharNoError}</div><br />
                                    </div>
                                    <div >


                                        <select value={this.state.hospitalId}
                                            onChange={(event) =>
                                                this.setState({ hospitalId: event.target.value })

                                            }
                                        >
                                            {this.state.hospitals.map((ho) => (
                                                <option key={ho.value} value={ho.value}>
                                                    {ho.display}
                                                </option>
                                            ))}

                                        </select>
                                    </div>
                                    <div style={{ fontSize: "2", color: "red" }}>{this.state.hospitalIdError}</div>

                                    <div className="form-group">
                                        <label>Gender :</label>
                                        <input placeholder="Gender" name="gender" className="form-control"
                                            value={this.state.gender} onChange={this.changeGenderHandeler}></input>
                                        <div style={{ fontSize: "2", color: "red" }}>{this.state.genderError}</div><br></br>

                                    </div>
                                    <div className="form-group">
                                        <label>Date Of Birth :</label>
                                        <input type="date" placeholder="DOB" name="dob" className="form-control"
                                            value={this.state.dob} onChange={this.changeDOBHandeler}></input>
                                        <div style={{ fontSize: "2", color: "red" }}>{this.state.dobError}</div><br></br>

                                    </div>
                                    {/* <div className="form-group">
                                        <label>Appointment Date :</label>
                                        <input placeholder="Appointment Date" name="appointmentDate" className="form-control"
                                        value={this.state.appointmentDate} onChange={this.changeAppointmentDateHandeler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Time :</label>
                                        <input placeholder="Time" name="time" className="form-control"
                                        value={this.state.time} onChange={this.changeTimeHandeler}></input>
                                    </div> */}
                                    <div>


                                    <label>Select Vaccine : <br/>
                                        <select value={this.state.vaccineId}
                                            onChange={(event) =>
                                                this.setState({ vaccineId: event.target.value })

                                            }
                                        >
                                            {this.state.vaccines.map((va) => (
                                                <option key={va.value} value={va.value}>
                                                    {va.display}
                                                </option>
                                            ))}

                                        </select>
                                        </label>
                                        <div style={{ fontSize: "2", color: "red" }}>{this.state.vaccineIdError}</div>
                                    </div>
                                    <FaSave className='btnCan' size={30} color='green' onClick={this.saveAppointment}></FaSave>
                                    {/* <button className="btn btn-success" onClick={this.saveAppointment}>Book</button> */}
                                    <ImCross className='btnCan' onClick={this.cancelAppointment} size={30} color='red'></ImCross>
                                    {/* <button className="btn btn-danger" onClick={this.cancelAppointment}>Cancel</button> */}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateAppointmentComponent;