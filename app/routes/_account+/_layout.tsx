import { Link, Outlet } from '@remix-run/react'

export default function DashboardLayout() {
  return (
    <div>
      <header className="container">
        <nav className="flex h-16 items-center justify-between">
          <Link to="/dashboard">Logo</Link>
          <div className="flex items-center gap-4">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/user/settings">Account</Link>
          </div>
        </nav>
      </header>
      <div className="container py-8">
        <Outlet />
      </div>
    </div>
  )
}
