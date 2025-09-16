'use client'
import ProjectCard from '../_components/project-card'
import React, { FC, useState } from 'react'

import Lightbox from 'yet-another-react-lightbox'
import LightboxImage from '../_components/lightbox-image'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'

interface ProjectsListProps {
   projects: Project[]
}

const ProjectsList: FC<ProjectsListProps> = ({ projects }) => {
   const [images, setImages] = useState<NextImage[]>([])
   const [open, setOpen] = useState(false)
   return (
      <>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom delay-300 duration-700">
            {projects.map((project: Project) => (
               <div key={project._id} className="h-[400px]">
                  <ProjectCard
                     project={project}
                     setImages={setImages}
                     setOpen={setOpen}
                  />
               </div>
            ))}
         </div>
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

export default ProjectsList
