"use client"
import  Container  from './Container.jsx'
import React from 'react'
import Logo from './Logo.jsx'
import Navlinks from './Navlinks.jsx'
import Button from './Button.jsx'
import { Popover } from '@headlessui/react'
import { TbMenu2 } from "react-icons/tb";
import { IoIosArrowUp } from "react-icons/io";
import { AnimatePresence, motion } from 'framer-motion'
import { navData } from '@/constants'
import Link from 'next/link.js'


const MobileNavLinks = ({children,...props}) =>{
return (
    <Popover.Button as={Link} className="block text-base leading-7
    tracking-tight text-gray-700"{...props}>
        {children}
    </Popover.Button>
)
}

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
        <Button href="#" variant='outline' className='hidden lg:block'>Get Advice</Button>
        <Button className='hidden lg:block' href='#'>
            Hire me
        </Button>
    </div>
    {/*Mobile Navlinks*/}
<Popover className="lg:hidden">
{({open})=>(
    <>
    <Popover.Button  className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2
     hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none outline-none"
     aria-label="Toggle site navigation">
{({open})=> open?(<IoIosArrowUp className='text-2xl '/>):(<TbMenu2 className='text-2xl '/>)}

    </Popover.Button>
    <AnimatePresence initial={false}>
    {open &&(
        <>
        <Popover.Overlay
          static
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
        
        />
          <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >

                           <div className="space-y-4">
                            {navData.map(({ _id, title, href }) => (
                              <MobileNavLinks href={href} key={_id}>
                                {title}
                              </MobileNavLinks>
                            ))}
                          </div>
                        </Popover.Panel>
        </>
    )}

    </AnimatePresence>
    </>
)}
</Popover>
</Container>
    </nav>
 </header>
  )
}

export default Header