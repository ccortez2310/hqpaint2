import { defineField, defineType } from 'sanity'

export default defineType({
   name: 'home',
   title: 'Home',
   type: 'document',
   fieldsets: [
      {
         name: 'hero',
         title: 'Hero Section',
         options: {
            collapsible: true,
         },
      },
      {
         name: 'section1',
         title: 'Section 1',
         options: {
            collapsible: true,
         },
      },
      {
         name: 'section2',
         title: 'Section 2 (Metrics)',
         options: {
            collapsible: true,
         },
      },
   ],
   fields: [
      // Hero
      defineField({
         name: 'heroTitle',
         title: 'Title',
         type: 'string',
         fieldset: 'hero',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'heroContent',
         title: 'Content',
         type: 'text',
         fieldset: 'hero',
         validation: (Rule) => Rule.required(),
      }),

      // Section 1
      defineField({
         name: 'section1Title',
         title: 'Title',
         type: 'string',
         fieldset: 'section1',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section1Subtitle',
         title: 'Subtitle',
         type: 'string',
         fieldset: 'section1',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section1Content',
         title: 'Content',
         type: 'simpleBlockContent',
         fieldset: 'section1',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section1Image',
         title: 'Image',
         type: 'image',
         fieldset: 'section1',
         options: {
            hotspot: true,
         },
         validation: (Rule) => Rule.required(),
      }),
   ],
})
