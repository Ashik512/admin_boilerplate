import { Form, useNavigate, useParams } from 'react-router-dom';

const useSubject = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log({ values });
  };

  const onReset = async () => {
    if (!id) {
      form.resetFields();
    }
    if (id) {
      
    }
  };
};
export default useSubject;
