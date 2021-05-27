import React, { Component } from 'react';
import VaccineService from '../services/VaccineService';
import { ImCross } from "react-icons/im";
import { FaSave } from "react-icons/fa";



class CreateVaccineComponent extends Component {
    constructor(props){
        super(props)
        this.state={

           typeofVaccine:''
        }
        this.changetypeofVaccineHandler=this.changetypeofVaccineHandler.bind(this);
        this.saveVaccine=this.saveVaccine.bind(this);
        this.cancel=this.cancel.bind(this);
    }
    saveVaccine=(e) =>{
        e.preventDefault();

        let vaccine ={typeofVaccine:this.state.typeofVaccine};
        console.log('vaccine =>' +JSON.stringify(vaccine));
        VaccineService.createVaccine(vaccine).then(ress => {
            this.props.history.push('/vaccine');
        })
    }
    cancel(){
        this.props.history.push('/Vaccine');
    }
    changetypeofVaccineHandler=(event) =>{
        this.setState({typeofVaccine:event.target.value});
    }
    render() {
        return (
            <div>
                <div className="Vacccontainer">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset md-3">
                            <h3 className="text-centre"> Add Vaccine</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Type Off Vaccine</label>
                                        <input placeholder="TypeOfvaccine" name="typeofVaccine" className="form-control"
                                        value={this.state.typeofVaccine} onChange={this.changetypeofVaccineHandler}></input>
                                    </div>
                                    <FaSave className='btnCan' size={30} color='green' onClick={this.saveVaccine}></FaSave>
                                    {/* <button className="btn btn-success" onClick={this.saveVaccine}>Save</button> */}
                                    <ImCross className='btnCan' onClick={this.cancel} size={30} color='red'></ImCross>
                                    {/* <button className='btn btn-danger' onClick={this.cancel}>Cancel</button> */}
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default CreateVaccineComponent;