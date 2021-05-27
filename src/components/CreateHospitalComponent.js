import axios from 'axios';
import React, { Component } from 'react';
import AppointmentService from '../services/AppointmentService';
import { ImCross } from "react-icons/im";
import { FaSave } from "react-icons/fa";
import HospitalService from '../services/HospitalService';

class CreateHospitalComponent extends Component {let
    constructor(props) {
        super(props)
        this.state = {
            hospitalName: '',
            hospitalContact: '',
            cityName: '',
            pincode: '',
            availableId: '',

            availables: [],

            // adharNoError: '',
            // hospitalIdError: '',
            // genderError: '',
            // dobError: '',
            // vaccineIdError: '',



        }
        this.changeHospitalNameHandeler = this.changeHospitalNameHandeler.bind(this);
        this.changeHospitalContactHandeler = this.changeHospitalContactHandeler.bind(this);
        this.changeCityNameHandeler = this.changeCityNameHandeler.bind(this);
        this.changePinCodeHandeler = this.changePinCodeHandeler.bind(this);
        this.changeAvailableIdHandeler = this.changeAvailableIdHandeler.bind(this);
        this.saveHospital = this.saveHospital.bind(this);
        this.cancelHospital = this.cancelHospital.bind(this);
       // this.validate = this.validate.bind(this);
    }
    componentDidMount() {
        // axios.get('http://localhost:8080/covidVaccination/hospital/getHospitalList')
        //     .then((response) => {
        //         let hosps = response.data.map((hosp) => {
        //             console.log(hosp.hospitalId + "  " + hosp.hospitalName)
        //             return { value: hosp.hospitalId, display: hosp.hospitalName };
        //         });
        //         this.setState({
        //             hospitals: [{ value: "-1", display: "Select hospital" }].concat(hosps),

        //         });
        //     })
        axios.get('http://localhost:8080/Vaccine/available/selectAll')
            .then((response) => {
                let avas = response.data.map((ava) => {
                    console.log(ava.availableId + "  " + ava.availableTime)
                    return { value: ava.availableId, display: ava.availableTime};
                });
                this.setState({
                    availables: [{ value: "-1", display: "--------------" }].concat(avas),

                });
            })

    }
    // validate = () => {
    //     let adharNoError = "";
    //     let hospitalIdError = "";
    //     let genderError = "";
    //     let dobError = "";
    //     let vaccineIdError = "";
    //     if (!this.state.adharNo) {
    //         adharNoError = "Adhar Number Should Not be blank";
    //     }
    //     if (!this.state.hospitalId) {
    //         hospitalIdError = "Select Hospital ";
    //     }
    //     if (!this.state.gender) {
    //         genderError = "Gender shold not be blank  ";
    //     }
    //     if (!this.state.dob) {
    //         dobError = "Enter the Date of Birth  ";
    //     }
    //     if (!this.state.vaccineId) {
    //         vaccineIdError = "Select vaccine to get vaccinated  ";
    //     }
    //     if (adharNoError || hospitalIdError || genderError || dobError || vaccineIdError) {
    //         this.setState({
    //             adharNoError,
    //             hospitalIdError,
    //             genderError,
    //             dobError,
    //             vaccineIdError
    //         });
    //         return false;
    //     }
    //     return true;
    // };
    saveHospital = (e) => {
        e.preventDefault();
        // const isValid = this.validate();
        // if (isValid) {
        //     this.setState({
        //         adharNoError: "",
        //         hospitalIdError: "",
        //         genderError: "",
        //         dobError: "",
        //         vaccineIdError: ""
        //     });


            let hospital = {
                hospitalName: this.state.hospitalName,
                hospitalContact: this.state.hospitalContact,
                //hospitalId:this.state.hospitalId,
                cityName: this.state.cityName,
                pincode: this.state.pincode,
                //   vaccineId:this.state.vaccineId
                available: { availableId: this.state.availableId, },
            };
            console.log('hospital => ' + JSON.stringify(hospital));
            HospitalService.addHospital(hospital).then(res => {
                this.props.history.push('/hospitals');
                alert("New Hospital Added...");
            })
            // .catch(error => { alert(error.response.data.errors) })
        }
        
    

    changeHospitalNameHandeler = (event) => {
        this.setState({ hospitalName: event.target.value });
    }
    changeHospitalContactHandeler = (event) => {
        this.setState({ hospitalContact: event.target.value});
    }
    changeCityNameHandeler = (event) => {
        this.setState({ cityName: event.target.value });
    }
    changePinCodeHandeler = (event) => {
        this.setState({ pincode: event.target.value });
    }
    changeAvailableIdHandeler = (event) => {
        this.setState({ availableId: event.target.value});
    }

    cancelHospital() {
        this.props.history.push('/hospitals');
    }
    render() {
        return (
            <div>
                <div className="AptContainer">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center">ADD Hospital</h2>
                            <div className="card-body">

                                <form>
                                    <div className="form-group">
                                        <label>Hospital Name :</label>
                                        <input placeholder="Hospital Name" name="hospitalName" className="form-control"
                                            value={this.state.hospitalName} onChange={this.changeHospitalNameHandeler}></input>
                                        {/* <div style={{ fontSize: "2", color: "blue" }}>{this.state.adharNoError}</div><br /> */}
                                    </div>
                                    {/* <div >


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
                                    <div style={{ fontSize: "2", color: "red" }}>{this.state.hospitalIdError}</div> */}

                                    <div className="form-group">
                                        <label>Hospital Contact :</label>
                                        <input placeholder="Contact" name="hospitalContact" className="form-control"
                                            value={this.state.hospitalContact} onChange={this.changeHospitalContactHandeler}></input>
                                        {/* <div style={{ fontSize: "2", color: "red" }}>{this.state.genderError}</div><br></br> */}

                                    </div>
                                    <div className="form-group">
                                        <label>City Name  :</label>
                                        <input  placeholder="City Name " name="cityName" className="form-control"
                                            value={this.state.cityName} onChange={this.changeCityNameHandeler}></input>
                                        {/* <div style={{ fontSize: "2", color: "red" }}>{this.state.dobError}</div><br></br> */}

                                    </div>
                                     <div className="form-group">
                                        <label>Pin Code :</label>
                                        <input placeholder="Pin Code" name="pincode" className="form-control"
                                        value={this.state.pincode} onChange={this.changePinCodeHandeler}></input>
                                    </div>&nbsp;
                                    {/*<div className="form-group">
                                        <label>Time :</label>
                                        <input placeholder="Time" name="time" className="form-control"
                                        value={this.state.time} onChange={this.changeTimeHandeler}></input>
                                    </div> */}
                                    <div>


                                        <label> Select Availability : <br />
                                        <select value={this.state.availableId}
                                            onChange={(event) =>
                                                this.setState({ availableId: event.target.value })

                                            }
                                        >
                                            {this.state.availables.map((av) => (
                                                <option key={av.value} value={av.value}>
                                                   {av.display[0]} / {av.display[1]} / {av.display[2]}  ,  {av.display[3]} : {av.display[4]} : {av.display[5]}
                                                </option>
                                            ))}

                                        </select> 
                                        </label>
                                        {/* <div style={{ fontSize: "2", color: "red" }}>{this.state.vaccineIdError}</div> */}
                                    </div>
                                    <FaSave className='btnCan' size={30} color='green' onClick={this.saveHospital}></FaSave>
                                    {/* <button className="btn btn-success" onClick={this.saveAppointment}>Book</button> */}
                                    <ImCross className='btnCan' onClick={this.cancelHospital} size={30} color='red'></ImCross>
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

export default CreateHospitalComponent;