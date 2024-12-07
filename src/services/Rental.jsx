import axios from 'axios';

class Rental {
    changeStatus(statusId) {
        axios
            .put(`https://hayaku.ru/demo/rental/${statusId}`)
            .catch(error => {
                console.log(error);
            })
    }
    async getRentals(rentalId) {
        try {
            const response = await axios.get(`https://hayaku.ru/demo/rental/${rentalId}`);
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
            .post('https://hayaku.ru/demo/rental', {
                clientId: clientId,
                cassetteId: cassetteId,
            })
            .then(() => {
                console.log('Прокат успешно добавлен');
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const rental = new Rental();