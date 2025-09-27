import React from 'react'

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
      console.log('EmployeeTable employees:', employees);

  return (
    <table className="min-w-full mt-4 bg-white rounded overflow-hidden shadow-sm">
      <thead>
        <tr className="bg-indigo-200 text-indigo-800">
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Email</th>
          <th className="py-2 px-4">Position</th>
          <th className="py-2 px-4"></th>
        </tr>
      </thead>
      <tbody>
        {employees.map((e) => (
          <tr key={e.id} className="hover:bg-indigo-50">
            <td className="py-2 px-4">{e.name}</td>
            <td className="py-2 px-4">{e.email}</td>
            <td className="py-2 px-4">{e.position}</td>
            <td className="py-2 px-4 flex gap-2">
              <button onClick={() => onEdit(e)} className="bg-yellow-400 hover:bg-yellow-300 text-white px-3 py-1 rounded">Edit</button>
              <button onClick={() => onDelete(e.id)} className="bg-red-500 hover:bg-red-400 text-white px-3 py-1 rounded">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable
