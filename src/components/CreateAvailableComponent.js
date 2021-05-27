import React, { Component } from 'react';

import AvailableService from '../services/AvailableService';
import { ImCross } from "react-icons/im";
import { FaSave } from "react-icons/fa";



class CreateAvailableComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            availableDate: '',
            availableTime: ''
        }

        this.changeAvailableDateHandler = this.changeAvailableDateHandler.bind(this);
        this.changeAvailableTimeHandler = this.changeAvailableTimeHandler.bind(this);
        this.saveAvailable = this.saveAvailable.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    saveAvailable = (e) => {
        e.preventDefault();

        let available = { availableDate: this.state.availableDate, availableTime: this.state.availableTime };
        console.log('available =>' + JSON.stringify(available));
        AvailableService.createAvailable(available).then(ress => {
            this.props.history.push('/available');
        })
    }
    cancel() {
        this.props.history.push('/available');
    }
    changeAvailableDateHandler = (event) => {
        this.setState({ availableDate: event.target.value });
    }
    changeAvailableTimeHandler = (event) => {
        this.setState({ availableTime: event.target.value });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="AptContainer">
                <div className="Avacontainer">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset md-3">
                            <h3 className="text-centre"> Add Availability</h3>
                                <div className="card-body">
                                    <form>
                                            <label> Available Date</label>
                                            <input type="date" placeholder="Available Date" name="availableDate" className="form-control"
                                                value={this.state.availableDate} onChange={this.changeAvailableDateHandler}></input>
                                            
                                            <label> Available Time</label>
                                            <input type="datetime-local" step='1' min="00:00:00T08:30" max="24:00:00T08:30" id="timezone" placeholder="Available Time" name="availableTime" className="form-control"
                                                value={this.state.availableTime} onChange={this.changeAvailableTimeHandler}></input>
                
                                        <FaSave className='btnCan' size={30} color='green' onClick={this.saveAvailable}></FaSave>
                                        <ImCross className='btnCan' onClick={this.cancel} size={30} color='red'></ImCross>
                                    </form>
                                </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
export default CreateAvailableComponent;
