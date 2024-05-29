import { RichTextComponents } from '@/components/rich-text-components'
import { Button } from '@/components/ui/button'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import React, { FC } from 'react'
import Image from 'next/image'

type HomeSection2Props = {
   home: Home
}

const HomeSection2: FC<HomeSection2Props> = ({ home }) => {
   return (
      <section className="bg-gray-50 dark:bg-background py-8 lg:py-16 px-4 lg:px-6">
         <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative w-full h-[400px] animate-in slide-in-from-left delay-150 duration-500">
               <Image
                  src={urlForImage(home.section2Image).url()}
                  className="object-cover object-center rounded-2xl"
                  alt="Explore our work"
                  fill
               />
            </div>

            <div className="animate-in slide-in-from-right delay-150 duration-500">
               <h2 className="text-2xl md:text-3xl font-light animate-in slide-in-from-bottom delay-150 duration-500 uppercase">
                  {home.section2Title}
               </h2>
               <div className="mt-5">
                  <PortableText
                     value={home.section2Content}
                     components={RichTextComponents}
                  />
               </div>
               <div className="mt-5">
                  <Button asChild>
                     <Link href="/projects">Explore our work</Link>
                  </Button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HomeSection2
