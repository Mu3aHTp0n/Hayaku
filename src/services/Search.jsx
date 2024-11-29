import axios from "axios";

class Search {
    async ClientSearch(clientName) {
        try {
            const response = await axios.get(`http://130.193.44.220:5174/demo/client?page=0&client=${clientName}`);
            console.log(response.data);
            return response.data.clientInfoDto; // Возвращаем данные
        } catch (error) {
            console.log(error);
            return []; // Возвращаем пустой массив в случае ошибки
        }
    }
    async FilmsSearch(title) {
        try {
            const response = await axios.get(`http://130.193.44.220:5174/demo/cassette?page=0&cassette=${title}`);
            return response.data.cassetteList;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

export const search = new Search()