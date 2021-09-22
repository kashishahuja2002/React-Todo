import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:3000/'
});
instance.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("!error: ", !error);
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  instance.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

const httpServiceExports = {
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  request: instance.request,
  patch: instance.patch,
  setJwt,
};

export default httpServiceExports;





