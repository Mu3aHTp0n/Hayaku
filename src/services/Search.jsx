import axios from "axios";

class Search {
    async ClientSearch(clientName) {
        try {
            const response = await axios.get(`http://localhost:5174/demo/client?page=0&client=${clientName}`);
            console.log(response.data.clientInfoDto);
            return response.data.clientInfoDto; // Возвращаем данные
        } catch (error) {
            console.error(error);
            return []; // Возвращаем пустой массив в случае ошибки
        }
    }
    async FilmsSearch(title) {
         await axios
            .get(`http://localhost:5174/demo/client?page=0&cassette=${title}`)
            .then(res => {
                console.log(res)
                return res.data
            })
            .catch(err => {
                console.error(err)
            })
    }
}

export const search = new Search()