import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

// import components
import { BackwardOutlined, HomeFilled, PlusOutlined } from '@ant-design/icons';
import { Breadcrumb, Button } from 'antd';

const PageHeaderBlock = ({ Title, parent, isAddBtn = false }) => {
  const [HeaderItem, setHeaderItem] = useState([]);

  const { pathname } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    let newTitle = Title;
    if (newTitle?.length === 2 && !pathname.toString()?.includes('update')) {
      newTitle.pop();
    }
    if (newTitle?.length === 1 && pathname.toString()?.includes('add')) {
      newTitle.push('Add');
    } else if (
      newTitle?.length === 1 &&
      pathname.toString()?.includes('update')
    ) {
      newTitle.push('Edit');
    }
    setHeaderItem(newTitle);
  }, [pathname, Title]);

  // Add and Back button action handler
  const OnClickHandler = (buttonTitle) => {
    if (buttonTitle === 'Add') {
      const newValue = HeaderItem;
      newValue?.length < 2 && newValue.push('Add');
      setHeaderItem(newValue);
    } else if (buttonTitle === 'Back') {
      const newValue = HeaderItem;
      newValue?.length > 1 && newValue.pop();
      setHeaderItem(newValue);
    }
  };

  // for remove route item from header route list
  const HeaderItemHandler = (item) => {
    if (item !== 'Add' && item !== 'Edit') {
      const newValue = HeaderItem;
      newValue?.length > 1 && newValue.pop();
      setHeaderItem([...newValue]);
    }
  };

  return (
    <section className={'p-2'}>
      <div className={'px-1'}>
        <div className={'flex justify-between items-center'}>
          <Breadcrumb>
            <span className={'font-bold'}>
              <Link to={'/'}>
                <HomeFilled />
              </Link>
              <span className="mx-1">/</span>
            </span>
            {HeaderItem?.map((item, index) => (
              <Breadcrumb.Item key={index}>
                <Link
                  to={
                    item === 'Add'
                      ? `${parent + '/add'}`
                      : item === 'Edit'
                      ? `${parent + '/update/' + id}`
                      : `${parent}`
                  }
                  onClick={() => HeaderItemHandler(item)}
                >
                  <span className=" font-bold">{item}</span>
                </Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <Link to={isAddBtn ? 'add' : -1}>
            <Button
              title={isAddBtn ? 'Add' : 'Back'}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#1677ff',
                color: 'white',
                fontWeight: 'bold',
                minWidth: '85px',
              }}
              icon={isAddBtn ? <PlusOutlined /> : <BackwardOutlined />}
              onClick={() => OnClickHandler(isAddBtn ? 'Add' : 'Back')}
            >
              {isAddBtn ? 'Add' : 'Back'}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageHeaderBlock;
