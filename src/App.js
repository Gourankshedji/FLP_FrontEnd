import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ListAppointmentComponent from './components/ListAppointmentComponent';
import CreateAppointmentComponent from './components/CreateAppointmentComponent';
import ListVaccineComponent from './components/ListVaccineComponent';
import CreateVaccineComponent from './components/CreateVaccineComponent';
import Register from './components/UserComponent/Register';
import Login from './components/UserComponent/Login';
import Home from './components/Home';
import ListHospitalComponent from './components/ListHospitalComponent';
import CreateHospitalComponent from './components/CreateHospitalComponent';
import ListAvailableComponent from './components/ListAvailableComponent';
import CreateAvailableComponent from './components/CreateAvailableComponent';

function App() {
  return (
    <div>
      <Router>
        <div className ="container">
          {/* <div className="container"> */}
            <Switch> http://localhost:3000/
              <Route path="/" exact component={Home}></Route>
              <Route path="/appointments" component={ListAppointmentComponent}></Route>
              <Route path="/hospitals" component={ListHospitalComponent}></Route>
              {/* <Route path="/hospitals" component={ListHospitalComponent}></Route> */}
              <Route path="/add-hospital" component={CreateHospitalComponent}></Route>




              <Route path="/vaccine" component={ListVaccineComponent}></Route>
              <Route path="/book-appointment" component={CreateAppointmentComponent}></Route>
              <Route path="/add-vaccine" component={CreateVaccineComponent}></Route>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register} />
              <Route path="/available" component={ListAvailableComponent}></Route>
              <Route path="/add-available" component={CreateAvailableComponent}></Route>
              
            </Switch>
          </div>
        {/* </div> */}
     </Router>
    </div>
  );
}

export default App;
