import axios from 'axios';

const APPOINTMENT_API_BASE_URL = "http://localhost:8080/Vaccine/appointment/selectAll"
class AppointmentService{

    getAppointments(){
        return axios.get(APPOINTMENT_API_BASE_URL);
    }
    createAppointment(appointment){
        return axios.post('http://localhost:8080/Vaccine/appointment/bookAppointment',appointment);
    }
    deleteAppointment(appointmentId){
        return axios.delete('http://localhost:8080/Vaccine/appointment/cancelAppointment'+'/'+ appointmentId);
    }
}
export default new AppointmentService()