import axios from "axios";

export const authServiceAPI = axios.create({
	baseURL: 'https://dummyjson.com/auth',
	timeout: 1000,
	headers: { 'Authorization': 'foobar' }
});

