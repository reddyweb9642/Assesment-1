import React, { useEffect, useState } from 'react'
import UserCard from './components/UserCard.jsx'
import Loader from './components/Loader.jsx'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        const res = await fetch(USERS_URL)
        if (!res.ok) throw new Error('Failed to fetch users')
        const data = await res.json()
        setUsers(data)
      } catch (e) {
        setError('Could not load users.')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="page">
      <header className="header">
        <h1 className="title">User Profiles</h1>
        <p className="subtitle">10 profiles</p>
      </header>

      {loading && (
        <div className="center">
          <Loader label="Fetching users..." />
        </div>
      )}

      {!loading && error && <div className="error">{error}</div>}

      {!loading && !error && (
        <section className="grid">
          {users.map((u) => (
            <UserCard key={u.id} user={u} />
          ))}
        </section>
      )}
    </div>
  )
}

export default App
