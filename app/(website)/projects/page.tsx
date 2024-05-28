import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { Metadata } from 'next'
import { groq } from 'next-sanity'
import React from 'react'
import Breadcrumbs from '../_components/breadcrumbs'
import ProjectsList from './projects-list'

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
      <div className="bg-gray-50 dark:bg-background py-8 px-4 lg:px-6">
         <div className="mx-auto max-w-screen-xl">
            <Breadcrumbs links={breadcrumbs} />

            <div className="mt-8 pb-16">
               <div className="mx-auto max-w-screen-lg text-center sm:text-lg">
                  <h1 className="text-4xl lg:text-5xl tracking-tight font-extrabold text-foreground animate-in slide-in-from-bottom delay-150 duration-500">
                     Projects
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 mt-5 animate-in slide-in-from-bottom delay-150 duration-500">
                     Take a look at the projects We&apos;ve worked on.{' '}
                     <span className="hidden lg:inline">
                        Click on a project to view more images.
                     </span>
                  </p>
               </div>

               <ProjectsList projects={projects} />
            </div>
         </div>
      </div>
   )
}

export default Page
