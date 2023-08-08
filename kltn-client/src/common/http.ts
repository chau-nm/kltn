import { message } from 'antd';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ApiUrlConstants } from '~/constants/apiUrlConstants';

class HttpService {
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
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        let accessToken = localStorage.getItem('access_token');

        if (accessToken) {
          config.headers['Authorization'] = 'Bearer ' + accessToken;
        }
        return config;
      }
    )
  }

  private configResponseInterceptor(): void {
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      async (error: any) => {
        if (error.response) {
          const status = error.response.status;

          switch (status) {
            case 403 || 401:
              const accessToken = localStorage.getItem('access_token');
              if (accessToken) {
                const refreshedToken = await this.refreshToken();
                if (!refreshedToken) {
                  localStorage.clear();
                }
                message.error("Hết phiên đăng nhập");
              }
              break;
            default:
              throw new Error('Error: ' + error.message);
          }

        } else if (error.request) {
          throw new Error('No response received:' + error.request);
        } else {
          throw new Error('Error: ' + error.message);
        }

        return Promise.reject(error);
      }
    )
  }

  private async refreshToken(): Promise<boolean> {
    let refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) {
      return false;
    }
    const userResponse: ResponseModel<UserModel> = await this.get(`${ApiUrlConstants.REFRESH_TOKEN}?refreshToken=${refreshToken}`);
    const user = userResponse.data;
    if (!user) {
      return false;
    }
    localStorage.setItem('access_token', user.accessToken as string);
    localStorage.setItem('refresh_token', user.refreshToken as string);
    return true;
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