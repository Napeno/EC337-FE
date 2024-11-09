import axios from 'axios';

export const createPayment = async (requestBody = {}) => {
    const url = `https://api-merchant.payos.vn/v2/payment-requests`;
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