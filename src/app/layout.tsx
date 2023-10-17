
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Navbar from './_components/NavBar/Navbar'
import style from './style.module.scss'






const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Demo Next JS',
  description: 'Demo of next js for Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const mainClassName = `flex min-h-screen flex-col items-center justify-between p-4 text-green max-w-300 bg-neutral-300 ${style.main}`
  const bodyClassName = `${roboto.className} ${style.body}`
  return (
    <html lang="en">
      <body className={bodyClassName}>
        <Navbar items={['pokemon','todo']} />
        <main className={mainClassName}>
          {children}
        </main>
      </body>
    </html>
  )
}
