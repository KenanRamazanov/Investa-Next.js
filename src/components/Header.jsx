"use client"
import  Container  from './Container.jsx'
import React from 'react'
import Logo from './Logo.jsx'
import Navlinks from './Navlinks.jsx'
import Button from './Button.jsx'

const Header = () => {
  return (
 <header>
    <nav>
<Container className='relative z-50 flex justify-between py-8'>
    {/*Logo*/}
    <div className='relative z-10'>
        <Logo></Logo>
    </div>
    {/*Navlinks*/}
    <div className='hidden lg:flex lg:gap-10 items-center'>
        <Navlinks></Navlinks>
    </div>
    {/*Buttons*/}
    <div className='flex items-center gap-6'>
        <Button href="#">Get Advice</Button>
    </div>
    {/*Mobile Navlinks*/}

</Container>
    </nav>
 </header>
  )
}

export default Header