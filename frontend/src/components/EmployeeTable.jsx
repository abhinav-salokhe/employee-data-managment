import React from 'react'

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
      console.log('EmployeeTable employees:', employees);

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="py-3 px-4 text-left text-sm font-semibold">Name</th>
            <th className="py-3 px-4 text-left text-sm font-semibold">Email</th>
            <th className="py-3 px-4 text-left text-sm font-semibold">Position</th>
            <th className="py-3 px-4 text-right text-sm font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e, idx) => (
            <tr key={e.id} className={idx % 2 ? 'bg-white' : 'bg-indigo-50/30'}>
              <td className="py-3 px-4 text-gray-800">{e.name}</td>
              <td className="py-3 px-4 text-gray-800">{e.email}</td>
              <td className="py-3 px-4 text-gray-800">{e.position}</td>
              <td className="py-3 px-4">
                <div className="flex justify-end gap-2">
                  <button onClick={() => onEdit(e)} className="text-sm bg-amber-500 hover:bg-amber-400 text-white px-3 py-1.5 rounded-md">Edit</button>
                  <button onClick={() => onDelete(e.id)} className="text-sm bg-rose-600 hover:bg-rose-500 text-white px-3 py-1.5 rounded-md">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable
