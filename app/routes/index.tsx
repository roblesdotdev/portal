import { Link } from '@remix-run/react'

export default function Index() {
  return (
    <div className="flex h-screen flex-col px-4 pt-48">
      <div className="mx-auto flex max-w-screen-md flex-col gap-2 text-center">
        <h1 className="mx-auto max-w-screen-sm text-3xl sm:text-5xl">
          Manage Your Services Efficiently
        </h1>
        <p className="sm:text-lg">
          An intuitive platform to manage, organize, and optimize your
          community's services. Centralize information and keep everything under
          control with just a few clicks.
        </p>
        <div className="mt-4">
          <Link
            to="/dashboard"
            className="inline-flex h-10 items-center rounded-none bg-white px-4 text-black"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}
