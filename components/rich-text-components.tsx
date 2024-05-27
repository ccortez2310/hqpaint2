import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

export const RichTextComponents = {
   types: {
      image: ({ value }: any) => {
         return (
            <div className="relative w-full h-96 m-10 mx-auto">
               <Image
                  className="object-contain"
                  src={urlForImage(value).url()}
                  alt="Image"
                  fill
               />
            </div>
         )
      },
   },
   list: {
      bullet: ({ children }: any) => (
         <ul className="ml-10 py-5 list-disc space-y-3">{children}</ul>
      ),
      number: ({ children }: any) => (
         <ol className="mt-10 list-decimal">{children}</ol>
      ),
   },
   block: {
      h1: ({ children }: any) => (
         <h1 className="text-5xl py-10 font-bold">{children}</h1>
      ),
      h2: ({ children }: any) => (
         <h2 className="text-4xl py-10 font-bold">{children}</h2>
      ),
      h3: ({ children }: any) => (
         <h3 className="text-3xl py-10 font-bold">{children}</h3>
      ),
      h4: ({ children }: any) => (
         <h4 className="text-2xl py-10 font-bold">{children}</h4>
      ),

      blockquote: ({ children }: any) => (
         <blockquote className="border-l-primary-600 border-l-4 px-5 py-5 my-5 bg-gray-100 dark:bg-gray-800 rounded-r-md italic">
            {children}
         </blockquote>
      ),
      normal: ({ children }: any) => <p className="mb-5">{children}</p>,
   },
   marks: {
      link: ({ children, value }: any) => {
         const rel = !value.href.startsWith('/')
            ? 'noreferrer noopener'
            : undefined

         return (
            <Link
               href={value.href}
               rel={rel}
               className="font-semibold text-primary-600 hover:underline"
            >
               {children}
            </Link>
         )
      },
   },
}
