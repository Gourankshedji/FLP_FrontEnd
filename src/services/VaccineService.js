import axios from 'axios';

const VACCINE_API_BASE_URL = "http://localhost:8080/Vaccine/vaccine/selectAll"

class VaccineService{
    getVaccines(){
    return axios.get(VACCINE_API_BASE_URL);
}
createVaccine(vaccine){
    return axios.post('http://localhost:8080/Vaccine/vaccine/addVaccine',vaccine);
}
}
export default new VaccineService()