import axios from "axios";

class Client {
    getClient(clientId) {
        return axios
            .get(`http://localhost:5174/demo/client/${clientId}`)
            .then((response) => {
                console.log(response)
                return response.data;
            })
            .catch(error => {
                console.log(error);
            })
    }
    deleteClient(clientId) {
        axios
            .delete(`http://130.193.44.220:5174/demo/client/${clientId}`)
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
            .post('http://130.193.44.220:5174/demo/client/create', {
                phone: phone,
                name: name,
                surname: surname,
                patronymic: patronymic,
                issuedDate: issuedDate,
                issued: issued,
                passportSeries: passportSeries,
                passportNumber: passportNumber,
            })
            .then(response => {
                console.log(response)
            })
            // .catch(error => {
            //     console.error(error);
            // })
    }
}

export const client = new Client();