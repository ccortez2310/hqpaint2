import React, { FC } from 'react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

type ServiceCardProps = {
   service: Service
}

const ServiceCard: FC<ServiceCardProps> = ({ service }) => {
   return (
      <Link href={`/services/${service.slug.current}`} className="h-full block group">
         <div className="relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-slate-700">
            {/* Image Section */}
            <div className="relative w-full h-72 overflow-hidden">
               <Image
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  src={urlForImage(service.mainImage).url()}
                  alt={service.name}
                  fill
                  loading="lazy"
               />
               
               {/* Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               

            </div>

            {/* Content Section */}
            <div className="p-6 relative">
               
               <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                     {service.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                     {service.description}
                  </p>
                  
                  {/* Action Bar */}
                  <div className="flex items-center justify-between pt-2">
                     <div className="text-sm font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn More
                     </div>
                     <div className="w-8 h-8 bg-blue-50 dark:bg-blue-950/30 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                     </div>
                  </div>
               </div>

               {/* Bottom Accent Line */}
               <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
         </div>
      </Link>
   )
}

export default ServiceCard
