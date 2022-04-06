const DEV_BASEURL = 'https://httpbin.org';

const PRO_BASEURL = 'https://httpbin.org';

export const BASE_URL =
  process.env.NODE_ENV === 'development' ? DEV_BASEURL : PRO_BASEURL;
export const TIMEOUT = 1000;
