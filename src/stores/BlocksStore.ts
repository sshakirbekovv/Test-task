import { observable, action, decorate } from 'mobx';
import { api_url } from './env';
import axios from 'axios';

class BlocksStore {
    blocksResponse: any;

    loadBlocks() {
        const params: any = {
            project_id: '2',
        }    

        axios.get(`${api_url}test_blocks`, {
            params
        }).then((res) => {
                this.blocksResponse = res.data;
            })
            .catch((err) => {
                console.error("Load Blocks Server Error", err);
        });
    }
    
    constructor(){
        this.blocksResponse = '';
        this.loadBlocks();
    }
}

decorate(BlocksStore, {
    blocksResponse: observable,
    loadBlocks: action,
});

export default new BlocksStore() as BlocksStore;