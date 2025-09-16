import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { Metadata } from 'next'
import { groq } from 'next-sanity'
import React from 'react'
import Breadcrumbs from '../_components/breadcrumbs'
import ServiceCard from '../_components/service-card'
import { Wrench } from 'lucide-react'

const domain = process.env.NEXT_PUBLIC_APP_DOMAIN

export const revalidate = 0
const servicesQuery = groq`
*[_type=='service' && published == true] | order(updatedAt desc)
`
const seoQuery = groq`*[_type=='seo'][0]`

export async function generateMetadata(): Promise<Metadata> {
   const seo: SEO = await client.fetch(seoQuery)

   return {
      title: seo.servicesTitle,
      description: seo.servicesDescription,
      openGraph: {
         type: 'website',
         title: seo.servicesTitle,
         description: seo.servicesDescription,
         url: `${domain}/services`,
         images:
            seo.servicesImage != undefined
               ? [urlForImage(seo.servicesImage).url()]
               : [],
      },
   }
}

const Page = async () => {
   const services: Service[] = await client.fetch(servicesQuery)

   const breadcrumbs = [
      {
         name: 'Home',
         href: '/',
      },
      {
         name: 'Services',
         href: '/services',
      },
   ]

   return (
      <>
         {/* Breadcrumbs section with extra top margin */}
         <div className="bg-background pt-20 pb-8 px-4 lg:px-6">
            <div className="mx-auto max-w-screen-xl">
               <Breadcrumbs links={breadcrumbs} />
            </div>
         </div>

         {/* Main services section */}
         <section className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-background py-16 lg:py-24 px-4 lg:px-6 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
               <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-100/30 dark:bg-cyan-900/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative mx-auto max-w-7xl">
               {/* Header Section */}
               <div className="text-center space-y-4 mb-16 animate-in slide-in-from-top delay-150 duration-700">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-full">
                     <Wrench className="w-4 h-4 text-blue-600 mr-2" />
                     <span className="text-sm font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                        Our Services
                     </span>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
                        Professional Services
                     </span>
                  </h1>

                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                     Discover our comprehensive range of painting and construction services.
                     <span className="hidden lg:inline">
                        {' '}Click on a service to view detailed information and get started with your project.
                     </span>
                  </p>
               </div>

               {/* Services Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom delay-300 duration-700">
                  {services.map((service: Service) => (
                     <ServiceCard service={service} key={service._id} />
                  ))}
               </div>
            </div>
         </section>
      </>
   )
}

export default Page
