import { RichTextComponents } from '@/components/rich-text-components'
import { Button } from '@/components/ui/button'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import React, { FC } from 'react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'

type HomeSection1Props = {
   home: Home
}

const HomeSection1: FC<HomeSection1Props> = ({ home }) => {
   return (
      <section className="bg-background py-8 lg:py-16 px-4 lg:px-6 mt-10 lg:mt-16">
         <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
               <h2 className="text-2xl md:text-3xl font-light animate-in slide-in-from-bottom delay-150 duration-500 uppercase">
                  {home.section1Title}
               </h2>
               <h3 className="text-xl md:text-2xl font-semibold mt-5 animate-in slide-in-from-bottom delay-150 duration-500">
                  {home.section1Subtitle}
               </h3>
               <div className="mt-5 animate-in slide-in-from-bottom delay-150 duration-500">
                  <PortableText
                     value={home.section1Content}
                     components={RichTextComponents}
                  />
               </div>
               <div className="mt-5 animate-in slide-in-from-bottom delay-150 duration-500">
                  <Button asChild>
                     <Link href="/about">Know more about US</Link>
                  </Button>
               </div>
            </div>
            <div className="relative w-full h-[400px] animate-in slide-in-from-right delay-150 duration-500">
               <Image
                  src={urlForImage(home.section1Image).url()}
                  className="object-cover object-center rounded-2xl"
                  alt={home.section1Title}
                  fill
               />
            </div>
         </div>
      </section>
   )
}

export default HomeSection1
