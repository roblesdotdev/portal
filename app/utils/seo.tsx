export function getMetaTags({
  url,
  title = 'Remix Portal',
  description = 'Welcome to remix portal.',
  keywords = '',
}: {
  url: string
  title?: string
  description?: string
  keywords?: string
}) {
  return [
    { title },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'og:url', content: url },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
  ]
}
