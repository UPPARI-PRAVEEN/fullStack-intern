import { useEffect, useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../utils';
import AddEditForm from './AddEditForm';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await API.get('/data');
    setData(res.data);
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async (id) => {
    await API.delete(`/data/${id}`);
    fetchData();
  };

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h3>Dashboard</h3>
      <button className="btn btn-danger mb-3" onClick={handleLogout}>Logout</button>

      <AddEditForm onSaved={fetchData} editData={edit} clearEdit={() => setEdit(null)} />

      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Role</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(d => (
            <tr key={d._id}>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.role}</td>
              <td>
                <button className="btn btn-sm btn-info me-2" onClick={() => setEdit(d)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(d._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
