import axios from 'axios';

const AVAILABLE_API_BASE_URL = "http://localhost:8080/Vaccine/available/selectAll"

class AvailableService{
    getAvailable(){
    return axios.get(AVAILABLE_API_BASE_URL);
}
createAvailable(available){
    return axios.post('http://localhost:8080/Vaccine/available/addAvailibility',available);
}
deleteAvailable(availableId){
    // return axios.delete('http://localhost:8080/Vaccine/available/cancelAvailibility/'+ availableId);
       return axios.delete('http://localhost:8080/Vaccine/available/cancelAvailability'+'/'+ availableId);

}
}
export default new AvailableService();