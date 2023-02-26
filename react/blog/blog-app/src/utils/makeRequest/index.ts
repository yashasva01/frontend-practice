import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndPoints';
import { NavigateFunction } from 'react-router-dom';

const makeRequest = async (
  apiEndPoint: { url: string; method: string },
  dynamicConfig = {},
  navigate?: NavigateFunction,
) => {
  const requestDetails = {
    baseURL: BACKEND_URL,
    url: apiEndPoint.url,
    method: apiEndPoint.method,
    ...dynamicConfig,
  };
  try {
    const { data } = await axios(requestDetails);
    return data;
  } catch (error: any) {
    if (navigate) {
      if (error.response?.data?.statusCode) {
        navigate(`/error/${error.response.data.statusCode}`);
      } else {
        navigate('/error');
      }
    }
  }
};

export default makeRequest;
