/*
	Author : Divya Pankaja Nanda 
	Github : https://github.com/DivyaPankajaNanda
*/

import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
	(config) => {
		const accessToken = localStorage.getItem('accessToken');

		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}

		return config;
	},
	(error) => Promise.reject(error),
);

export const getRequest = async (url: string, headers = {}) => {
	return await axiosInstance.get(url, { headers: { ...axiosInstance.defaults.headers.common, ...headers } });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postRequest = async (url: string, data: any, headers = {}) => {
	return await axiosInstance.post(url, data, { headers: { ...axiosInstance.defaults.headers.common, ...headers } });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const putRequest = async (url: string, data: any, headers = {}) => {
	return await axiosInstance.put(url, data, { headers: { ...axiosInstance.defaults.headers.common, ...headers } });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const patchRequest = async (url: string, data: any, headers = {}) => {
	return await axiosInstance.patch(url, data, { headers: { ...axiosInstance.defaults.headers.common, ...headers } });
};

export const deleteRequest = async (url: string, headers = {}) => {
	return await axiosInstance.delete(url, { headers: { ...axiosInstance.defaults.headers.common, ...headers } });
};
