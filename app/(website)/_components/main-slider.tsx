'use client'
import React, { FC } from 'react'
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

import Image from 'next/image'

type MainSliderProps = {
   images: string[]
}

const MainSlider: FC<MainSliderProps> = ({ images }) => {
   const plugin = React.useRef(
      Autoplay({ delay: 5000, stopOnInteraction: true }),
   )

   return (
      <Carousel
         className="w-full group"
         opts={{ align: 'start', loop: true }}
         plugins={[plugin.current]}
         onMouseEnter={plugin.current.stop}
         onMouseLeave={plugin.current.reset}
      >
         <CarouselContent>
            {images.map((image, index) => (
               <CarouselItem key={index}>
                  <div className="relative h-[500px] xl:h-[600px]">
                     <Image
                        src={image}
                        alt="slider"
                        className="object-cover"
                        fill
                        loading="lazy"
                     />
                  </div>
               </CarouselItem>
            ))}
         </CarouselContent>
         <CarouselPrevious className="left-5 hidden group-hover:flex" />
         <CarouselNext className="right-5 hidden group-hover:flex" />
      </Carousel>
   )
}

export default MainSlider
