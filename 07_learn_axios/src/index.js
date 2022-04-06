import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';
import instance from './services';

axios.defaults.baseURL = 'https://httpbin.org';
axios.defaults.timeout = 5000;
axios.defaults.headers.common['token'] = 'token---';
// axios.defaults.headers.post["content-type"] = "application/text";

instance.get('https://httpbin.org/get').then((res) => {
  console.log(res, 'OK');
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
