import {combineReducers} from 'redux';
import RequestTypes from './request_types';

const rootReducer = combineReducers({
    requestTypes : RequestTypes
})

export default rootReducer;