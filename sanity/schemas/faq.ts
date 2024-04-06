import { defineField, defineType } from 'sanity'
import { ThListIcon } from '@sanity/icons'

export default defineType({
   name: 'faq',
   title: 'FAQ',
   type: 'document',
   icon: ThListIcon,
   fields: [
      defineField({
         name: 'question',
         title: 'Question',
         type: 'string',
         validation: (Rule) => Rule.required().error('Please add the question'),
      }),
      defineField({
         name: 'response',
         title: 'Response',
         type: 'simpleBlockContent',
         validation: (Rule) => Rule.required(),
      }),

      defineField({
         name: 'published',
         title: 'Published',
         type: 'boolean',
         initialValue: false,
      }),
   ],
})
