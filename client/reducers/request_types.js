import _ from 'lodash';
import {REQUEST_ADDED} from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case REQUEST_ADDED:
            return _.concat(state,action.payload);
    }

    return state;
}