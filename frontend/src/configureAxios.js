import axios from 'axios';

const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

const setBasePath = basePath => {
  axios.interceptors.request.use(config => {
    // Concatenate base path if not an absolute URL
    if (!isAbsoluteURLRegex.test(config.url)) {
      config.url = basePath + config.url;
    }
    return config;
  });
};

export { setBasePath };
