import React, { useState } from 'react'
// import API from 'API';
import API from '../api/api';



const EmployeeForm = ({ employee, onClose }) => {
  const [form, setForm] = useState(employee || { name: '', email: '', position: '' });
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.position) {
      setError('All fields are required.');
      return;
    }
    try {
      if (employee) {
        await API.put(`/api/employees/${employee.id}`, form);
      } else {
        await API.post('/api/employees', form);
      }
      onClose();
    } catch (err) {
      setError('Error saving employee, possibly duplicate email.',err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-100"
      >
        <h2 className="text-2xl font-bold mb-4 text-indigo-800">{employee ? 'Edit' : 'Add'} Employee</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input type="text" name="name" placeholder="Name"
          className="block w-full mb-3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200" value={form.name}
          onChange={handleChange} />
        <input type="email" name="email" placeholder="Email"
          className="block w-full mb-3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200" value={form.email}
          onChange={handleChange} />
        <input type="text" name="position" placeholder="Position"
          className="block w-full mb-3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200" value={form.position}
          onChange={handleChange} />
        <div className="flex gap-2">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500" type="submit">
            {employee ? 'Update' : 'Add'}
          </button>
          <button type="button" className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm
