import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import API from "../api";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h3>Register</h3>
      <Formik
        initialValues={{ email: "", password: "", confirm: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email().required("Required"),
          password: Yup.string().min(6).required("Required"),
          confirm: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Required"),
        })}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            await API.post("/auth/register", {
              email: values.email,
              password: values.password,
            });
            alert("Registered successfully!");
            navigate("/");
          } catch (err) {
            setErrors({ email: "User already exists" });
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
          <div className="mb-3">
            <label>Confirm Password</label>
            <Field name="confirm" type="password" className="form-control" />
            <div className="text-danger"><ErrorMessage name="confirm" /></div>
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
