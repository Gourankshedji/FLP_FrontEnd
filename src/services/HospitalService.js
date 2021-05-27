import axios from 'axios';

const HOSPITAL_API_BASE_URL = "http://localhost:8080/covidVaccination/hospital/getHospitalList"
class HospitalService{

    getHospitals(){
        return axios.get(HOSPITAL_API_BASE_URL);
    }
    addHospital(hospital){
        return axios.post('http://localhost:8080/covidVaccination/hospital/addHospital',hospital);
    }
    deleteHospital(hospitalId){
        return axios.delete('http://localhost:8080/covidVaccination/hospital/cancelHospital'+'/'+ hospitalId);
    }
    
}
export default new HospitalService()