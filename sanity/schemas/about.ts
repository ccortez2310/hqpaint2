import { defineField, defineType } from 'sanity'

export default defineType({
   name: 'about',
   title: 'About',
   type: 'document',
   fieldsets: [
      {
         name: 'section1',
         title: 'Section 1 (About Company)',
         options: {
            collapsible: true,
         },
      },
      {
         name: 'section2',
         title: 'Section 2 (Mission, Vision and Values)',
         options: {
            collapsible: true,
         },
      },
      {
         name: 'section3',
         title: 'Section 3',
         options: {
            collapsible: true,
         },
      },
   ],
   fields: [
      //Section 1
      defineField({
         name: 'section1Title',
         title: 'Title',
         type: 'string',
         fieldset: 'section1',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section1Content',
         title: 'About Company',
         type: 'simpleBlockContent',
         fieldset: 'section1',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section1Image',
         title: 'Image',
         type: 'image',
         options: {
            hotspot: true,
         },
         fieldset: 'section1',
         validation: (Rule) => Rule.required(),
      }),
      //Section 2
      defineField({
         name: 'mission',
         title: 'Mission',
         type: 'text',
         fieldset: 'section2',
         validation: (Rule) => Rule.required().error('Please add a mission'),
      }),
      defineField({
         name: 'vision',
         title: 'Vision',
         type: 'text',
         fieldset: 'section2',
         validation: (Rule) => Rule.required().error('Please add a vision'),
      }),
      defineField({
         name: 'values',
         title: 'Values',
         type: 'array',
         fieldset: 'section2',
         of: [{ type: 'string' }],
         validation: (Rule) => Rule.required().error('Please add some values'),
      }),

      //Section 3

      defineField({
         name: 'section2Title',
         title: 'Title',
         type: 'string',
         fieldset: 'section3',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section2Content',
         title: 'Content',
         type: 'simpleBlockContent',
         fieldset: 'section3',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section2Image',
         title: 'Image',
         type: 'image',
         options: {
            hotspot: true,
         },
         fieldset: 'section3',
         validation: (Rule) => Rule.required(),
      }),
   ],
})
