import React, { Component } from 'react';
import AvailableService from '../services/AvailableService'
import { AiFillHome } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import { ImCross } from "react-icons/im";

class ListAvailableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            availables: []
        }
        this.addAvailable = this.addAvailable.bind(this);
        this.deleteAvailable = this.deleteAvailable.bind(this);
        this.home = this.home.bind(this);
    }

    deleteAvailable(availableId) {
        AvailableService.deleteAvailable(availableId).then(res => {
            this.setState({ availables: this.state.availables.filter(available => available.availableId !== availableId) });
        }).catch(error => {alert(error);})

    }

    componentDidMount() {
        AvailableService.getAvailable().then((res) => {
            this.setState({ availables: res.data });
        });
    }
    addAvailable() {
        this.props.history.push('/add-available');
    }
    home() {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Available List</h2>
                <div className="AddBtn">
                    <CgAddR size={62} color="blue" onClick={this.addAvailable}></CgAddR>
                    <AiFillHome size={62} color="gray" onClick={this.home}></AiFillHome>
                </div>
                <div className="Avacontainer"></div>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Availability-Id</th>
                            <th>Available Date</th>
                            <th>Available Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.availables.map(
                                available =>
                                    <tr className="text-center" key={available.availableId}>
                                        <td>{available.availableId}</td>
                                        <td>{new Date(available.availableDate).toLocaleDateString()}</td>
                                        <td>{available.availableTime[3]} : {available.availableTime[4]} : {available.availableTime[5]}</td>
                                        <td><ImCross className='text-center' onClick={() => this.deleteAvailable(available.availableId)} size={20} color='red'></ImCross></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }

}

export default ListAvailableComponent;