// import components
import { Button, Card, Form, Input, InputNumber } from 'antd';
import { useParams } from 'react-router-dom';
import PageHeaderBlock from '../commonComponents/PageHeaderBlock';

// import action

// import aircraft type config

function SubjectForm() {
  const { id } = useParams();

  const inputField = (type) => {
    const _components = {
      text: (
        <Input
          type={'text'}
          placeholder="Enter here!"
        />
      ),
      textarea: (
        <Input.TextArea
          type={'text'}
          placeholder="Enter details here!"
        />
      ),
      password: (
        <Input.Password
          type={'password'}
          placeholder="Enter password here!"
        />
      ),
      number: (
        <InputNumber
          type={'number'}
          placeholder="Enter number here!"
        />
      ),
      email: (
        <Input
          type={'email'}
          placeholder="Enter your email here!"
        />
      ),
    };

    return _components[type] || null;
  };

  return (
    <>
      <PageHeaderBlock
        Title={['Subject List']}
        parent="/subjects"
      />
      <Card className={'px-4 py-4 mt-1 criclebox'}>
        <Form
          validateTrigger={'onChange'}
          // form={form}
          // onFinish={_onFinish}
          scrollToFirstError
          layout={'vertical'}
          autoComplete={'off'}
        >
          <div className={'grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:p-3'}>
            {subjectFields?.map((field) => (
              <Form.Item
                key={field.id}
                name={field.name}
                label={field.label}
                rules={field.rules}
                dependencies={field.dependencies ?? []}
              >
                {inputField(field?.type)}
              </Form.Item>
            ))}
          </div>
          <Form.Item style={{ marginLeft: '10px' }}>
            <Button
              htmlType={'submit'}
              type={'primary'}
              // loading={isLoadingAddUser}
              style={{ margin: '5px' }}
            >
              {id ? 'Update' : 'Submit'}
            </Button>
            {!id && (
              <Button
                htmlType={'reset'}
                // onClick={() => _onReset}
              >
                {'Reset'}
              </Button>
            )}
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}

// export add edit form
export default SubjectForm;

// define aircraft type field
const subjectFields = [
  {
    id: 1,
    name: 'subject',
    label: 'Subject Name',
    type: 'text',
    rules: [
      {
        type: 'text',
        message: 'The input is not valid',
      },
      {
        required: true,
        message: 'Please input subject name!',
      },
    ],
  },
];
