'use client'
import React, { FC, useEffect } from 'react'
import ServiceCard from './service-card'
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

type HomeSectionServicesProps = {
   services: Service[]
}

const HomeSectionServices: FC<HomeSectionServicesProps> = ({ services }) => {
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
      <section className="bg-background py-8 lg:py-16 px-4 lg:px-6 mt-10 lg:mt-16">
         <div className="mx-auto max-w-screen-lg text-center sm:text-lg">
            <h2 className="text-4xl lg:text-5xl tracking-tight font-extrabold text-foreground animate-in slide-in-from-bottom delay-150 duration-500">
               Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-5 animate-in slide-in-from-bottom delay-150 duration-500">
               Take a look at the services We&apos;ve provided.{' '}
               <span className="hidden lg:inline">
                  Click on a service to view more details.
               </span>
            </p>
         </div>
         <div className="mx-auto max-w-screen-xl mt-10 animate-in slide-in-from-bottom delay-150 duration-500">
            <Carousel
               opts={{
                  align: 'start',
                  loop: true,
                  skipSnaps: true,
               }}
               plugins={[autoplayInstance.current]}
               onMouseEnter={autoplayInstance.current.stop}
               onMouseLeave={autoplayInstance.current.play}
               className="w-full py-5 bg-background"
            >
               <CarouselContent className="-ml-4">
                  {services.map((service, index) => (
                     <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                     >
                        <div className="p-1">
                           <ServiceCard key={service._id} service={service} />
                        </div>
                     </CarouselItem>
                  ))}
               </CarouselContent>
               <CarouselPrevious className="left-5 hover:bg-primary/80 hover:text-white" />
               <CarouselNext className="right-5 hover:bg-primary/80 hover:text-white" />
            </Carousel>
         </div>
      </section>
   )
}

export default HomeSectionServices
