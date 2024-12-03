import axios from 'axios';

class Cassette {

    getCassette(cassetteId) {
         return axios
            .get(`http://130.193.44.220:5174/demo/cassette/${cassetteId}`)
            .then((response) => {
                return response.data;
            })
            .catch(error => {
                console.log(error)
            })
    }
    async deleteCassette(cassetteId) {
        await axios
            .delete(`http://130.193.44.220:5174/demo/cassette/${cassetteId}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            })
    }
    async createCassette({title, desc, file}) {
        const formData = new FormData();
        formData.append('name', title);
        formData.append('description', desc);
        formData.append('file', file);
        console.log('Отправляемые данные: ', formData)
        try {
            const response = await axios.post('http://130.193.44.220:5174/demo/cassette', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Success:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error uploading data:', error);
            throw error;
        }
    }
}

export const cassette = new Cassette();