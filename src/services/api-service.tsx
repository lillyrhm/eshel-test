import axios, { AxiosRequestHeaders } from "axios";

function createAxiosRequest(method: string, endPoint: any, data = {}, headers: AxiosRequestHeaders | undefined) {
  return axios({
    method,
    baseURL: "https://jsonplaceholder.typicode.com/",
    url: endPoint,
    data,
    headers: {
      ...headers,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(({ data, status }) => {
      if (status >= 200 && status <= 300) return data;
      else throw endPoint;
    })
    .catch((e) => e);
}

export default {
  get(endPoint: string, data: {} | undefined, headers: undefined) {
    return createAxiosRequest("get", endPoint, data, headers);
  },

  post(endPoint: any, data: {} | undefined, headers: any) {
    return createAxiosRequest("post", endPoint, data, headers);
  },
};