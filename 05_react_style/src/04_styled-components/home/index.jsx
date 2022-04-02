import React, { PureComponent } from 'react';
import styled from 'styled-components';

/**
 * & 代表的是本元素
 */
const HomeWrapper = styled.div`
  font-size: 10px;
  color: red;
  .banner {
    background-color: burlywood;
  }
  &:hover {
    color: green;
  }
`
const TitleWrapper = styled.h2`
  text-decoration: underline;
  color: ${(props) => props.theme.themeColor};
  font-size: ${(props) => props.theme.fontSize};
`

export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <TitleWrapper>Home</TitleWrapper>
        <h2 className='banner'>我是轮播图</h2>
      </HomeWrapper>
    );
  }
}
