import './globals.css'
import { Inter, Press_Start_2P } from 'next/font/google'

const links = [{
  label: 'Level 1',
  route: '/level1'
}]


export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const press_start_2p = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export const metadata = {
  title: 'The SandWalker',
  description: 'Game to hack different levels done using smart contracts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={press_start_2p.className}>{children}</body>
    </html>
  )
}