import axios from 'axios';

export const getStaticQR = async (requestBody = {}) => {
    const url = `https://api.vietqr.io/v2/generate`;
    try {
        const options = {
            method: 'POST',
            url: url,
            data: requestBody,
            headers: {
                'x-client-id': `92582a66-e1e4-4a0b-b150-89a5b6b7d27d`,  // Replace with your actual client ID
                'x-api-key': `05924d56-78d5-47a8-a606-dcb47d1ad671`,
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