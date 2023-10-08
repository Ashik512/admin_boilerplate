import React from 'react';
import PageHeaderBlock from '../commonComponents/PageHeaderBlock';
import RMSTable from '../commonComponents/RMSTable';
import TableAction from '../commonComponents/TableAction';
import SearchSubjectBlock from './SearchSubjectBlock';

const SubjectTable = () => {
  const columns = [
    {
      title: 'Subject Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Actions',
      key: 'action',
      render: (record) => <TableAction rowInfo={record} />,
    },
  ];

  const dataSource = [
    {
      key: '1',
      name: 'Bangla',
    },
    {
      key: '2',
      name: 'English',
    },
  ];

  return (
    <>
      <PageHeaderBlock
        Title={['Subject List']}
        parent="/subjects"
        isAddBtn={true}
      />
      <RMSTable
        columns={columns}
        dataSource={dataSource}
        SearchBlock={SearchSubjectBlock}
      />
    </>
  );
};

export default SubjectTable;
