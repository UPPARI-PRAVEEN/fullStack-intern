import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import API from '../api';
import { useEffect } from 'react';

const AddEditForm = ({ onSaved, editData, clearEdit }) => {
  const initial = { name: '', email: '', role: '' };

  return (
    <div>
      <h5>{editData ? 'Edit' : 'Add'} Entry</h5>
      <Formik
        enableReinitialize
        initialValues={editData || initial}
        validationSchema={Yup.object({
          name: Yup.string().required(),
          email: Yup.string().email().required(),
          role: Yup.string().required(),
        })}
        onSubmit={async (values, { resetForm }) => {
          if (editData) {
            await API.put(`/data/${editData._id}`, values);
            clearEdit();
          } else {
            await API.post('/data', values);
          }
          resetForm();
          onSaved();
        }}
      >
        <Form className="row g-3">
          <div className="col-md-4">
            <Field name="name" placeholder="Name" className="form-control" />
            <div className="text-danger"><ErrorMessage name="name" /></div>
          </div>
          <div className="col-md-4">
            <Field name="email" placeholder="Email" className="form-control" />
            <div className="text-danger"><ErrorMessage name="email" /></div>
          </div>
          <div className="col-md-4">
            <Field name="role" placeholder="Role" className="form-control" />
            <div className="text-danger"><ErrorMessage name="role" /></div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success">{editData ? 'Update' : 'Add'}</button>
            {editData && (
              <button type="button" className="btn btn-secondary ms-2" onClick={clearEdit}>Cancel</button>
            )}
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddEditForm;
