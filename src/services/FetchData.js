import axios from 'axios';

const getMethod = async (url, params = {}, config = {}) => {
    try {
        const response = await axios.get(url, {
            params,
            ...config,
        });
        return response.data;
    } catch (error) {
        console.error("GET request failed:", error);
        throw error;
    }
};

const postMethod = async (url, data = {}, config = {}) => {
    try {
        const response = await axios.post(url, data, config);
        return response.data;
    } catch (error) {
        console.error("POST request failed:", error);
        throw error;
    }
};

const putMethod = async (url, data = {}, config = {}) => {
    try {
        const response = await axios.put(url, data, config);
        return response.data;
    } catch (error) {
        console.error("PUT request failed:", error);
        throw error;
    }
};

const deleteMethod = async (url, config = {}) => {
    try {
        const response = await axios.delete(url, config);
        return response.data;
    } catch (error) {
        console.error("DELETE request failed:", error);
        throw error;
    }
};

export { getMethod, postMethod, putMethod, deleteMethod };