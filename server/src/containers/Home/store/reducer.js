import { CHANGE_LIST } from './contants';

const defaultValue = {
    name: 'wgy',
    newsList: []
};

export default (state = defaultValue, action) => {
    switch (action.type) {
        case CHANGE_LIST:
            return {
                ...state,
                newsList: action.list
            }
        default:
            return state;
    }
}