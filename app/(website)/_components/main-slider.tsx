'use client'
import React, { FC, useEffect } from 'react'
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
   const autoplayInstance = React.useRef(
      Autoplay({
         delay: 3500,
         stopOnInteraction: true,
         playOnInit: true,
      }),
   )

   useEffect(() => {
      autoplayInstance.current = Autoplay({
         delay: 3500,
         stopOnInteraction: true,
         playOnInit: true,
      })
   }, [])

   return (
      <Carousel
         className="w-full group"
         opts={{ align: 'start', loop: true }}
         plugins={[autoplayInstance.current]}
         onMouseEnter={autoplayInstance.current.stop}
         onMouseLeave={autoplayInstance.current.play}
      >
         <CarouselContent>
            {images.map((image, index) => (
               <CarouselItem key={index}>
                  <div className="relative h-[400px] xl:h-[600px]">
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
