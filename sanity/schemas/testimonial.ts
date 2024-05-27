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
         title: 'Rating',
         name: 'rating',
         description: 'Rating from 1 to 5',
         type: 'string',
         options: {
            list: [
               { title: '1', value: '1' },
               { title: '2', value: '2' },
               { title: '3', value: '3' },
               { title: '4', value: '4' },
               { title: '5', value: '5' },
            ],
            layout: 'radio',
            direction: 'horizontal',
         },
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
