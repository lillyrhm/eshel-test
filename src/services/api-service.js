import axios from "axios";

function createAxiosRequest(method, endPoint, data = {}, headers) {
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
  get(endPoint, data, headers) {
    return createAxiosRequest("get", endPoint, data, headers);
  },

  post(endPoint, data, headers) {
    return createAxiosRequest("post", endPoint, data, headers);
  },
};