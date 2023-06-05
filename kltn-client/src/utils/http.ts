import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { APIURL } from '~/constants/api-url';

export class HttpService {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
        baseURL: APIURL.BASE_URL,
        withCredentials: true
    });
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.get(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.post(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.put(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response: AxiosResponse<T> = await this.axiosInstance.delete(url, config);
    return response.data;
  }
}

const http = new HttpService();
export default http;