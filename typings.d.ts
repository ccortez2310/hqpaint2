type Base = {
   _createdAt: string
   _id: string
   _rev: string
   _type: string
   _updatedAt: string
}

interface Reference {
   _type: string
   _ref: string
   _key?: string
   _weak?: boolean
   _strengthenOnPublish?: {
      type: string
      weak?: boolean
      template?: {
         id: string
         params: Record<string, string | number | boolean>
      }
   }
}

interface ImageCrop {
   _type?: 'sanity.imageCrop'
   left: number
   bottom: number
   right: number
   top: number
}

interface ImageHotspot {
   _type?: 'sanity.imageHotspot'
   width: number
   height: number
   x: number
   y: number
}

interface Image {
   [key: string]: unknown
   asset?: Reference
   crop?: ImageCrop
   hotspot?: ImageHotspot
}

interface Slug {
   _type: 'slug'
   current: string
}

interface Block {
   _key: string
   _type: 'block'
   children: Span[]
   markDefs: any[]
   style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
}

interface Span {
   _key: string
   _type: 'span'
   marks: string[]
   text: string
}

interface Contact extends Base {
   email: string
   phone1: string
   phone2: string
   address: string
   maplink: string
   facebook: string
   instagram: string
   twitter: string
   whatsapp: string
}

interface Service extends Base {
   name: string
   slug: Slug
   description: string
   mainImage: Image
   images: Image[]
   body: Block
   published: boolean
}

interface Slider extends Base {
   title: string
   image: Image
   published: boolean
}

interface Project extends Base {
   title: string
   service: SimpleService
   mainImage: Image
   images: Image[]
   published: boolean
}

interface BreadcrumbItem {
   name: string
   href: string
}

interface About extends Base {
   section1Title: string
   section1Content: Block
   section1Image: Image

   mission: string
   vision: string
   values: string[]

   section2Title: string
   section2Content: Block
   section2Image: Image
}

interface Home extends Base {
   heroTitle: string
   heroContent: string
   heroImage: Image

   section1Title: string
   section1Subtitle: string
   section1Content: Block
   section1Image: Image
}

interface Testimonial extends Base {
   name: string
   comment: string
   photo: Image
   rating: string
   published: boolean
}

interface SEO extends Base {
   homeTitle: string
   homeDescription: string
   homeImage: Image

   aboutTitle: string
   aboutDescription: string
   aboutImage: Image

   servicesTitle: string
   servicesDescription: string
   servicesImage: Image

   projectsTitle: string
   projectsDescription: string
   projectsImage: Image

   contactTitle: string
   contactDescription: string
   contactImage: Image | null
}

interface NextImage {
   src: string
   width: number
   height: number
}

interface SimpleService extends Base {
   name: string
}
