import type { Metadata } from 'next'

import { Kanit } from 'next/font/google'

import Navbar from '@components/common/Navbar'

import './globals.css'

const kanit = Kanit({ weight: '400', subsets: ['thai'] })

type Props = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'TK Zone',
  description: 'The web app is render content from mdx',
}

const RootLayout = (props: Props) => {
  const { children } = props

  return (
    <html lang='en'>
      <body
        className={`${kanit.className} bg-gradient-to-tl from-amber-700 via-amber-400 to-yellow-200`}
      >
        <Navbar />
        <main className='min-h-screen md:max-w-[720px] lg:max-w-[900px] mx-auto px-5 md:px-0 pt-16 prose prose-md'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
