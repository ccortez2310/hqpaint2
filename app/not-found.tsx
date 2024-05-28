import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
   return (
      <section className="bg-background h-screen flex flex-col justify-center">
         <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
               <h1 className="mb-4 text-7xl tracking-tight font-bold lg:text-9xl text-primary">
                  404
               </h1>
               <p className="mb-4 text-3xl tracking-tight font-bold text-primary md:text-4xl dark:text-gray-300">
                  Something&apos;s missing.
               </p>
               <p className="mb-4 text-lg text-gray-700 dark:text-gray-400">
                  Sorry, we can&apos;t find that page. You&apos;ll find lots to
                  explore on the home page.
               </p>
               <Button asChild className="mt-4">
                  <Link href="/">Back to Homepage</Link>
               </Button>
            </div>
         </div>
      </section>
   )
}
