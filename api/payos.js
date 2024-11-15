import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const createPayment = async (requestBody = {}) => {
    const url = `${process.env.EXPO_PUBLIC_PAYOS_URL}`;
    try {
        const options = {
            method: 'POST',
            url: url,
            data: requestBody,
            headers: {
                'x-client-id': process.env.EXPO_PUBLIC_CLIENT_OS,
                'x-api-key': process.env.EXPO_PUBLIC_API_KEY_OS,
                'Content-Type': 'application/json',
            },
        };
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error', error);
        return [];
    }
};

export const getPaymentStatus = async (id) => {
    const url = `${process.env.EXPO_PUBLIC_PAYOS_URL}/${id}`;
    try {
        const options = {
            method: 'GET',
            url: url,
            headers: {
                'x-client-id': process.env.EXPO_PUBLIC_CLIENT_OS,
                'x-api-key': process.env.EXPO_PUBLIC_API_KEY_OS,
                'Content-Type': 'application/json',
            },
        };
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error getting:', error.response?.data || error.message);
        return null; // Return null to indicate an error occurred
    }
};

export const signInPayOS = async (requestBody = {}) => {
    const url = `${process.env.EXPO_PUBLIC_PAYOS_SIGNIN}`;
    try {
        const options = {
            method: 'POST',
            url: url,
            data: requestBody,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error', error);
        return [];
    }
};

export const getListTransaction = async () => {
    const url = `https://api-app.payos.vn/organizations/95b5a2979e7d11ef80840242ac110002/statistics/payment-link?page=0&pageSize=20`;
    try {
        const authToken = await AsyncStorage.getItem('authToken');
        const options = {
            method: 'GET',
            url: url,
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
        };
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error getting:', error.response?.data || error.message);
        return null; // Return null to indicate an error occurred
    }
};
