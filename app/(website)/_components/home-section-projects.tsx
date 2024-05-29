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
         <section className="bg-gray-50 dark:bg-background py-8 lg:py-16 px-4 lg:px-6">
            <div className="mx-auto max-w-screen-lg text-center sm:text-lg">
               <h2 className="text-4xl lg:text-5xl tracking-tight font-extrabold text-foreground animate-in slide-in-from-bottom delay-150 duration-500">
                  Projects
               </h2>
               <p className="text-gray-600 dark:text-gray-400 mt-5 animate-in slide-in-from-bottom delay-150 duration-500">
                  A selection of projects We&apos;ve worked on.{' '}
                  <span className="hidden lg:inline">
                     Click on a project to view more images.
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
                     {projects.map((project, index) => (
                        <CarouselItem
                           key={index}
                           className="md:basis-1/2 lg:basis-1/3"
                        >
                           <div className="p-1">
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
                  <CarouselPrevious className="left-5 hover:bg-primary/80 hover:text-white" />
                  <CarouselNext className="right-5 hover:bg-primary/80 hover:text-white" />
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
