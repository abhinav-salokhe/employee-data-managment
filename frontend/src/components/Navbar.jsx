import { Link, useNavigate } from 'react-router-dom'
import API from '../api/api'

export default function Navbar() {
  const navigate = useNavigate()

  const onLogout = async () => {
    try { await API.post('/api/auth/logout') } catch {}
    localStorage.removeItem('token')
    navigate('/signin')
  }

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-indigo-700">EDS</Link>
        <nav className="flex items-center gap-3">
          <Link to="/" className="text-sm text-gray-700 hover:text-indigo-700">Dashboard</Link>
          <button onClick={onLogout} className="text-sm bg-indigo-600 text-white px-3 py-1.5 rounded hover:bg-indigo-500">Logout</button>
        </nav>
      </div>
    </header>
  )
}


