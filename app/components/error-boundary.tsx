import {
  type ErrorResponse,
  isRouteErrorResponse,
  useParams,
  useRouteError,
} from '@remix-run/react'

type StatusHandler = (info: {
  error: ErrorResponse
  params: Record<string, string | undefined>
}) => JSX.Element | null

export function getErrorMessage(error: unknown) {
  if (typeof error === 'string') return error
  if (
    error &&
    typeof error === 'object' &&
    'message' in error &&
    typeof error.message === 'string'
  ) {
    return error.message
  }
  return 'Unknown Error'
}

export function GeneralErrorBoundary({
  defaultStatusHandler = ({ error }) => (
    <p>
      {error.status} {error.data}
    </p>
  ),
  statusHandlers,
  debug = process.env.NODE_ENV !== 'production',
  unexpectedErrorHandler = error => <p>{getErrorMessage(error)}</p>,
}: {
  defaultStatusHandler?: StatusHandler
  statusHandlers?: Record<number, StatusHandler>
  debug?: boolean
  unexpectedErrorHandler?: (error: unknown) => JSX.Element | null
}) {
  const error = useRouteError()
  const params = useParams()

  if (typeof document !== 'undefined' && debug) {
    console.error(error)
  }

  return (
    <div className="container mx-auto px-4 pt-8">
      {isRouteErrorResponse(error)
        ? (statusHandlers?.[error.status] ?? defaultStatusHandler)({
            error,
            params,
          })
        : unexpectedErrorHandler(error)}
    </div>
  )
}
