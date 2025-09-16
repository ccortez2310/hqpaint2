'use client'

import { useScrollTop } from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'
import { SimpleThemeToggle } from '@/components/simple-theme-toggle'
import { Button } from '@/components/ui/button'
import Logo from '@/components/logo'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Palette } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import navLinks from '@/data/navlinks'
import NavLink from './nav-link'

interface NavbarProps {
  contact: Contact
}

const Navbar = ({ contact }: NavbarProps) => {
   const [open, setOpen] = useState(false)
   const scrolled = useScrollTop()
   const pathname = usePathname()
   const isHomePage = pathname === '/'

   return (
      <header className={cn(
         "fixed top-0 w-full transition-all duration-300",
         "z-50"
      )}>
         <nav
            className={cn(
               'px-4 lg:px-6 py-4 transition-all duration-300',
               // Home page behavior: transparent initially, bg-background on scroll
               isHomePage 
                  ? scrolled 
                     ? 'bg-background border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg'
                     : 'bg-transparent backdrop-blur-sm'
                  // Other pages: keep original behavior
                  : scrolled
                     ? 'bg-background border-b border-gray-200/20 dark:border-gray-700/20 shadow-lg'
                     : 'bg-background/95 backdrop-blur-md'
            )}
         >
            <div className="flex w-full justify-between items-center mx-auto max-w-7xl">
               {/* Logo - Always visible on mobile */}
               <Link href="/" className="flex items-center space-x-2 group">
                  <div className="flex items-center space-x-2">
                     {/* Mobile Logo - smaller */}
                     <div className="relative h-[50px] w-[75px] lg:hidden">
                        {!isHomePage || scrolled ? (
                           <>
                              <Image
                                 src="/logo.png"
                                 fill
                                 alt="HQPaint General Construction LLC"
                                 className="dark:hidden object-contain"
                              />
                              <Image
                                 src="/logo-dark.png"
                                 fill
                                 alt="HQ Paint General Construction LLC"
                                 className="hidden dark:flex object-contain"
                              />
                           </>
                        ) : (
                           <Image
                              src="/logo-dark.png"
                              fill
                              alt="HQ Paint General Construction LLC"
                              className="object-contain"
                           />
                        )}
                     </div>
                     
                     {/* Desktop Logo */}
                     <div className="relative h-[75px] w-[110px] hidden lg:block">
                        {!isHomePage || scrolled ? (
                           <>
                              <Image
                                 src="/logo.png"
                                 fill
                                 alt="HQPaint General Construction LLC"
                                 className="dark:hidden object-contain"
                              />
                              <Image
                                 src="/logo-dark.png"
                                 fill
                                 alt="HQ Paint General Construction LLC"
                                 className="hidden dark:flex object-contain"
                              />
                           </>
                        ) : (
                           <Image
                              src="/logo-dark.png"
                              fill
                              alt="HQ Paint General Construction LLC"
                              className="object-contain"
                           />
                        )}
                     </div>
                     
                     <div className="hidden sm:block lg:block">
                        <div className={cn(
                           "text-lg font-bold group-hover:text-blue-600 transition-colors",
                           isHomePage && !scrolled ? "text-white" : "text-foreground"
                        )}>
                           HQ Paint
                        </div>
                        <div className={cn(
                           "text-xs -mt-1",
                           isHomePage && !scrolled ? "text-white/80" : "text-muted-foreground"
                        )}>
                           General Construction
                        </div>
                     </div>
                  </div>
               </Link>

               {/* Desktop Navigation */}
               <div className="hidden lg:flex items-center space-x-8">
                  <ul className="flex items-center space-x-8">
                     {navLinks.map((link, i) => (
                        <li key={i}>
                           <NavLink 
                              title={link.title} 
                              href={link.href} 
                              isTransparent={isHomePage && !scrolled}
                           />
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Right Side Actions */}
               <div className="flex items-center space-x-3">
                  {/* Contact Info - Hidden on mobile */}
                  <div className={cn(
                     "hidden md:flex items-center space-x-4 text-sm border-r pr-4",
                     isHomePage && !scrolled ? "text-white/80 border-white/20" : "text-muted-foreground border-gray-200/20 dark:border-gray-700/20"
                  )}>
                     <a href={`tel:${contact.phone1}`} className="hover:text-blue-600 transition-colors">
                        {contact.phone1}
                     </a>
                  </div>

                  {/* Theme Toggle - Always visible */}
                  <SimpleThemeToggle isTransparent={isHomePage && !scrolled} />
                  
                  {/* CTA Button */}
                  <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full px-6">
                     <Link href="/contact" className="flex items-center space-x-2">
                        <Palette className="w-4 h-4" />
                        <span className="hidden sm:inline">Free Estimate</span>
                        <span className="sm:hidden">Quote</span>
                     </Link>
                  </Button>

                  {/* Mobile Menu Button */}
                  <Button
                     className={cn(
                        "lg:hidden transition-all duration-300",
                        isHomePage && !scrolled 
                           ? "text-white hover:bg-white/10 hover:text-white border-white/20" 
                           : "text-foreground hover:bg-muted"
                     )}
                     variant="ghost"
                     size="icon"
                     onClick={() => setOpen(!open)}
                  >
                     {!open ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
                  </Button>
               </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
               className={cn(
                  'lg:hidden mt-4 pb-4 border-t transition-all duration-300 relative z-50',
                  !open && 'hidden',
                  isHomePage && !scrolled 
                     ? 'bg-background border-white/20 rounded-b-lg mx-4 shadow-xl' 
                     : 'bg-background border-gray-200/20 dark:border-gray-700/20 shadow-xl'
               )}
            >
               <div className="flex flex-col space-y-4 mt-4">
                  {navLinks.map((link, i) => (
                     <NavLink
                        key={i}
                        title={link.title}
                        href={link.href}
                        className="block py-2 px-4 rounded-lg hover:bg-muted/50 transition-colors"
                        onClick={() => setOpen(false)}
                        isTransparent={false}
                     />
                  ))}
                  
                  {/* Mobile Contact Info */}
                  <div className="py-2 px-4 text-sm text-muted-foreground border-t border-gray-200/20 dark:border-gray-700/20 mt-2 pt-4">
                     <a href={`tel:${contact.phone1}`} className="hover:text-blue-600 transition-colors">
                        {contact.phone1}
                     </a>
                  </div>
               </div>
            </div>
         </nav>
      </header>
   )
}

export default Navbar
