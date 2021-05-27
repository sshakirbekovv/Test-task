import { observable, action, decorate } from 'mobx';
import { api_url } from './env';
import axios from 'axios';

class MinutesStore {
    minutesResponse: any;

    loadMinutes() {
        const params: any = {
            project_id: '2',
        }    

        axios.get(`${api_url}test_minutes`, {
            params
        }).then((res) => {
                this.minutesResponse = res.data;
            })
            .catch((err) => {
                console.error("Load Minutes Server Error", err);
        });
    }

    constructor(){
        this.minutesResponse = '';
        this.loadMinutes();
    }
}

decorate(MinutesStore, {
    minutesResponse: observable,
    loadMinutes: action,
});

export default new MinutesStore() as MinutesStore;