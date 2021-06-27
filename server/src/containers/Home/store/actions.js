import axios from 'axios';
import { CHANGE_LIST } from './contants';

const changeList = (list) => ({
    type: CHANGE_LIST,
    list
})

export const getHomeList = () => {
    return (dispatch) => {
        console.log('getHomeList');

        // return axios.get

        let list = [{
            id: 1,
            title: '123'
        }];

        dispatch(changeList(list));
    }
}