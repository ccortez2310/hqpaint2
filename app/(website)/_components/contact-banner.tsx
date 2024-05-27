import Link from 'next/link'

export const ContactBanner = () => {
   return (
      <div className="bg-gradient-to-r from-[#EE8009] via-primary to-[#EE8009] dark:from-orange-500 dark:via-primary dark:to-orange-500 py-32">
         <div className="w-container">
            <div className="mx-auto max-w-lg text-center">
               <h2 className="text-3xl text-white sm:text-4xl font-medium">
                  How can we help you?
               </h2>
               <p className="mt-4 text-lg text-white">
                  We can help you with your painting and general construction
                  needs.
               </p>
               <Link
                  className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
                  href="/contact"
               >
                  Free Estimate
               </Link>
            </div>
         </div>
      </div>
   )
}
