import {
  type LoaderFunctionArgs,
  type LinksFunction,
  type MetaFunction,
} from '@remix-run/node'
import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import '~/styles/global.css'
import { GlobalLoading } from './components/global-loading'
import { getDomainUrl, getUrl } from './utils/misc'
import { getMetaTags } from './utils/seo'
import iconAssetUrl from '~/assets/favicon.svg'

export async function loader({ request }: LoaderFunctionArgs) {
  const data = {
    requestInfo: {
      origin: getDomainUrl(request),
      path: new URL(request.url).pathname,
    },
  }

  return json(data)
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const requestInfo = data?.requestInfo

  return [...getMetaTags({ url: getUrl(requestInfo) })]
}

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  {
    rel: 'icon',
    type: 'image+svg',
    href: iconAssetUrl,
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <GlobalLoading />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
