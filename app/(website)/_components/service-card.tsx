import React, { FC } from 'react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'

type ServiceCardProps = {
   service: Service
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
   return (
      <Link href={`/services/${service.slug.current}`} className="h-full">
         <div className="bg-background dark:border dark:border-gray-700 rounded-2xl group shadow-lg">
            <div className="relative w-full h-80 overflow-hidden rounded-t-2xl">
               <Image
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-200 ease-out"
                  src={urlForImage(service.mainImage).url()}
                  alt={service.name}
                  fill
                  loading="lazy"
               />
            </div>
            <div className="p-5">
               <h3 className="font-semibold sm:text-lg text-foreground group-hover:text-blue-700">
                  {service.name}
               </h3>
               <p className="mt-2 line-clamp-2 text-sm md:text-base text-gray-600 dark:text-gray-400">
                  {service.description}
               </p>
            </div>
         </div>
      </Link>
   )
}

export default ServiceCard
