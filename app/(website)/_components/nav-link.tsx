import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'

type NavLinkProps = {
   href: string
   title: string
}

const NavLink: FC<NavLinkProps> = ({ href, title }) => {
   const pathname = usePathname()

   const activeClass = () => {
      return (pathname.startsWith(href) && href !== '/') || pathname === href
         ? 'block px-3 py-2 lg:px-3 text-white border-b border-gray-100 bg-primary/90 hover:bg-primary/80 lg:border-0 lg:rounded-md dark:hover:bg-primary/80 dark:border-gray-700'
         : 'block px-3 py-2 lg:px-3 text-gray-700 border-t border-gray-100 hover:bg-primary/80 hover:text-white lg:hover:bg-primary/20 lg:hover:text-primary/90 lg:border-0 lg:rounded-md dark:text-gray-300 lg:dark:hover:text-white dark:hover:bg-primary/80 dark:hover:text-white lg:dark:hover:bg-primary/90 dark:border-gray-700'
   }

   return (
      <Link href={href} className={activeClass()}>
         {title}
      </Link>
   )
}

export default NavLink
