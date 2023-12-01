import { AxiosService } from '../axios/axiosService'

export default class Product {
  private axiosService: AxiosService<any, any> = new AxiosService<any, any>()

  public async getProducts (url: string) {
    return await this.axiosService.getData(url)
  }
}
