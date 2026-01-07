import { HeadContent, createRootRoute, Link } from '@tanstack/react-router'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Deepo',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/deepo-vector1.svg',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/deepo-vector1.svg',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/deepo-vector1.svg',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/deepo-vector1.svg',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/deepo-vector1.svg',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 space-y-6 sm:space-y-8 text-center">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-orange-600">
              404
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Pagina niet gevonden
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4 sm:px-0">
              De pagina die u zoekt bestaat niet of is verplaatst.
            </p>
            <div className="pt-4">
              <Link
                to="/"
                className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
              >
                Terug naar home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
