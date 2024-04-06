import { defineField, defineType } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export default defineType({
   name: 'testimonial',
   title: 'Testimonials',
   type: 'document',
   icon: UsersIcon,
   fields: [
      defineField({
         name: 'name',
         title: 'Name',
         type: 'string',
         validation: (Rule) =>
            Rule.required().error("Please add the customer's name"),
      }),
      defineField({
         name: 'comment',
         title: 'Comment',
         type: 'text',
         validation: (Rule) =>
            Rule.required().error("Please add the customer's comment"),
      }),
      defineField({
         name: 'photo',
         title: 'Photo',
         type: 'image',
         options: {
            hotspot: true,
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
