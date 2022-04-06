import React, { PureComponent } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import './CSSTransition.css';

const { Meta } = Card;

export default class CSSTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }
  render() {
    const { isShow } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ isShow: !isShow })}>
          {isShow ? '隐藏' : '显示'}
        </button>
        <CSSTransition
          in={isShow}
          classNames="card"
          timeout={300}
          unmountOnExit={true}
          appear={true}
          onEnter={(el) => console.log("进入状态----------")}
          onEntering={() => console.log("正在进入")}
          onEntered={() => console.log("进入完成")}
          onExit={() => console.log("退出状态-------------")}
          onExiting={() => console.log("正在退出")}
          onExited={() => console.log("退出完成")}
        >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    );
  }
}
