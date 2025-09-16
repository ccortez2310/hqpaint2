import { urlForImage } from '@/sanity/lib/image'
import { getImageSizes, getNextImages } from '@/utils/utils'
import React, { FC } from 'react'
import Image from 'next/image'
import { ImageIcon, Eye, ExternalLink } from 'lucide-react'

type ProjectCardProps = {
   project: Project
   setImages: (images: NextImage[]) => void
   setOpen: (open: boolean) => void
}

const ProjectCard: FC<ProjectCardProps> = ({ project, setImages, setOpen }) => {
   const sanityImages: any[] = project.images?.map((image) => ({
      src: urlForImage(image).url(),
      ...getImageSizes(urlForImage(image).url()),
   }))

   const handleClick = () => {
      if (sanityImages?.length > 0) {
         const images = getNextImages(sanityImages)

         setImages(images)
         setOpen(true)
      }
   }

   return (
      <div
         className="relative h-full bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group border border-gray-100 dark:border-slate-700"
         onClick={handleClick}
      >
         {/* Full Image Background */}
         <div className="relative w-full h-full overflow-hidden rounded-3xl">
            <Image
               className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
               src={urlForImage(project.mainImage).url()}
               alt={project.title}
               fill
               loading="lazy"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Image Count Badge */}
            {sanityImages?.length > 1 && (
               <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <ImageIcon className="w-4 h-4" />
                  <span>{sanityImages.length}</span>
               </div>
            )}

            {/* Service Category Badge */}
            <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide">
               {project.service.name}
            </div>

            {/* Bottom Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
               <div className="flex items-end justify-between">
                  <div>
                     <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                        {project.title}
                     </h3>
                     <div className="mt-2 text-sm font-medium text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>View Gallery</span>
                     </div>
                  </div>
                  <div className="w-10 h-10 bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                     <ExternalLink className="w-5 h-5 text-white transition-colors duration-300" />
                  </div>
               </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
         </div>
      </div>
   )
}

export default ProjectCard
