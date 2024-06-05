import { defineField, defineType } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

export default defineType({
   name: 'slider',
   title: 'Sliders',
   type: 'document',
   icon: ImagesIcon,
   fields: [
      defineField({
         name: 'title',
         title: 'Title',
         type: 'string',
         validation: (Rule) => Rule.required().error('Please add the title'),
      }),
      defineField({
         name: 'mainImage',
         title: 'Main Image',
         type: 'image',
         options: {
            hotspot: true,
         },
         validation: (Rule) => Rule.required().error('Please add a main image'),
      }),
      defineField({
         name: 'responsiveImage',
         title: 'Responsive Image',
         type: 'image',
         options: {
            hotspot: true,
         },
         validation: (Rule) =>
            Rule.required().error('Please add a responsive image'),
      }),
      defineField({
         name: 'published',
         title: 'Published',
         type: 'boolean',
         initialValue: false,
      }),
   ],
})
