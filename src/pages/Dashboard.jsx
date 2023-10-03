import { Card, Col, Row } from 'antd';
import React from 'react';

const Dashboard = () => {
  return (
    <div className={'p-3 space-y-2 mt-1'}>
      <Row gutter={16}>
        <Col md={6}>
          <Card className="bg-red-300 text-white">
            <div className="flex justify-between">
              <span>Subject</span>
              <span>10</span>
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-orange-300 text-white ">
            <div className="flex justify-between">
              <span>Topic</span>
              <span>20</span>
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-slate-300 text-white">
            <div className="flex justify-between">
              <span>Question</span>
              <span>30</span>
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-blue-300 text-white">
            <div className="flex justify-between">
              <span>Candidates</span>
              <span>90</span>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
