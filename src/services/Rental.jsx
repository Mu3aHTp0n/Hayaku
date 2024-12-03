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
    async getRentals(rentalId) {
        try {
            const response = await axios.get(`http://130.193.44.220:5174/demo/rental/${rentalId}`);
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 404) {
                alert('Прокат пуст');
                return null;
            }
            throw error; // Обработка других ошибок
        }
    }
    async addRental(clientId, cassetteId) {
        axios
            .post('http://130.193.44.220:5174/demo/rental', {
                clientId: clientId,
                cassetteId: cassetteId,
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const rental = new Rental();