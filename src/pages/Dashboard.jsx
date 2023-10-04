import { Card, Col, Row } from 'antd';
import React from 'react';

const Dashboard = () => {
  return (
    <>
      <div className={'p-2'}>
        <Row gutter={16}>
          <Col xs={24} md={6} className='sm:mb-3'>
            <Card className="text-white" style={{background: '#4908FA'}}>
              <div className="flex justify-between">
                <span>Subject</span>
                <span>10</span>
              </div>
            </Card>
          </Col>
          <Col xs={24} md={6} className='sm:mb-3'>
            <Card className="text-white" style={{background: '#06D6A0'}}>
              <div className="flex justify-between">
                <span>Topic</span>
                <span>20</span>
              </div>
            </Card>
          </Col>
          <Col xs={24} md={6} className='sm:mb-3'>
            <Card className="text-white" style={{background: '#F2385A'}}>
              <div className="flex justify-between">
                <span>Question</span>
                <span>30</span>
              </div>
            </Card>
          </Col>
          <Col xs={24} md={6} className='sm:mb-3'>
            <Card className="text-white" style={{background: '#444444'}}>
              <div className="flex justify-between">
                <span>Candidates</span>
                <span>90</span>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
