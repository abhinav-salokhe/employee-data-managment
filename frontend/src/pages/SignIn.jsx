import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../api/api'

export default function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await API.post('/api/auth/signin', { email, password })
      localStorage.setItem('token', res.data.token)
      navigate('/')
    } catch (err) {
      setError(err?.response?.data?.error || 'Signin failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold mb-2 text-indigo-800">Welcome back</h2>
        <p className="text-sm text-gray-600 mb-6">Sign in to manage employees</p>
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input className="w-full border rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input className="w-full border rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-200" placeholder="••••••••" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          </div>
          <button disabled={loading} className="w-full bg-indigo-600 text-white rounded-lg p-2.5 hover:bg-indigo-500 transition">{loading ? 'Signing in...' : 'Sign in'}</button>
        </form>
        <p className="mt-4 text-sm text-gray-600">No account? <Link className="text-indigo-600" to="/signup">Create one</Link></p>
      </div>
    </div>
  )
}


