import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { Metadata } from 'next'
import { groq } from 'next-sanity'
import React from 'react'
import ContactForm from '../_components/contact-form'

const domain = process.env.NEXT_PUBLIC_APP_DOMAIN

export const revalidate = 0

const seoQuery = groq`*[_type=='seo'][0]`
const contactQuery = groq`*[_type=='contact'][0]`
const servicesQuery = groq`
  *[_type=='service' && published==true]{_id,name}
`

export async function generateMetadata(): Promise<Metadata> {
   const seo: SEO = await client.fetch(seoQuery)

   return {
      title: seo.contactTitle,
      description: seo.contactDescription,
      openGraph: {
         type: 'website',
         title: seo.contactTitle,
         description: seo.contactDescription,
         url: `${domain}/contact`,
         images:
            seo.contactImage != undefined
               ? [urlForImage(seo.contactImage).url()]
               : [],
      },
   }
}

const Page = async () => {
   const contact: Contact = await client.fetch(contactQuery)
   const services: any[] = await client.fetch(servicesQuery)

   return (
      <>
         <div>
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41412.67591476182!2d-77.05290503503076!3d39.0080109278976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cf4e666ae927%3A0x8433a865b29adf!2sSilver%20Spring%2C%20Maryland%2C%20EE.%20UU.!5e0!3m2!1ses!2ssv!4v1665359317564!5m2!1ses!2ssv"
               width="100%"
               height="400"
               allowFullScreen={true}
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
         </div>

         <div className="bg-background py-10 lg:py-20 lg px-4 lg:px-6 aanimate-in slide-in-from-bottom delay-150 duration-500">
            <div className="mx-auto max-w-screen-xl">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="max-w-[36rem]">
                     <h3 className="text-xl md:text-2xl font-bold">
                        We are here for you
                     </h3>
                     <p className="mt-5 md:mt-8">
                        Send us your query through the different means or
                        complete the form to be able to provide you with better
                        attention, thank you for choosing us.
                     </p>
                     <div className="mt-5 md:mt-10">
                        <h3 className="uppercase font-light tracking-tight">
                           LOCATION
                        </h3>
                        <div className="text-lg sm:text-xl font-semibold mt-2">
                           {contact.address}
                        </div>
                     </div>
                     <div className="mt-5 md:mt-10">
                        <h3 className="uppercase font-light tracking-tight">
                           EMAIL
                        </h3>
                        <a
                           href={`mailto:${contact.email}`}
                           className="text-lg sm:text-xl font-semibold inline-block hover:underline mt-2 hover:text-blue-800"
                        >
                           {contact.email}
                        </a>
                     </div>

                     <div className="mt-5 md:mt-10">
                        <h3 className="uppercase font-light tracking-tight">
                           CALL US
                        </h3>
                        <a
                           href={`tel:${contact.phone1}`}
                           className="text-lg sm:text-xl font-semibold mt-2 inline-block hover:underline hover:text-blue-800"
                        >
                           {contact.phone1}
                        </a>
                        <br />
                        <a
                           href={`tel:${contact.phone2}`}
                           className="text-lg sm:text-xl font-semibold mt-2 inline-block hover:underline hover:text-blue-800"
                        >
                           {contact.phone2}
                        </a>
                     </div>
                  </div>
                  <div>
                     <h3 className="text-xl md:text-2xl font-bold">
                        Receive a Free Estimate
                     </h3>

                     <div className="text-sm text-gray-500 dark:text-gray-300 mt-5">
                        Fields marked with an{' '}
                        <span className="text-red-600">*</span> are required.
                     </div>

                     <ContactForm services={services} />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Page
