import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { Metadata } from 'next'
import { groq } from 'next-sanity'
import React from 'react'
import Breadcrumbs from '../_components/breadcrumbs'
import { RichTextComponents } from '@/components/rich-text-components'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import ValueCard from '../_components/value-card'
import { ContactBanner } from '../_components/contact-banner'

const domain = process.env.NEXT_PUBLIC_APP_DOMAIN

export const revalidate = 0

const seoQuery = groq`*[_type=='seo'][0]`
const aboutQuery = groq`*[_type=='about'][0]`

export async function generateMetadata(): Promise<Metadata> {
   const seo: SEO = await client.fetch(seoQuery)

   return {
      title: seo.aboutTitle,
      description: seo.aboutDescription,
      openGraph: {
         type: 'website',
         title: seo.aboutTitle,
         description: seo.aboutDescription,
         url: `${domain}/about`,
         images:
            seo.aboutImage != undefined
               ? [urlForImage(seo.aboutImage).url()]
               : [],
      },
   }
}

const Page = async () => {
   const about: About = await client.fetch(aboutQuery)

   const breadcrumbs = [
      { name: 'Home', href: '/' },
      { name: 'Company', href: '/about' },
   ]

   return (
      <>
         <div className="bg-background py-8 px-4 lg:px-6">
            <div className="mx-auto max-w-screen-xl">
               <Breadcrumbs links={breadcrumbs} />
            </div>
         </div>
         {/* Section 1 */}
         <section className="bg-background py-8 lg:py-16 px-4 lg:px-6">
            <div className="gap-10 lg:gap-16 items-center mx-auto max-w-screen-xl grid lg:grid-cols-2">
               <div className="text-gray-600 sm:text-lg dark:text-gray-400 animate-in slide-in-from-left delay-150 duration-500">
                  <div className="mb-8 text-3xl tracking-tight text-primary dark:text-foreground uppercase font-semibold">
                     {about.section1Title}
                  </div>
                  <PortableText
                     value={about.section1Content}
                     components={RichTextComponents}
                  />
               </div>
               <div className="relative w-full h-[410px] animate-in slide-in-from-right delay-150 duration-500">
                  <Image
                     fill
                     className="object-cover object-center rounded-lg"
                     src={urlForImage(about.section1Image).url()}
                     alt={about.section1Title}
                  />
               </div>
            </div>
         </section>
         {/* Section 2 (Mission) */}
         <section className="bg-gray-50 dark:bg-background py-8 lg:py-16 px-4 lg:px-6">
            <div className="gap-10 lg:gap-16 items-center mx-auto max-w-screen-xl grid lg:grid-cols-2">
               <div className="relative w-full h-[410px] order-2 lg:order-1 animate-in slide-in-from-left delay-150 duration-500">
                  <Image
                     fill
                     className="object-cover object-center rounded-lg"
                     src={urlForImage(about.missionImage).url()}
                     alt="Mission"
                  />
               </div>
               <div className="text-gray-600 sm:text-lg dark:text-gray-400 order-1 lg:order-2 animate-in slide-in-from-right delay-150 duration-500">
                  <div className="mb-8 text-3xl tracking-tight text-primary dark:text-foreground uppercase font-semibold">
                     Mission
                  </div>
                  <div className="lg:w-[90%] w-full">{about.mission}</div>
               </div>
            </div>
         </section>

         {/* Section 3 (Vision) */}
         <section className="bg-background py-8 lg:py-16 px-4 lg:px-6">
            <div className="gap-10 lg:gap-16 items-center mx-auto max-w-screen-xl grid lg:grid-cols-2">
               <div className="text-gray-600 sm:text-lg dark:text-gray-400 animate-in slide-in-from-left delay-150 duration-500">
                  <div className="mb-8 text-3xl tracking-tight text-primary dark:text-foreground uppercase font-semibold">
                     Vision
                  </div>
                  <div className="lg:w-[90%] w-full">{about.vision}</div>
               </div>
               <div className="relative w-full h-[410px] animate-in slide-in-from-right delay-150 duration-500">
                  <Image
                     fill
                     className="object-cover object-center rounded-lg"
                     src={urlForImage(about.visionImage).url()}
                     alt="Vision"
                  />
               </div>
            </div>
         </section>

         {/* Section 4 (values) */}
         <section className="bg-gray-50 dark:bg-background py-8 lg:py-16 px-4 lg:px-6">
            <div className="gap-10 lg:gap-16 items-center mx-auto max-w-screen-xl">
               <div className="mb-8 text-3xl tracking-tight text-primary dark:text-foreground uppercase font-semibold text-center">
                  Values
               </div>
               <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 animate-in slide-in-from-bottom delay-150 duration-500">
                  {about.values.map((value: string) => (
                     <ValueCard key={value} value={value} />
                  ))}
               </div>
            </div>
         </section>

         {/* Section 3 (Team) */}
         <section className="bg-background py-8 lg:py-16 px-4 lg:px-6">
            <div className="gap-10 lg:gap-16 items-center mx-auto max-w-screen-xl grid lg:grid-cols-3">
               <div className="text-gray-600 sm:text-lg dark:text-gray-400 animate-in slide-in-from-left delay-150 duration-500 lg:col-span-2">
                  <div className="mb-8 text-3xl tracking-tight text-primary dark:text-foreground uppercase font-semibold">
                     {about.section5Title}
                  </div>
                  <div className="lg:w-[90%] w-full">
                     <PortableText
                        value={about.section5Content}
                        components={RichTextComponents}
                     />
                  </div>
               </div>
               <div className="lg:col-span-1 flex justify-center">
                  <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] animate-in slide-in-from-right delay-150 duration-500">
                     <Image
                        fill
                        className="object-cover object-center rounded-full"
                        src={urlForImage(about.section5Image).url()}
                        alt="Vision"
                     />
                  </div>
               </div>
            </div>
         </section>

         {/* Contact Section */}
         <ContactBanner />
      </>
   )
}

export default Page
