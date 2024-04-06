import { defineField, defineType } from 'sanity'
import { ThListIcon } from '@sanity/icons'

export default defineType({
   name: 'project',
   title: 'Projects',
   type: 'document',
   icon: ThListIcon,
   fields: [
      defineField({
         name: 'title',
         title: 'Title',
         type: 'string',
         validation: (Rule) =>
            Rule.required().error('Please add the project name'),
      }),
      defineField({
         name: 'service',
         title: 'Service',
         type: 'reference',
         to: [{ type: 'service' }],
         validation: (Rule) =>
            Rule.required().error('Please add the related service'),
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
         name: 'images',
         type: 'array',
         title: 'Images',
         of: [
            {
               name: 'image',
               type: 'image',
               title: 'Image',
               options: {
                  hotspot: true,
               },
            },
         ],
         options: {
            layout: 'grid',
         },
      }),
      defineField({
         name: 'published',
         title: 'Published',
         type: 'boolean',
         initialValue: false,
      }),
   ],
})
