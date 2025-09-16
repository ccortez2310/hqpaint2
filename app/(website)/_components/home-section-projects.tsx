'use client'
import React, { FC, useEffect, useState } from 'react'
import _ from 'lodash'

import Lightbox from 'yet-another-react-lightbox'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'
import ProjectCard from './project-card'
import LightboxImage from './lightbox-image'
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

type HomeSectionProjectsProps = {
   projects: Project[]
}

const HomeSectionProjects: FC<HomeSectionProjectsProps> = ({ projects }) => {
   const [images, setImages] = useState<NextImage[]>([])
   const [open, setOpen] = useState(false)

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
      <>
         <section className="relative bg-background py-16 lg:py-24 px-4 lg:px-6 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
               <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-100/20 dark:bg-cyan-900/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative mx-auto max-w-screen-lg text-center">
               <div className="space-y-4 animate-in slide-in-from-bottom delay-150 duration-700">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-full">
                     <span className="text-sm font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                        Our Work
                     </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
                        Projects
                     </span>
                  </h2>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                     Explore our portfolio of completed projects showcasing quality craftsmanship and attention to detail.{' '}
                     <span className="hidden lg:inline">
                        Click on any project to view the full gallery.
                     </span>
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
                     {projects.map((project, index) => (
                        <CarouselItem
                           key={index}
                           className="md:basis-1/2 lg:basis-1/3 pl-6"
                        >
                           <div className="h-[400px]">
                              <ProjectCard
                                 project={project}
                                 key={project._id}
                                 setImages={setImages}
                                 setOpen={setOpen}
                              />
                           </div>
                        </CarouselItem>
                     ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 lg:left-8 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-gray-200/50 dark:border-slate-700/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg" />
                  <CarouselNext className="right-2 lg:right-8 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-gray-200/50 dark:border-slate-700/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-lg" />
               </Carousel>
            </div>
         </section>

         <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={images}
            index={0}
            render={{ slide: LightboxImage }}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
         />
      </>
   )
}

export default HomeSectionProjects
