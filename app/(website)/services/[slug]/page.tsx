import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { getImageSizes } from '@/utils/utils'
import { Metadata } from 'next'
import { groq } from 'next-sanity'
import { notFound } from 'next/navigation'
import React, { FC } from 'react'
import Breadcrumbs from '../../_components/breadcrumbs'
import { PortableText } from '@portabletext/react'
import { RichTextComponents } from '@/components/rich-text-components'
import ImageGallery from '../../_components/image-gallery'
import { Wrench, CheckCircle, ImageIcon } from 'lucide-react'

const domain = process.env.NEXT_PUBLIC_APP_DOMAIN

export const revalidate = 0

type PageProps = {
   params: { slug: string }
}

async function getService(slug: string): Promise<Service> {
   const query = groq`
  *[_type=='service' && slug.current == $slug && published == true][0]`

   const service = await client.fetch(query, { slug })

   if (!service) {
      notFound()
   }

   return service
}

export async function generateMetadata({
   params: { slug },
}: PageProps): Promise<Metadata> {
   const service = await getService(slug)

   return {
      title: service.name,
      description: service.description,
      openGraph: {
         type: 'article',
         title: service.name,
         description: service.description,
         url: `${domain}/services/${slug}`,
         images:
            service.mainImage != undefined
               ? [urlForImage(service.mainImage).url()]
               : [],
      },
   }
}

const Page: FC<PageProps> = async ({ params: { slug } }) => {
   const service = await getService(slug)

   const breadcrumbs = [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: service.name, href: '' },
   ]

   const sanityImages: any[] = service.images?.map((image) => ({
      src: urlForImage(image).url(),
      ...getImageSizes(urlForImage(image).url()),
   }))

   return (
      <>
         {/* Breadcrumbs section with extra top margin */}
         <div className="bg-background pt-20 pb-8 px-4 lg:px-6">
            <div className="mx-auto max-w-screen-xl">
               <Breadcrumbs links={breadcrumbs} />
            </div>
         </div>

         {/* Main service detail section */}
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
                        Service Details
                     </span>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
                        {service.name}
                     </span>
                  </h1>

                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                     Professional service with quality guarantee and expert craftsmanship.
                  </p>
               </div>

               {/* Content Section */}
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                  {/* Service Description - Takes 2 columns */}
                  <div className="lg:col-span-2 space-y-8 animate-in slide-in-from-left delay-300 duration-700">
                     <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                           <PortableText
                              value={service.body}
                              components={RichTextComponents}
                           />
                        </div>
                     </div>
                  </div>

                  {/* Service Features - Takes 1 column */}
                  <div className="space-y-6 animate-in slide-in-from-right delay-450 duration-700">
                     <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                           <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                           Service Features
                        </h3>
                        <ul className="space-y-3">
                           <li className="flex items-center text-gray-600 dark:text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              Professional Quality
                           </li>
                           <li className="flex items-center text-gray-600 dark:text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              Licensed & Insured
                           </li>
                           <li className="flex items-center text-gray-600 dark:text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              Satisfaction Guaranteed
                           </li>
                           <li className="flex items-center text-gray-600 dark:text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              Free Estimates
                           </li>
                        </ul>
                     </div>

                     <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-2xl text-white">
                        <h3 className="text-lg font-bold mb-2">Ready to Start?</h3>
                        <p className="text-blue-100 mb-4 text-sm">
                           Contact us today for a free consultation and estimate.
                        </p>
                        <a
                           href="/contact"
                           className="inline-block bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
                        >
                           Get Free Quote
                        </a>
                     </div>
                  </div>
               </div>

               {/* Gallery Section */}
               {sanityImages?.length > 0 && (
                  <div className="animate-in slide-in-from-bottom delay-600 duration-700">
                     <div className="text-center mb-8">
                        <div className="inline-flex items-center px-4 py-2 bg-cyan-50 dark:bg-cyan-950/30 rounded-full mb-4">
                           <ImageIcon className="w-4 h-4 text-cyan-600 mr-2" />
                           <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300 uppercase tracking-wide">
                              Project Gallery
                           </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
                              Our Work Examples
                           </span>
                        </h2>
                     </div>

                     <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700">
                        <ImageGallery images={sanityImages} />
                     </div>
                  </div>
               )}
            </div>
         </section>
      </>
   )
}

export default Page
