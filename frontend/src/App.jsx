import { useState } from 'react'
import React, { useEffect} from 'react';
import EmployeeTable from './components/EmployeeTable';
import EmployeeForm from './components/EmployeeForm';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';

import API from './api/api';

import './App.css'

function App() {


  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [formOpen, setFormOpen] = useState(false);




  const fetchEmployees = async () => {
    try {
      const res = await API.get('/api/employees');
      const employeeData = res.data || [];
      setEmployees(Array.isArray(employeeData) ? employeeData : []);
    } catch (err) {
      if (err?.response?.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/signin';
      }
    }
  };

  useEffect(() => { fetchEmployees(); }, []);

  const handleAdd = () => { setSelectedEmployee(null); setFormOpen(true); };
  const handleEdit = (emp) => { setSelectedEmployee(emp); setFormOpen(true); };
  const handleDelete = async (id) => {
    if (window.confirm('Delete this employee?')) {
      await API.delete(`/api/employees/${id}`);
      fetchEmployees();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h1 className="text-3xl font-bold text-indigo-800">Employee Management</h1>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-500"
            onClick={handleAdd}
          >Add Employee</button>
        </div>

        <SearchBar value={search} onChange={setSearch} />



        <EmployeeTable employees={employees.filter(
          e => e.name.toLowerCase().includes(search.toLowerCase())
        )} onEdit={handleEdit} onDelete={handleDelete} />



        {formOpen && (
          <EmployeeForm
            employee={selectedEmployee}
            onClose={() => { setFormOpen(false); fetchEmployees(); }}
          />
        )}


        
        </div>
      </div>
    </div>
  );
}

export default App
