import axios from 'axios';

class Cassette {
    async getCassette(cassetteId) {
        await axios
            .get(`http://localhost:5174/demo/client/${cassetteId}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            })
    }
    async deleteCassette(cassetteId) {
        await axios
            .delete(`http://localhost:5174/demo/client/${cassetteId}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const cassette = new Cassette();