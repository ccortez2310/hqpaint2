import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import React, { FC } from 'react'

type NavLinkProps = {
   href: string
   title: string
   className?: string
   onClick?: () => void
   isTransparent?: boolean
}

const NavLink: FC<NavLinkProps> = ({ href, title, className, onClick, isTransparent = false }) => {
   const pathname = usePathname()

   const isActive = (pathname.startsWith(href) && href !== '/') || pathname === href

   return (
      <Link 
         href={href} 
         className={cn(
            // Base styles
            "relative font-medium transition-all duration-300 ease-in-out",
            // Desktop styles
            "lg:px-3 lg:py-2 lg:rounded-lg",
            // Mobile styles (when className is provided)
            className ? className : "px-0 py-1",
            // Active state - different colors for transparent mode
            isActive
               ? isTransparent
                  ? "text-white lg:bg-white/20"
                  : "text-blue-600 dark:text-blue-400 lg:bg-blue-50 dark:lg:bg-blue-950/50"
               : isTransparent
                  ? "text-white/80 hover:text-white lg:hover:bg-white/10"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 lg:hover:bg-gray-100 dark:lg:hover:bg-gray-800",
            // Active indicator (underline for desktop, different bg for mobile)
            !className && isActive && (isTransparent 
               ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white after:rounded-full"
               : "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:rounded-full")
         )}
         onClick={onClick}
      >
         {title}
      </Link>
   )
}

export default NavLink
