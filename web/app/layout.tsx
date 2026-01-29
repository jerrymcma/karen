import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Karen',
  description: 'I\'m here to listen. What\'s on your mind?',
  icons: {
    icon: '/Karen_icon.png',
    apple: '/Karen_icon.png',
  },
  openGraph: {
    title: 'Karen',
    description: 'I\'m here to listen. What\'s on your mind?',
    images: ['/Karen_icon.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Karen',
    description: 'I\'m here to listen. What\'s on your mind?',
    images: ['/Karen_icon.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Karen_icon.png" />
        <link rel="apple-touch-icon" href="/Karen_icon.png" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
