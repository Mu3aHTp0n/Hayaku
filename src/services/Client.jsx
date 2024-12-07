import axios from "axios";

class Client {
    getClient(clientId) {
        return axios
            .get(`https://hayaku.ru/demo/client/${clientId}`)
            .then((response) => {
                return response.data;
            })
            .catch(error => {
                console.error(error);
            })
    }
    async deleteClient(clientId) {
        axios
            .delete(`https://hayaku.ru/demo/client/${clientId}`)
            .then((response) => {
                response.status === 200 ? alert('Клиент успешно удалён') : null
            })
            .catch(error => {
                console.error(error);
            })
    }
    async createClient(surname, name, patronymic, phone, passportSeries, passportNumber, issued, issuedDate) {
        axios
            .post('https://hayaku.ru/demo/client/create', {
                phone: phone,
                name: name,
                surname: surname,
                patronymic: patronymic,
                issuedDate: issuedDate,
                issued: issued,
                passportSeries: passportSeries,
                passportNumber: passportNumber,
            })
            .then(() => {
                console.log("Клиент успешно добавлен")

            })
            // .catch(error => {
            //     console.error(error);
            // })
    }
}

export const client = new Client();