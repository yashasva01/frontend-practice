import axios from 'axios';
//import Header from '../../components/Header';
import { BACKEND_URL } from '../../constants/beEndpoints';

const makeRequest = async(apiEndPoint, dynamicConfig = {}) => {
    const requestDetails = {
        baseURL: BACKEND_URL,
        url: apiEndPoint.url,
        method: apiEndPoint.method,
        headers: {'Authorization': 'Bearer QWlzaHdhcnlhIE4='},
        ...dynamicConfig,

      };
    try {
        const response = await axios(requestDetails);
        //console.log(response.data);
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export default makeRequest;