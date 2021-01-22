import axios from "axios";

const API_URL = 'https://marcelo-dsdeliver.herokuapp.com';

export function fetchOrders() {
    return axios(`${API_URL}/orders`);
}