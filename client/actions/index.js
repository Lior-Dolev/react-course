import axios from 'axios';

export const REQUEST_ADDED = 'REQUEST_ADDED';

export function addRequest(request) {
    return {
        type: REQUEST_ADDED,
        payload: request
    };
}

export function fetchData() {
    const request = axios.get("url");

    return {
        type: "FETCH_DATA",
        payload: request
    }
}