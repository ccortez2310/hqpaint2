import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { Metadata } from 'next'
import { groq } from 'next-sanity'
import React from 'react'
import Breadcrumbs from '../_components/breadcrumbs'
import ServiceCard from '../_components/service-card'

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
      <div className="bg-gray-50 dark:bg-background py-8 px-4 lg:px-6">
         <div className="mx-auto max-w-screen-xl">
            <Breadcrumbs links={breadcrumbs} />

            <div className="mt-8 pb-16">
               <div className="mx-auto max-w-screen-lg text-center sm:text-lg">
                  <h1 className="text-4xl lg:text-5xl tracking-tight font-extrabold text-foreground animate-in slide-in-from-bottom delay-150 duration-500">
                     Services
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 mt-5 animate-in slide-in-from-bottom delay-150 duration-500">
                     Take a look at the services We&apos;ve provided.{' '}
                     <span className="hidden lg:inline">
                        Click on a service to view more details.
                     </span>
                  </p>
               </div>

               <div className="mt-10 lg:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-in slide-in-from-bottom delay-150 duration-500">
                  {services.map((service: Service) => (
                     <ServiceCard service={service} key={service._id} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Page
