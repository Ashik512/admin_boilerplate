import { Link } from 'react-router-dom';

// import components
import { Button, Space } from 'antd';

// import icons
import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';

const TableAction = ({ rowInfo }) => {
  return (
    <>
      <Space size={'small'}>
        <Button
          title="Edit this record"
          type={'primary'}
          icon={<EyeOutlined />}
        />
        <Link
        //  to={'update/' + id}
        >
          <Button
            title="Edit this record"
            type={'primary'}
            icon={<EditOutlined />}
          />
        </Link>
        <Button
          title="Edit this record"
          type={'primary'}
          icon={<DeleteOutlined />}
          danger
        />
      </Space>
    </>
  );
};

export default TableAction;
