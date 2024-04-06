import { ArrowLeftIcon } from 'lucide-react'
import Link from 'next/link'

const StudioNavbar = (props: any) => {
   return (
      <>
         <div className="flex items-center justify-between p-4 bg-[#101112]">
            <Link href="/" className="text-blue-600 flex items-center">
               <ArrowLeftIcon className="w-6 h-6 mr-2" /> Back to website
            </Link>
         </div>
         <>{props.renderDefault(props)}</>
      </>
   )
}

export default StudioNavbar
