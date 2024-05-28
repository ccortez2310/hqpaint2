import React, { FC } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type BreadcrumbsProps = {
   links: BreadcrumbItem[]
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ links }) => {
   return (
      <ul className="flex items-center font-medium text-gray-700 dark:text-gray-400 space-x-1 lg:space-x-1.5 text-sm sm:text-base">
         {links.map((item: BreadcrumbItem, i: number) => {
            return i !== links.length - 1 ? (
               <React.Fragment key={i}>
                  <li>
                     <Link
                        href={item.href}
                        className="hover:underline hover:text-blue-800"
                     >
                        {item.name}
                     </Link>
                  </li>
                  <li className="text-gray-500 select-none">
                     <ChevronRight className="h-4 w-4" />
                  </li>
               </React.Fragment>
            ) : (
               <li className="text-blue-800" key={i}>
                  {item.name}
               </li>
            )
         })}
      </ul>
   )
}

export default Breadcrumbs
