import { FilterOutlined, RollbackOutlined } from '@ant-design/icons';
import { Col, Form, Input, Row, Space } from 'antd';
import React from 'react';
import RMSButton from '../buttons/RMSButton';

const SearchSubjectBlock = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <Form onFinish={onFinish}>
      <Row gutter={20}>
        <Col
          xs={24}
          md={12}
          lg={8}
        >
          <Form.Item
            // label="Module"
            name="query"
          >
            <Input placeholder="Enter subject name " />
          </Form.Item>
        </Col>

        <Col
          xs={24}
          md={12}
          lg={4}
        >
          <Form.Item>
            <Space>
              <RMSButton
                size="middle"
                type="primary"
                htmlType="submit"
              >
                <FilterOutlined /> Filter
              </RMSButton>
              <RMSButton
                size="middle"
                type="primary"
                htmlType="button"
                // onClick={resetFilter}
              >
                <RollbackOutlined /> Reset
              </RMSButton>
            </Space>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchSubjectBlock;
