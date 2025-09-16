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
      <section className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-background py-16 lg:py-24 px-4 lg:px-6 overflow-hidden">
         {/* Background decorative elements */}
         <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-40 -left-20 w-96 h-96 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-cyan-100/20 dark:bg-cyan-900/10 rounded-full blur-3xl"></div>
         </div>

         <div className="relative mx-auto max-w-screen-lg text-center">
            <div className="space-y-4 animate-in slide-in-from-bottom delay-150 duration-700">
               <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-full">
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                     Our Expertise
                  </span>
               </div>
               
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
                     Services
                  </span>
               </h2>
               
               <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Discover our comprehensive range of professional painting and construction services designed to transform your space.
               </p>
            </div>
         </div>
         <div className="relative mx-auto max-w-screen-xl mt-16 animate-in slide-in-from-bottom delay-300 duration-700">
            <Carousel
               opts={{
                  align: 'start',
                  loop: true,
                  skipSnaps: true,
               }}
               plugins={[autoplayInstance.current]}
               onMouseEnter={autoplayInstance.current.stop}
               onMouseLeave={autoplayInstance.current.play}
               className="w-full"
            >
               <CarouselContent className="-ml-6">
                  {services.map((service, index) => (
                     <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3 pl-6"
                     >
                        <ServiceCard key={service._id} service={service} />
                     </CarouselItem>
                  ))}
               </CarouselContent>
               <CarouselPrevious className="left-2 lg:left-8 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-gray-200/50 dark:border-slate-700/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg" />
               <CarouselNext className="right-2 lg:right-8 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-gray-200/50 dark:border-slate-700/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg" />
            </Carousel>
         </div>
      </section>
   )
}

export default HomeSectionServices
