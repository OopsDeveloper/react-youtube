import axios from 'axios';

export default class MockDataClient {
    async search() {
        return axios.get('/videos/mockData1.json');
    }

    async videos() {
        return axios.get('/videos/mockData2.json');
    }
}