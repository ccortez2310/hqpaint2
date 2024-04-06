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

      {
         name: 'section3',
         title: 'Section 3 (Services)',
         options: {
            collapsible: true,
         },
      },
      {
         name: 'section4',
         title: 'Section 4 (Projects)',
         options: {
            collapsible: true,
         },
      },
      {
         name: 'section5',
         title: 'Section 5 (Choose US)',
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
      defineField({
         name: 'heroImage',
         title: 'Image',
         type: 'image',
         fieldset: 'hero',
         options: {
            hotspot: true,
         },
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
         name: 'section1Image1',
         title: 'Image 1',
         type: 'image',
         fieldset: 'section1',
         options: {
            hotspot: true,
         },
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section1Image2',
         title: 'Image 2',
         type: 'image',
         fieldset: 'section1',
         options: {
            hotspot: true,
         },
         validation: (Rule) => Rule.required(),
      }),

      // Section2
      defineField({
         name: 'section2Title',
         title: 'Title',
         type: 'string',
         fieldset: 'section2',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section2Content',
         title: 'Content',
         type: 'text',
         fieldset: 'section2',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section2Projects',
         title: 'Projects',
         type: 'number',
         fieldset: 'section2',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section2Services',
         title: 'Services',
         type: 'number',
         fieldset: 'section2',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section2Customers',
         title: 'Customers',
         type: 'number',
         fieldset: 'section2',
         validation: (Rule) => Rule.required(),
      }),

      // Section3
      defineField({
         name: 'section3Title',
         title: 'Title',
         type: 'string',
         fieldset: 'section3',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section3Content',
         title: 'Content',
         type: 'text',
         fieldset: 'section3',
         validation: (Rule) => Rule.required(),
      }),

      // Section4
      defineField({
         name: 'section4Title',
         title: 'Title',
         type: 'string',
         fieldset: 'section4',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section4Content',
         title: 'Content',
         type: 'text',
         fieldset: 'section4',
         validation: (Rule) => Rule.required(),
      }),

      // Section5
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
         type: 'text',
         fieldset: 'section5',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section5Item1Title',
         title: 'Reason 1 (Title)',
         type: 'string',
         fieldset: 'section5',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section5Item1Content',
         title: 'Reason 1 (Explanation)',
         type: 'text',
         fieldset: 'section5',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section5Item2Title',
         title: 'Reason 2 (Title)',
         type: 'string',
         fieldset: 'section5',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section5Item2Content',
         title: 'Reason 2 (Explanation)',
         type: 'text',
         fieldset: 'section5',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section5Item3Title',
         title: 'Reason 3 (Title)',
         type: 'string',
         fieldset: 'section5',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section5Item3Content',
         title: 'Reason 3 (Explanation)',
         type: 'text',
         fieldset: 'section5',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'section5Image',
         title: 'Image',
         type: 'image',
         fieldset: 'section5',
         options: {
            hotspot: true,
         },
         validation: (Rule) => Rule.required(),
      }),
   ],
})
