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
      Autoplay({ delay: 2000, stopOnInteraction: false }),
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
                        fill
                        loading="lazy"
                        className="object-cover object-center w-full h-full"
                     />
                  </div>
               </CarouselItem>
            ))}
         </CarouselContent>
         <CarouselPrevious className="left-5 hidden group-hover:flex hover:bg-primary/80 hover:text-white" />
         <CarouselNext className="right-5 hidden group-hover:flex hover:bg-primary/80 hover:text-white" />
      </Carousel>
   )
}

export default MainSlider
