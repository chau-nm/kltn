import { InternalAxiosRequestConfig } from 'axios';
import { HttpService } from './http';
import { checkLogged } from '~/services/user-service';

class AccessHttpService extends HttpService{
  constructor() {
    super();
    this.axiosInstance.interceptors.request.use(
        async (config: InternalAxiosRequestConfig) => {
            const user = await checkLogged();
            console.log(user);

            return config;
        }
    );
  }
}

const http = new AccessHttpService();
export default http;