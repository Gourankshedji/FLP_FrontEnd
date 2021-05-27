import React, { Component } from 'react';
import VaccineService from '../services/VaccineService';
import { AiFillHome } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";


class ListVaccineComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            vaccines:[]
        }
        this.addVaccine=this.addVaccine.bind(this);
        this.home=this.home.bind(this);
    }
    componentDidMount(){
        VaccineService.getVaccines().then((res) =>{
           this.setState({vaccines:res.data});
        });
    }
    addVaccine(){
        this.props.history.push('/add-vaccine');
    }
    home(){
        this.props.history.push('/home');
    }
    render() {
        return (
            <div>
               <h2 className="text-center">Vaccine List</h2> 
               {/* <div className="right"> */}
               <div className="AddBtn">
               <CgAddR size={62} color="blue" onClick={this.addVaccine}></CgAddR>
               
               {/* <button className="btn btn-primary" onClick={this.addVaccine}>Add Vaccine</button> */}
                  <AiFillHome  size={62} color="gray"   onClick={this.home}></AiFillHome>
                  </div>
                  {/* <button className='btn btn-secondary' onClick={this.home}>Home</button> */}
              {/* </div> */}
               <div className="Vacccontainer">
              <table className="table table-striped table-bordered">
              <thead>
                  <tr>
                      <th>Vaccine-Id</th>
                      <th>Type Of Vaccine</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      this.state.vaccines.map(
                          vaccine =>
                          <tr key={vaccine.id}>
                              <td>{vaccine.vaccineId}</td>
                              <td>{vaccine.typeofVaccine}</td>
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

export default ListVaccineComponent;