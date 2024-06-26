import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import service from './schemas/service'
import project from './schemas/project'
import seo from './schemas/seo'
import contact from './schemas/contact'
import home from './schemas/home'
import simpleBlockContent from './schemas/simpleBlockContent'
import testimonial from './schemas/testimonial'
import about from './schemas/about'
import slider from './schemas/slider'

export const schema: { types: SchemaTypeDefinition[] } = {
   types: [
      blockContent,
      simpleBlockContent,
      service,
      project,
      seo,
      contact,
      home,
      testimonial,
      about,
      slider,
   ],
}
