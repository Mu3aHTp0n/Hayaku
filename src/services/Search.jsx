import axios from "axios";

class Search {
    async ClientSearch(clientName) {
        try {
            const response = await axios.get(`https://hayaku.ru/demo/client?page=0&client=${clientName}`);
            return response.data?.clientInfoDto; // Возвращаем данные
        } catch (error) {
            console.log(error);
            return []; // Возвращаем пустой массив в случае ошибки
        }
    }
    async FilmsSearch(title) {
        try {
            const response = await axios.get(`https://hayaku.ru/demo/cassette?page=0&cassette=${title}`);
            return response.data.cassetteList;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

export const search = new Search()