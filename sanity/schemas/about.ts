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
         title: 'Section 2 (Mission)',
         options: {
            collapsible: true,
         },
      },
      {
         name: 'section3',
         title: 'Section 3 (Vision)',
         options: {
            collapsible: true,
         },
      },
      {
         name: 'section4',
         title: 'Section 4 (Values)',
         options: {
            collapsible: true,
         },
      },
      {
         name: 'section5',
         title: 'Section 5 (Our Team)',
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
         name: 'missionImage',
         title: 'Image',
         type: 'image',
         options: {
            hotspot: true,
         },
         fieldset: 'section2',
         validation: (Rule) => Rule.required(),
      }),
      //Section 3
      defineField({
         name: 'vision',
         title: 'Vision',
         type: 'text',
         fieldset: 'section3',
         validation: (Rule) => Rule.required().error('Please add a vision'),
      }),
      defineField({
         name: 'visionImage',
         title: 'Image',
         type: 'image',
         options: {
            hotspot: true,
         },
         fieldset: 'section3',
         validation: (Rule) => Rule.required(),
      }),

      //Section 4
      defineField({
         name: 'values',
         title: 'Values',
         type: 'array',
         fieldset: 'section4',
         of: [{ type: 'string' }],
         validation: (Rule) => Rule.required().error('Please add some values'),
      }),

      //Section 5

      defineField({
         name: 'section5Title',
         title: 'Title',
         type: 'string',
         fieldset: 'section5',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section5Content',
         title: 'Content',
         type: 'simpleBlockContent',
         fieldset: 'section5',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section5Image',
         title: 'Image',
         type: 'image',
         options: {
            hotspot: true,
         },
         fieldset: 'section5',
         validation: (Rule) => Rule.required(),
      }),
   ],
})
