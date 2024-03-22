'use client'
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Cross, CrossIcon, MenuIcon, ShoppingCartIcon, X } from "lucide-react"
import { useEffect, useState } from "react";

import { motion } from "framer-motion"

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },
// }







const navlinks = [
    {
        href: '/',
        name: 'Home'
    },
    {
        href: '/',
        name: 'Menu'
    },
    {
        href: '/',
        name: 'Online Ordering'
    },
    {
        href: '/',
        name: 'Table Reservations'
    },
    {
        href: '/',
        name: 'Reviews'
    },
    {
        href: '/',
        name: 'About us'
    },
    {
        href: '/',
        name: 'Contact'
    },
   
]













const Navbar = () => {


    const [sticky, setSticky] = useState(false);
    const [toggle, setToggle] = useState(true);
    const [isOpen, setIsOpen] = useState(false)



    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setSticky(true);
          } else {
            setSticky(false);
          }
        };
       
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
    <nav className={` ${sticky? 'bg-black/15' : 'bg-transparent'} h-20 fixed w-screen top-0  z-[999] p-2`} >

        <div className=" p-5 flex justify-between items-center text-white ">

            <div className="flex lg:ml-auto">

             <h1 className="font-bold text-4xl text-[rgb(169,159,107)] ">Kitchen grill</h1>
            </div>

            <ul className="hidden lg:flex lg:gap-x-10 lg:ml-auto lg:mr-32  ">
                {navlinks.map((link, i) => (

<Link key={i} href={link.href}>
    <li>{link.name}</li>
</Link>

                ))}
            </ul>


            <div className="flex items-center gap-4">

            
                <span className="flex">
                <ShoppingCartIcon className=""/>
                   <span className="bg-yellow-200 px-2 rounded-full">0</span> </span>
            



<Avatar className='hidden lg:flex'>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>



<div  
     className="relavive bg-black/5 lg:hidden">
{toggle? <MenuIcon className="duration-300 transition-all" onClick={() => setToggle(prev => !prev)  }/> : <X  onClick={() => setToggle(prev => !prev)}/> }

{!toggle && <ul className="w-full bg-black/5 absolute left-10 top-20 block my-5 ">
                {navlinks.map((link, i) => (

<Link key={i} href={link.href} className="duration-300 transition-all">
    <li className="my-5">{link.name}</li>
</Link>

                ))}
            </ul>}

</div>


    
</div>
            
        </div>



    </nav>
  )
}

export default Navbar