import axios from 'axios';

class Rental {
    changeStatus(statusId) {
        axios
            .put(`https://localhost:5174/demo/rental/${statusId}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            })
    }
    getRentals(rentalId) {
        axios
            .get(`https://localhost:5174/demo/rental${rentalId}`)
            .catch(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    addRental() {
        axios
            .post(`https://localhost:5174/demo/rental/`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const rental = new Rental();