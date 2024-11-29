import axios from 'axios';

class Rental {
    changeStatus(statusId) {
        axios
            .put(`http://130.193.44.220:5174/demo/rental/${statusId}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
    getRentals(rentalId) {
        axios
            .get(`http://130.193.44.220:5174/demo/rental${rentalId}`)
            .catch(response => {
                console.log(response);
                return response;
            })
            .catch(error => {
                console.log(error);
            })
    }
    async addRental(clientId, cassetteId) {
        try {
            const response = await axios.post('http://130.193.44.220:5174/demo/rental', {
                clientId: clientId,
                cassetteId: cassetteId,
            });
            console.log('Response:', response);
            // return response.data
        } catch (error) {
            console.error('Error sending POST request:', error);
        }
    }
}

export const rental = new Rental();