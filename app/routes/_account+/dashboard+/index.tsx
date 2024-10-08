import { redirect } from '@remix-run/react'

export async function loader() {
  throw redirect('/login')
}

export default function Dashboard() {
  return (
    <div className="py-4">
      <h1>
        Welcome to your dashboard{' '}
        <span className="text-fg-primary">username</span>
      </h1>
    </div>
  )
}
