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

const domain = process.env.NEXT_PUBLIC_APP_DOMAIN

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
      <div className="bg-background py-8 px-4 lg:px-6">
         <div className="mx-auto max-w-screen-xl">
            <Breadcrumbs links={breadcrumbs} />

            <div className="mt-8 pb-16">
               <h1 className="text-4xl lg:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  {service.name}
               </h1>

               <div className="mt-8 sm:text-lg text-gray-700 dark:text-gray-400">
                  <PortableText
                     value={service.body}
                     components={RichTextComponents}
                  />
               </div>

               {sanityImages?.length > 0 && (
                  <div className="mt-8">
                     <div className="text-xl md:text-2xl font-bold">
                        Gallery
                     </div>
                     <div className="mt-5">
                        <ImageGallery images={sanityImages} />
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}

export default Page
