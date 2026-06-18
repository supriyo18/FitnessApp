import axios from 'axios';

const baseurl = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url, params) => {
    console.log('apiCall');

    try {
        const options = {
            method: 'GET',
            params,
            url,
            headers: {
                'x-rapidapi-key': '1c0fc11dfbmsha8931aca0d57d43p1007d5jsn6df6558e3f52',
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        };
        const response = await axios.request(options);
        console.log('Full Response:', response);
        return response.data; // Ensure that you return the data from the response
    } catch (error) {
        console.error("Error during API call:", error);
        throw error;
    }
}

export const fetchExcerciseBodyPart = async (bodyPart) => {
    console.log('fetchExcerciseBodyPart');
    try {
        console.log('Before API CALL');
        const data = await apiCall(`${baseurl}/exercises/bodyPart/${bodyPart}`);
        console.log('After API CALL:', data);
        return data;
    } catch (error) {
        console.error("Error fetching exercises for body part:", error);
        throw error;
    }
}
