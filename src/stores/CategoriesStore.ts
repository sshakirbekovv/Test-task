import { observable, action, decorate } from 'mobx';
import { api_url } from './env';
import axios from 'axios';

class CategoriesStore {
    categoriesResponse: any;

    loadCategories() {
        const params: any = {
            project_id: '2',
        }    
        
        axios.get(`${api_url}test_categories`, {
            params
        }).then((res) => {
                this.categoriesResponse = res.data;
            })
            .catch((err) => {
                console.error("Load Categories Server Error", err);
        });
    }

    constructor(){
        this.categoriesResponse = '';
        this.loadCategories();
    }
}

decorate(CategoriesStore, {
    categoriesResponse: observable,
    loadCategories: action,
});

export default new CategoriesStore() as CategoriesStore;