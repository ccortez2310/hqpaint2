'use client'
import React, { FC } from 'react'
import {
   Carousel,
   CarouselContent,
   CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

import SliderItem from './slider-item'

type MainSliderProps = {
   sliders: Slider[]
}

const MainSlider: FC<MainSliderProps> = ({ sliders }) => {
   const autoplayInstance = React.useRef(
      Autoplay({
         delay: 8000,
      }),
   )

   return (
      <Carousel
         className="w-full"
         opts={{ align: 'start', loop: true }}
         plugins={[autoplayInstance.current]}
      >
         <CarouselContent>
            {sliders.map((slider, index) => (
               <CarouselItem key={index} className="min-w-full overflow-hidden">
                  <SliderItem slider={slider} />
               </CarouselItem>
            ))}
         </CarouselContent>
      </Carousel>
   )
}

export default MainSlider
