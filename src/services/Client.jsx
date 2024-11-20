import axios from "axios";

class Client {
    getClient(clientId) {
        return axios
            .get(`http://localhost:5174/demo/client/${clientId}`)
            .then((response) => {
                console.log(response)
                return response;
            })
            .catch(error => {
                console.log(error);
            })
    }
    deleteClient(clientId) {
        axios
            .delete(`http://localhost:5174/demo/client/${clientId}`)
            .then((response) => {
                console.log(response)
                response.status === 200 ? alert('Клиент успешно удалён') : null
            })
            .catch(error => {
                console.error(error);
            })
    }
    createClient(surname, name, patronymic, phone, passportSeries, passportNumber, issued, issuedDate) {
        axios
            .post('http://localhost:5174/demo/client/create', {
                body: JSON.stringify({
                    surname: surname,
                    name: name,
                    patronymic: patronymic,
                    phone: phone,
                    passportSeries: passportSeries,
                    passportNumber: passportNumber,
                    issued: issued,
                    issuedDate: issuedDate,
                })
            })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.error(error);
            })
    }
}

export const client = new Client();