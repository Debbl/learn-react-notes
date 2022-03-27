import React, { Component } from 'react';

// Header
function Header() {
  return <h2>Header组件</h2>
}

// Main
function Main() {
  return (
    <div>
      <h2>Main组件</h2>
      <Banner />
      <ProductList />
    </div>
  )
}

// Banner
function Banner() {
  return <h2>Banner组件</h2>
}
// ProductList
function ProductList() {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

// Footer
function Footer() {
  return <h2>Footer组件</h2>
}

class App0301 extends Component {
  render() {
    return (
      <div>
        <h2>App</h2>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App0301;