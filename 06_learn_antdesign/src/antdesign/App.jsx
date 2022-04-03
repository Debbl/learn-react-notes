import React, { PureComponent } from 'react';
import { Button, Space, DatePicker } from 'antd';
import {PoweroffOutlined} from '@ant-design/icons';
import moment from 'moment';

export default class App02 extends PureComponent {
  render() {
    const loadings = true;
    return (
      <>
        <Space style={{ width: '100%' }}>
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" size="small" loading>
            Loading
          </Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading />
        </Space>

        <Space style={{ width: '100%' }}>
          <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[1]}
            onClick={() => this.enterLoading(1)}
          >
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[2]}
            onClick={() => this.enterLoading(2)}
          />
        </Space>
        <DatePicker defaultValue={moment('2015-06-06', 'YYYY-MM-DD')} allowClear={false} />
      </>
    );
  }
}
