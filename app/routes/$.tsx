import { GeneralErrorBoundary } from '~/components/error-boundary'

export async function loader() {
  throw new Response('Not found', { status: 404 })
}

export default function Route() {
  return <p>This not be shown</p>
}

export function ErrorBoundary() {
  return <GeneralErrorBoundary />
}
