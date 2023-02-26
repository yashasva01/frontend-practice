import makeRequest from '..';
import axios from 'axios';
import { mockBlogPostData } from '../../../mocks/blogPosts';
import { GET_BLOG_DATA } from '../../../constants/apiEndPoints';
import { BACKEND_URL, UPDATE_BLOG_DATA } from './../../../constants/apiEndPoints';

jest.mock('axios');

describe('makeRequest', () => {
  it('should make api call when only api endpoint is passed', async () => {
    const mockedAxios = axios as jest.MockedFunction<typeof axios>;
    mockedAxios.mockResolvedValueOnce({
      data: mockBlogPostData,
    });
    expect(mockedAxios).not.toHaveBeenCalled();
    const response = await makeRequest(GET_BLOG_DATA);
    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(mockedAxios).toHaveBeenCalledWith({
      baseURL: BACKEND_URL,
      url: GET_BLOG_DATA.url,
      method: 'get',
    });
    expect(response).toEqual(mockBlogPostData);
  });
  it('should give correct response when api is called', async () => {
    const mockedAxios = axios as jest.MockedFunction<typeof axios>;
    mockedAxios.mockResolvedValueOnce({
      data: {
        data: {
          claps: 10,
        },
      },
    });
    expect(mockedAxios).not.toHaveBeenCalled();
    const response = await makeRequest(UPDATE_BLOG_DATA(1), { data: { claps: 10 } });
    expect(mockedAxios).toHaveBeenCalledTimes(1);
    expect(response).toEqual({ data: { claps: 10 } });
  });
  it('should navigate to the error page when api call fails from server end', async () => {
    const mockedAxios = axios as jest.MockedFunction<typeof axios>;
    mockedAxios.mockRejectedValueOnce({
      response: {
        data: {
          statusCode: 404,
        },
      },
    });
    expect(mockedAxios).not.toHaveBeenCalled();
    const mockNavigate = jest.fn();
    await makeRequest(GET_BLOG_DATA, {}, mockNavigate);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/error/404');
  });
  it('should navigate to the error page when api call fails', async () => {
    const mockedAxios = axios as jest.MockedFunction<typeof axios>;
    mockedAxios.mockRejectedValueOnce({ response: {} });
    const mockNavigate = jest.fn();
    await makeRequest(GET_BLOG_DATA, {}, mockNavigate);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/error');
  });
});
