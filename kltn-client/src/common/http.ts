import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ApiUrlConstants } from '~/constants/apiUrlConstants';

export class HttpService {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
        baseURL: ApiUrlConstants.BASE_URL,
        withCredentials: true
    });

    this.configRequestInterceptor();
    this.configResponseInterceptor();
  }

  private configRequestInterceptor(): void {
    let accessToken = localStorage.getItem('access_token');

    this.axiosInstance.interceptors.request.use(
      (config : InternalAxiosRequestConfig) => {
        if (accessToken){
          config.headers['Authorization'] = 'Bearer ' + accessToken;
        }
        return config;
      }
    )
  }

  private configResponseInterceptor(): void{
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: any) => {
        if (error.response){
          const status = error.response.status;

          switch(status){
            case 401 || 403:
              localStorage.clear();
              break;
            default:
              throw new Error('Error: ' + error.message);
          }

        }else if (error.request) {
          throw new Error('No response received:' + error.request);
        }else{
          throw new Error('Error: ' + error.message);
        }

        return Promise.reject(error);
      }
    )
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