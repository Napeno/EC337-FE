import axios from 'axios';

export const fetchProduct = async () => {
    const url = `${process.env.REACT_APP_API_URL}/api/products`;
    try {
        const options = {
            method: 'GET',
            url: url,
        };
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        return [];
    }
};

export const getProductById = async (id) => {
    const url = `${process.env.REACT_APP_API_URL}/api/products/get-product-by-id/${id}`;
    try {
        const response = await axios.get(url, {
        });
        return response.data;
    } catch (error) {
        console.error('Error getting product:', error.response?.data || error.message);
        return null;
    }
};

export const getProductByBarcode = async (barcode) => {
    const url = `${process.env.EXPO_PUBLIC_API_URL}/api/products/get-product-by-barcode/${barcode}`;
    try {
        console.log(url)
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error getting:', error.response?.data || error.message);
        return null; // Return null to indicate an error occurred
    }
};
