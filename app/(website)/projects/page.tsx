import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { Metadata } from 'next'
import { groq } from 'next-sanity'
import React from 'react'
import Breadcrumbs from '../_components/breadcrumbs'
import ProjectsList from './projects-list'
import { FolderOpen } from 'lucide-react'

const domain = process.env.NEXT_PUBLIC_APP_DOMAIN

export const revalidate = 0

const projectsQuery = groq`*[_type=='project' && published == true]{
   ..., service -> { _id, name}
} | order(createdAt desc)`
const seoQuery = groq`*[_type=='seo'][0]`

export async function generateMetadata(): Promise<Metadata> {
   const seo: SEO = await client.fetch(seoQuery)

   return {
      title: seo.projectsTitle,
      description: seo.projectsDescription,
      openGraph: {
         type: 'website',
         title: seo.projectsTitle,
         description: seo.projectsDescription,
         url: `${domain}/projects`,
         images:
            seo.projectsImage != undefined
               ? [urlForImage(seo.projectsImage).url()]
               : [],
      },
   }
}

const Page = async () => {
   const projects: Project[] = await client.fetch(projectsQuery)

   const breadcrumbs = [
      { name: 'Home', href: '/' },
      { name: 'Projects', href: '/projects' },
   ]

   return (
      <>
         {/* Breadcrumbs section with extra top margin */}
         <div className="bg-background pt-20 pb-8 px-4 lg:px-6">
            <div className="mx-auto max-w-screen-xl">
               <Breadcrumbs links={breadcrumbs} />
            </div>
         </div>

         {/* Main projects section */}
         <section className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-background py-16 lg:py-24 px-4 lg:px-6 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
               <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-100/30 dark:bg-cyan-900/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative mx-auto max-w-7xl">
               {/* Header Section */}
               <div className="text-center space-y-4 mb-16 animate-in slide-in-from-top delay-150 duration-700">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-full">
                     <FolderOpen className="w-4 h-4 text-blue-600 mr-2" />
                     <span className="text-sm font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                        Our Portfolio
                     </span>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
                        Project Gallery
                     </span>
                  </h1>

                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                     Explore our completed projects showcasing quality craftsmanship and attention to detail.
                     <span className="hidden lg:inline">
                        {' '}Click on any project to view the complete image gallery.
                     </span>
                  </p>
               </div>

               {/* Projects Grid */}
               <ProjectsList projects={projects} />
            </div>
         </section>
      </>
   )
}

export default Page
