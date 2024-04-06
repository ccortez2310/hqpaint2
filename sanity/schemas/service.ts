import { defineField, defineType } from 'sanity'
import { ThListIcon } from '@sanity/icons'

export default defineType({
   name: 'service',
   title: 'Services',
   type: 'document',
   icon: ThListIcon,
   fields: [
      defineField({
         name: 'name',
         title: 'Name',
         type: 'string',
         validation: (Rule) =>
            Rule.required().error('Please add the service name'),
      }),
      defineField({
         name: 'slug',
         title: 'Slug',
         type: 'slug',
         options: {
            source: 'name',
         },
         validation: (Rule) =>
            Rule.required().error('Please add the service slug'),
      }),
      defineField({
         name: 'description',
         title: 'Description',
         type: 'text',
         validation: (Rule) =>
            Rule.required().error(
               'Please add a short description of the service',
            ),
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
         name: 'body',
         title: 'Body',
         type: 'blockContent',
      }),
      defineField({
         name: 'published',
         title: 'Published',
         type: 'boolean',
         initialValue: false,
      }),
   ],
})
