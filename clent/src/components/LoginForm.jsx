import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import API from '../api';
import { useNavigate, Link } from 'react-router-dom'; // <-- Add Link
import { saveToken } from '../utils';

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h3>Login</h3>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email().required(),
          password: Yup.string().min(6).required(),
        })}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            const res = await API.post('/auth/login', values);
            saveToken(res.data.token);
            navigate("/dashboard");
          } catch (err) {
            setErrors({ email: 'Invalid login' });
          }
          setSubmitting(false);
        }}
      >
        <Form>
          <div className="mb-3">
            <label>Email</label>
            <Field name="email" type="email" className="form-control" />
            <div className="text-danger"><ErrorMessage name="email" /></div>
          </div>
          <div className="mb-3">
            <label>Password</label>
            <Field name="password" type="password" className="form-control" />
            <div className="text-danger"><ErrorMessage name="password" /></div>
          </div>

          <button type="submit" className="btn btn-primary">Login</button>

          <p className="mt-3">
            Don't have an account?{' '}
            <Link to="/register">Register</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
