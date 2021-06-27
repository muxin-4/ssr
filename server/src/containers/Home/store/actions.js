import axios from 'axios';
import { CHANGE_LIST } from './contants';
import clientAxios from '../../../client/request';
import serverAxios from '../../../server/request';

const changeList = (list) => ({
    type: CHANGE_LIST,
    list
})

export const getHomeList = (server) => {
    return (dispatch) => {
        console.log('getHomeList');

        let requset = server ? serverAxios : clientAxios;

        // return requset.get(
        //     'api/new.json'
        // ).then(res => {


        let list = [{
            id: 1,
            title: '123'
        }];

        dispatch(changeList(list));
        // });


    }
}