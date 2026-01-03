'use client'

import { useState, useEffect } from 'react'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { 
  Users, 
  Mail, 
  Plus, 
  Trash2, 
  Ban, 
  CheckCircle, 
  RefreshCw,
  ArrowLeft,
  Shield,
  Clock,
  AlertCircle
} from 'lucide-react'

interface AllowlistEntry {
  id: string
  identifier: string
  createdAt: number
}

interface User {
  id: string
  firstName: string | null
  lastName: string | null
  email: string
  imageUrl: string
  createdAt: number
  lastSignInAt: number | null
  banned: boolean
}

export default function AdminDashboard() {
  const [allowlist, setAllowlist] = useState<AllowlistEntry[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [newEmail, setNewEmail] = useState('')
  const [loading, setLoading] = useState(true)
  const [actionLoading, setActionLoading] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  // Fetch data on mount
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const [allowlistRes, usersRes] = await Promise.all([
        fetch('/api/admin/allowlist'),
        fetch('/api/admin/users'),
      ])

      if (!allowlistRes.ok || !usersRes.ok) {
        throw new Error('Failed to fetch data')
      }

      const allowlistData = await allowlistRes.json()
      const usersData = await usersRes.json()

      setAllowlist(allowlistData.allowlist || [])
      setUsers(usersData.users || [])
    } catch (err) {
      setError('Failed to load data. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const addToAllowlist = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newEmail.trim()) return

    setActionLoading('add')
    setError(null)
    setSuccess(null)

    try {
      const res = await fetch('/api/admin/allowlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newEmail.trim() }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to add email')
      }

      setSuccess(`${newEmail} has been approved and will receive an invitation email.`)
      setNewEmail('')
      fetchData()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setActionLoading(null)
    }
  }

  const removeFromAllowlist = async (id: string, email: string) => {
    if (!confirm(`Remove ${email} from the allowlist?`)) return

    setActionLoading(id)
    setError(null)

    try {
      const res = await fetch(`/api/admin/allowlist?id=${id}`, {
        method: 'DELETE',
      })

      if (!res.ok) {
        throw new Error('Failed to remove from allowlist')
      }

      setSuccess(`${email} has been removed from the allowlist.`)
      fetchData()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setActionLoading(null)
    }
  }

  const banUser = async (userId: string, email: string) => {
    if (!confirm(`Suspend ${email}? They will not be able to sign in.`)) return

    setActionLoading(userId)
    setError(null)

    try {
      const res = await fetch(`/api/admin/users/${userId}/ban`, {
        method: 'POST',
      })

      if (!res.ok) {
        throw new Error('Failed to suspend user')
      }

      setSuccess(`${email} has been suspended.`)
      fetchData()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setActionLoading(null)
    }
  }

  const unbanUser = async (userId: string, email: string) => {
    setActionLoading(userId)
    setError(null)

    try {
      const res = await fetch(`/api/admin/users/${userId}/unban`, {
        method: 'POST',
      })

      if (!res.ok) {
        throw new Error('Failed to unsuspend user')
      }

      setSuccess(`${email} has been unsuspended.`)
      fetchData()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setActionLoading(null)
    }
  }

  const deleteUser = async (userId: string, email: string) => {
    if (!confirm(`Permanently delete ${email}? This cannot be undone.`)) return

    setActionLoading(userId)
    setError(null)

    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
      })

      if (!res.ok) {
        throw new Error('Failed to delete user')
      }

      setSuccess(`${email} has been deleted.`)
      fetchData()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setActionLoading(null)
    }
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/wisenai-logo.png" 
                alt="WisenAI Logo" 
                className="h-10 w-auto mix-blend-lighten brightness-125"
              />
            </Link>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full">
              <Shield className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-400 font-medium">Admin</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={fetchData}
              disabled={loading}
              className="p-2 text-slate-400 hover:text-white transition-colors"
              title="Refresh data"
            >
              <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Site
          </Link>
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-slate-400 mt-2">Manage senior approvals and user accounts</p>
        </div>

        {/* Alerts */}
        {error && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <p className="text-red-400">{error}</p>
            <button 
              onClick={() => setError(null)} 
              className="ml-auto text-red-400 hover:text-red-300"
            >
              ×
            </button>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-lg flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <p className="text-emerald-400">{success}</p>
            <button 
              onClick={() => setSuccess(null)} 
              className="ml-auto text-emerald-400 hover:text-emerald-300"
            >
              ×
            </button>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Allowlist Section */}
          <section className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-sky-500/20 p-2 rounded-lg">
                  <Mail className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Approve Seniors</h2>
                  <p className="text-sm text-slate-400">Add emails to allow sign-up</p>
                </div>
              </div>

              {/* Add Email Form */}
              <form onSubmit={addToAllowlist} className="flex gap-2">
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="Enter email to approve..."
                  className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  disabled={actionLoading === 'add'}
                />
                <button
                  type="submit"
                  disabled={actionLoading === 'add' || !newEmail.trim()}
                  className="px-4 py-2 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-medium rounded-lg flex items-center gap-2 transition-colors"
                >
                  {actionLoading === 'add' ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                  Approve
                </button>
              </form>
            </div>

            {/* Allowlist Table */}
            <div className="max-h-80 overflow-y-auto">
              {loading ? (
                <div className="p-8 text-center text-slate-400">
                  <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2" />
                  Loading...
                </div>
              ) : allowlist.length === 0 ? (
                <div className="p-8 text-center text-slate-400">
                  <Mail className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  No approved emails yet
                </div>
              ) : (
                <table className="w-full">
                  <thead className="bg-slate-700/50 sticky top-0">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase">Added</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-slate-400 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {allowlist.map((entry) => (
                      <tr key={entry.id} className="hover:bg-slate-700/30">
                        <td className="px-6 py-3 text-sm text-white">{entry.identifier}</td>
                        <td className="px-6 py-3 text-sm text-slate-400">{formatDate(entry.createdAt)}</td>
                        <td className="px-6 py-3 text-right">
                          <button
                            onClick={() => removeFromAllowlist(entry.id, entry.identifier)}
                            disabled={actionLoading === entry.id}
                            className="text-red-400 hover:text-red-300 p-1 disabled:opacity-50"
                            title="Remove from allowlist"
                          >
                            {actionLoading === entry.id ? (
                              <RefreshCw className="w-4 h-4 animate-spin" />
                            ) : (
                              <Trash2 className="w-4 h-4" />
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </section>

          {/* Users Section */}
          <section className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-500/20 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Registered Users</h2>
                  <p className="text-sm text-slate-400">{users.length} user{users.length !== 1 ? 's' : ''} signed up</p>
                </div>
              </div>
            </div>

            {/* Users Table */}
            <div className="max-h-96 overflow-y-auto">
              {loading ? (
                <div className="p-8 text-center text-slate-400">
                  <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2" />
                  Loading...
                </div>
              ) : users.length === 0 ? (
                <div className="p-8 text-center text-slate-400">
                  <Users className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  No users registered yet
                </div>
              ) : (
                <div className="divide-y divide-slate-700">
                  {users.map((user) => (
                    <div key={user.id} className="p-4 hover:bg-slate-700/30">
                      <div className="flex items-start gap-3">
                        <img
                          src={user.imageUrl}
                          alt=""
                          className="w-10 h-10 rounded-full bg-slate-600"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-white truncate">
                              {user.firstName} {user.lastName}
                            </span>
                            {user.banned && (
                              <span className="px-2 py-0.5 text-xs bg-red-500/20 text-red-400 rounded-full">
                                Suspended
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-slate-400 truncate">{user.email}</p>
                          <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              Joined {formatDate(user.createdAt)}
                            </span>
                            {user.lastSignInAt && (
                              <span>Last seen {formatDate(user.lastSignInAt)}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {user.banned ? (
                            <button
                              onClick={() => unbanUser(user.id, user.email)}
                              disabled={actionLoading === user.id}
                              className="p-2 text-emerald-400 hover:bg-emerald-500/20 rounded-lg transition-colors"
                              title="Unsuspend user"
                            >
                              {actionLoading === user.id ? (
                                <RefreshCw className="w-4 h-4 animate-spin" />
                              ) : (
                                <CheckCircle className="w-4 h-4" />
                              )}
                            </button>
                          ) : (
                            <button
                              onClick={() => banUser(user.id, user.email)}
                              disabled={actionLoading === user.id}
                              className="p-2 text-amber-400 hover:bg-amber-500/20 rounded-lg transition-colors"
                              title="Suspend user"
                            >
                              {actionLoading === user.id ? (
                                <RefreshCw className="w-4 h-4 animate-spin" />
                              ) : (
                                <Ban className="w-4 h-4" />
                              )}
                            </button>
                          )}
                          <button
                            onClick={() => deleteUser(user.id, user.email)}
                            disabled={actionLoading === user.id}
                            className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                            title="Delete user"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="text-3xl font-bold text-white">{allowlist.length}</div>
            <div className="text-slate-400">Approved Emails</div>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="text-3xl font-bold text-white">{users.length}</div>
            <div className="text-slate-400">Registered Users</div>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="text-3xl font-bold text-white">{users.filter(u => u.banned).length}</div>
            <div className="text-slate-400">Suspended Users</div>
          </div>
        </div>
      </main>
    </div>
  )
}

