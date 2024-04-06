'use client'

import { useScrollTop } from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import Logo from '@/components/logo'
import Link from 'next/link'
import { Menu, XIcon } from 'lucide-react'
import { useState } from 'react'
import navLinks from '@/data/navlinks'
import NavLink from './nav-link'

const Navbar = () => {
   const [open, setOpen] = useState(false)
   const scrolled = useScrollTop()

   return (
      <header className="sticky top-0 z-40 flex-none w-full">
         <nav
            className={cn(
               'bg-background px-4 lg:px-6 py-2.5',
               scrolled && 'border-b border-gray-200 dark:border-gray-700',
            )}
         >
            <div className="flex w-full flex-wrap justify-between items-center mx-auto max-w-screen-xl">
               <Link href="/">
                  <Logo />
               </Link>

               <div className="flex items-center gap-x-2 lg:order-2">
                  <ModeToggle />
                  <Button asChild>
                     <Link href="/contact">Free Estimate</Link>
                  </Button>
                  <Button
                     className="flex lg:hidden"
                     variant="outline"
                     size="icon"
                     onClick={() => setOpen(!open)}
                  >
                     {!open ? <Menu /> : <XIcon />}
                  </Button>
               </div>

               <div
                  className={cn(
                     'items-center w-full lg:flex lg:flex-1 lg:justify-end lg:mr-5 lg:w-auto lg:order-1',
                     !open && 'hidden',
                  )}
               >
                  <ul className="flex flex-col font-medium mt-4 lg:mt-0 lg:flex-row lg:space-x-5">
                     {navLinks.map((link, i) => (
                        <li key={i}>
                           <NavLink title={link.title} href={link.href} />
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   )
}

export default Navbar
