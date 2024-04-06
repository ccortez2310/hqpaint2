import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

const domain = process.env.NEXT_PUBLIC_APP_DOMAIN

const servicesQuery = groq`
*[_type=='service' && published == true]
`

export default async function sitemap() {
   const servicesData: Service[] = await client.fetch(servicesQuery)

   const services = servicesData.map((service) => ({
      url: `${domain}/services/${service.slug.current}`,
      lastModified: new Date(service._updatedAt).toISOString(),
   }))

   const routes = ['', '/contact', '/services', '/about', '/projects'].map(
      (route) => ({
         url: `${domain}${route}`,
         lastModified: new Date().toISOString(),
      }),
   )

   return [...routes, ...services]
}
