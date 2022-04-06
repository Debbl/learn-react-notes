import React, { PureComponent } from 'react';
import axios from 'axios';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }
  async componentDidMount() {
    // this.setState({
    //   products: [...this.state.products, ...res]
    // })

    axios({
      url: "https://httpbin.org/get",
      params: {
        name: "Debbl",
        age: 18,
      },
      method: "GET",
    }).then((res) => {
      console.log(res);
    });

    axios({
      url: "https://httpbin.org/post",
      data: {
        name: "foo",
        age: 19,
      },
      method: "POST",
    }).then((res) => {
      console.log(res);
    })

    axios.get("https://httpbin.org/get", {
      params: {
        name: "bar",
        age: 17,
      }
    }).then(console.log);

    axios.post("https://httpbin.org/post", {
      name: "bax",
      age: 21,
    }).then(console.log);

    try {
      const result = await axios.get("https://httpbin.org/get", {
        params: {
          name: "bay",
          age: 21,
        }
      })
      console.log(result, '----');
    } catch(err) {
      console.log(err, '--->');
    }

    const request1 = axios.get("https://httpbin.org/get");
    const request2 = axios.get("https://httpbin.org/get");
    // Promise.all()
    axios.all([request1, request2]).then((res) => {
      console.log(res);
    })
  }
  render() {
    return (
      <div>
        <h2>App</h2>
      </div>
    );
  }
}

