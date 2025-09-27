import { useState } from 'react'
import React, { useEffect} from 'react';
import EmployeeTable from './components/EmployeeTable';
import EmployeeForm from './components/EmployeeForm';
import SearchBar from './components/SearchBar';

import API from './api/api';

import './App.css'

function App() {


  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [formOpen, setFormOpen] = useState(false);




  const fetchEmployees = async () => {
    const res = await API.get('/api/employees');
    console.log("res = > ",res)
    const employeeData = res.data || [];
    console.log("Emp Data => ",employeeData)
    setEmployees(Array.isArray(employeeData) ? employeeData : []);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
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
  );
}

export default App
