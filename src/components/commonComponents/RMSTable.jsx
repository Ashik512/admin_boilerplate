import { Card, Table } from 'antd';
import React from 'react';

const RMSTable = ({ dataSource, columns, SearchBlock }) => {
  return (
    <Card
      className={'px-4 py-4 mt-1 criclebox'}
      bordered={false}
    >
      <SearchBlock />
      <div className={'overflow-hidden'}>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          size={'small'}
          bordered
          scroll={{
            y: 'calc(100vh - 299px)',
          }}
        />
      </div>
    </Card>
  );
};

export default RMSTable;
