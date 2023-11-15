'use client'
import { Raleway } from 'next/font/google'
import Link from 'next/link'
import ButtonDark from '../Button/ButtonDark'

const raleway = Raleway({ subsets: ['latin'] })
function Navbar() {
  return (
    <nav className={`flex justify-between items-center p-5 text-sm border-b-[1px] border-[#202022] tracking-[.3rem] ${raleway.className}`}>

        <Link href="/" className='text-lg ml-8 transition ease-in-out delay-150 duration-300 hover:text-[#de6a12]'>Agus</Link>
        <ul className='flex flex-row justify-end gap-7 space-between w-full text-lg mr-8'>
            <ButtonDark />
            <Link href="/" className='transition ease-in-out delay-150 duration-300 hover:text-[#de6a12]'>Home</Link>
            <Link href="/about" className='transition ease-in-out delay-150 duration-300 hover:text-[#de6a12]'>About</Link>
            <Link href="/projects" className='transition ease-in-out delay-150 duration-300 hover:text-[#de6a12]'>Projects</Link>
            <Link href="/resume" className='transition ease-in-out delay-150 duration-300 hover:text-[#de6a12]'>Resume</Link>
        </ul>

    </nav>
  )
}

export default Navbar