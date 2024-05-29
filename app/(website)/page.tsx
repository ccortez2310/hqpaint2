import { Metadata } from 'next'
import MainSlider from './_components/main-slider'
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import HomeSection1 from './_components/home-section-1'
import HomeSectionServices from './_components/home-section-services'
import HomeSectionTestimonial from './_components/home-section-testimonial'
import { ContactBanner } from './_components/contact-banner'
import HomeSectionProjects from './_components/home-section-projects'
import HomeSection2 from './_components/home-section-2'

const domain = process.env.NEXT_PUBLIC_APP_DOMAIN

export const revalidate = 0

export async function generateMetadata(): Promise<Metadata> {
   const query = groq`*[_type=='seo'][0]`

   const seo: SEO = await client.fetch(query)

   return {
      title: seo.homeTitle,
      description: seo.homeDescription,
      openGraph: {
         type: 'website',
         title: seo.homeTitle,
         description: seo.homeDescription,
         url: domain,
         images:
            seo.homeImage != undefined
               ? [urlForImage(seo.homeImage).url()]
               : [],
      },
   }
}

//Queries

const homeQuery = groq`*[_type=='home'][0]`
const servicesQuery = groq`*[_type=='service' && published == true] | order(createdAt desc)`
const projectsQuery = groq`*[_type=='project' && published == true] | order(createdAt desc){
   ..., service -> { _id, name}
}`

const testimonialsQuery = groq`*[_type=='testimonial' && published == true] | order(createdAt desc)`
const slidersQuery = groq`*[_type=='slider' && published == true] | order(createdAt desc)`

export default async function HomePage() {
   const home: Home = await client.fetch(homeQuery)
   const services: Service[] = await client.fetch(servicesQuery)
   const projects: Project[] = await client.fetch(projectsQuery)
   const testimonials: Testimonial[] = await client.fetch(testimonialsQuery)
   const sliders: Slider[] = await client.fetch(slidersQuery)

   const images: any[] = sliders.map((slider) =>
      urlForImage(slider.image).url(),
   )

   return (
      <>
         {/* Slider section  */}
         <MainSlider images={images} />

         {/* Section 1 */}
         <HomeSection1 home={home} />

         {/* Section 2 */}
         <HomeSection2 home={home} />

         {/* Services Section */}
         <HomeSectionServices services={services} />

         {/* Projects Section */}
         <HomeSectionProjects projects={projects} />

         {/* Testimonials Section */}
         <HomeSectionTestimonial testimonials={testimonials} />

         {/* Contact Section */}
         <ContactBanner />
      </>
   )
}
