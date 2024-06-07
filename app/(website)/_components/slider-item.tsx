import { Button } from '@/components/ui/button'
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { Dancing_Script } from 'next/font/google'

const font = Dancing_Script({ subsets: ['latin'] })

type SliderItemProps = {
   slider: Slider
}

const SliderItem: FC<SliderItemProps> = ({ slider }) => {
   return (
      <div className="relative w-full h-[400px] lg:h-[600px] xl:h-[700px]">
         <img
            src={urlForImage(slider.image).url()}
            alt={slider.title}
            className="absolute inset-0 w-full h-full object-cover object-center kenburns-img"
         />
         <div className="absolute inset-0 bg-black bg-opacity-50"></div>
         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
            <h1
               className={`text-4xl md:text-6xl font-bold mb-4 ${font.className}`}
            >
               {slider.title}
            </h1>
            <p className="text-lg md:text-xl mb-8 w-[80%] md:w-[60%]">
               {slider.description}
            </p>
            <Button asChild className="md:py-8 md:px-10 md:text-lg">
               <Link href={slider.linkUrl}>{slider.linkText}</Link>
            </Button>
         </div>
      </div>
   )
}

export default SliderItem
