import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


export default class Home extends Component {
  constructor(props) {
    super(props);

    // this.state={

    // }
    this.AppointmentHome = this.AppointmentHome.bind(this);
    this.VaccineHome = this.VaccineHome.bind(this);
    this.HospitalHome=this.HospitalHome.bind(this);
    this.AvailableHome = this.AvailableHome.bind(this);

  }
  AppointmentHome() {
    this.props.history.push('/appointments');


  }
  HospitalHome() {
    this.props.history.push('/hospitals');


  }
  VaccineHome() {
    this.props.history.push('/vaccine')
}
AvailableHome() {
  this.props.history.push('/available')
}
  //The JSX to render will be returned inside the render method.
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/home"} className="navbar-brand">
              Covid Vaccination
          </Link>

            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>

              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link" onClick={() => { alert('Helpline number is 8800-0088-88') }} >
                    Help-Line
                </Link>
                </li>
              </div>
            </div>

            <div className="navbar-nav ml-auto">



              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                  </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                  </Link>
              </li>
              <li className="nav-item">
                <Link onClick={this.AppointmentHome} className="nav-link">
                  Appointment
                  </Link>
              </li>
              <li className="nav-item">
                <Link onClick={this.HospitalHome} className="nav-link">
                  Hospital
                  </Link>
              </li>
              <li className="nav-item">
                <Link onClick={this.VaccineHome} className="nav-link">
                  Vaccine
                  </Link>
              </li>
              <li className="nav-item">
                <Link onClick={this.AvailableHome} className="nav-link">
                  Available
                  </Link>
              </li>
            </div>

          </nav>
        </div>





        <img src="https://kauveryhospital.com/blog/wp-content/uploads/2021/02/dreamstime_xxl_208496627.jpg" alt="Chania" width="100%" height="500" />

        <br></br><br></br> <br></br>


        <div className="oppo text-center">
          <h1>Covid Vaccination Drive Application</h1>
          <p>Now you can book your appointment using application for vaccination. </p>
          <p>Your Health is our First Priorty</p>
        </div>
        <br></br><br></br>


        <div className="container">
          <div className="row">

            <div className="col-sm-4 text-center" style={{ backgroundColor: "#80bfff" }}>
              <h3>Qualitfied Doctors</h3>
              <p >We hired the trained and qualitfied doctors having higher degree and experince more than 5 years..</p>
              <p >Doctors are trained for COVID-19 and certificated by WHO</p>
            </div>
            <div className="col-sm-4 text-center" style={{ backgroundColor: "#4da6ff" }}>
              <h3>Emergency Care</h3>
              <p >We are responsible for the provision of medical and surgical care of patients..</p>
              <p >Emergency care such as accident and emergency, emergency room, emergency ward or casualty</p>
            </div>
            <div className="col-sm-4 text-center" style={{ backgroundColor: "#80bfff" }}>
              <h3>24 Hours Service</h3>
              <p >We are providing advanced 24x7 services with rapid response for any kind of treatment.</p>
              <p >Advanced life support and traning is given to doctors and ambulance staff</p>
            </div>
          </div>
        </div>
        <br></br><br></br>
      </div>

    );
  }
}


