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
         name: 'image',
         title: 'Image',
         type: 'image',
         options: {
            hotspot: true,
         },
         validation: (Rule) => Rule.required().error('Please add a image'),
      }),
      defineField({
         name: 'published',
         title: 'Published',
         type: 'boolean',
         initialValue: false,
      }),
   ],
})
