'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import NavItem from './NavItem'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className='fixed z-10 bg-amber-500 w-full h-12 p-2 drop-shadow-md'>
      <div className='flex justify-center items-center gap-10'>
        <Link href='/'>
          <NavItem active={pathname === '/'}>Home</NavItem>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
