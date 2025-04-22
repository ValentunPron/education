'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Logo from '@/public/logo.svg'
import BurgerMenu from './UI/BurgerMenu';
import { Menu, X } from 'lucide-react';

const HeaderNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className='bg-header py-4 w-full shadow-xl'>
        <div className='container'>
          <nav className='flex justify-between '>
            <Link href="/" className='flex text-center  max-w-[140px] sm:max-w-[180px] lg:max-w-[175px] xl:max-w-[200px]'>
              <Image src={Logo} alt='logo' />
            </Link>

            <div className='hidden md:flex items-center gap-5'>
              <Link href='/course' className='linkButton'>Курси</Link>
              <Link href='/tests' className='linkButton'>Тести</Link>
              <Link href='/about-us' className='linkButton'>Про нас</Link>
            </div>

            <div className='flex gap-4'>
              <Link href='/test' className='button'>Увійти</Link>
              <Link href='/test' className='button'>Реєстрація</Link>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="relavite z-11 md:hidden text-xl focus:outline-none"
              >
               {isOpen ? <X/> : <Menu />}
              </button>
            </div>

            <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
          </nav>
        </div>
    </header>
  )
}

export default HeaderNav