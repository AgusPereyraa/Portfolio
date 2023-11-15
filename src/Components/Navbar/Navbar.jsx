'use client'
import { Raleway } from 'next/font/google'
import Link from 'next/link'
import './navbar.css'

const raleway = Raleway({ subsets: ['latin'] })
function Navbar() {
  return (
    <nav className={`flex justify-between items-center p-5 text-sm border-b-[1px] border-[#ffffff3a] tracking-widest ${raleway.className}`}>
        <Link href="/" className='text-lg ml-8'>Agus</Link>
        <ul className='flex flex-row justify-end gap-7 space-between w-full text-lg mr-8'>
            <Link href="/" className='asd'>Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
        </ul>

    </nav>
  )
}

export default Navbar