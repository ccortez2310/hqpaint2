import { urlForImage } from '@/sanity/lib/image'
import { getImageSizes, getNextImages } from '@/utils/utils'
import React, { FC } from 'react'
import Image from 'next/image'
import { ImageIcon } from 'lucide-react'

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
         className="dark:border dark:border-gray-700 rounded-2xl group shadow-lg cursor-pointer"
         onClick={handleClick}
      >
         <div className="relative w-full h-[20rem] sm:h-[25rem] lg:h-[30rem] overflow-hidden rounded-2xl">
            <Image
               className="object-cover object-center group-hover:scale-110 transition-transform duration-200 ease-out"
               src={urlForImage(project.mainImage).url()}
               alt={project.title}
               fill
               loading="lazy"
            />
            <div className="absolute bottom-0 w-full p-5 bg-opacity-20 bg-black backdrop-blur-lg drop-shadow-lg">
               <div className="flex items-center justify-between">
                  <div>
                     <h2 className="text-sm sm:text-base uppercase tracking-tight text-blue-200 font-light">
                        {project.service.name}
                     </h2>
                     <h3 className="font-semibold text-lg sm:text-xl text-white mt-2">
                        {project.title}
                     </h3>
                  </div>
                  {sanityImages?.length > 0 && (
                     <div className="text-white">
                        <ImageIcon className="w-6 h-6" />
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProjectCard
