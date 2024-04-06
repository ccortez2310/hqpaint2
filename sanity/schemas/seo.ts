import { defineField, defineType } from 'sanity'

export default defineType({
   name: 'seo',
   title: 'SEO',
   type: 'document',
   fieldsets: [
      {
         name: 'home',
         title: 'Home Page',
         options: {
            collapsible: true,
         },
      },
      {
         name: 'about',
         title: 'About Page',
         options: {
            collapsible: true,
         },
      },
      {
         name: 'services',
         title: 'Services Page',
         options: {
            collapsible: true,
         },
      },
      {
         name: 'projects',
         title: 'Projects Page',
         options: {
            collapsible: true,
         },
      },
      {
         name: 'contact',
         title: 'Contact Page',
         options: {
            collapsible: true,
         },
      },
   ],
   fields: [
      // Home
      defineField({
         name: 'homeTitle',
         title: 'Title',
         type: 'string',
         fieldset: 'home',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'homeDescription',
         title: 'Description',
         type: 'text',
         fieldset: 'home',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'homeImage',
         title: 'Image',
         type: 'image',
         fieldset: 'home',
         options: {
            hotspot: true,
         },
      }),

      // About
      defineField({
         name: 'aboutTitle',
         title: 'Title',
         type: 'string',
         fieldset: 'about',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'aboutDescription',
         title: 'Description',
         type: 'text',
         fieldset: 'about',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'aboutImage',
         title: 'Image',
         type: 'image',
         fieldset: 'about',
         options: {
            hotspot: true,
         },
      }),

      //Services
      defineField({
         name: 'servicesTitle',
         title: 'Title',
         type: 'string',
         fieldset: 'services',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'servicesDescription',
         title: 'Description',
         type: 'text',
         fieldset: 'services',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'servicesImage',
         title: 'Image',
         type: 'image',
         fieldset: 'services',
         options: {
            hotspot: true,
         },
      }),

      //Projects
      defineField({
         name: 'projectsTitle',
         title: 'Title',
         type: 'string',
         fieldset: 'projects',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'projectsDescription',
         title: 'Description',
         type: 'text',
         fieldset: 'projects',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'projectsImage',
         title: 'Image',
         type: 'image',
         fieldset: 'projects',
         options: {
            hotspot: true,
         },
      }),

      //Contact
      defineField({
         name: 'contactTitle',
         title: 'Title',
         type: 'string',
         fieldset: 'contact',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'contactDescription',
         title: 'Description',
         type: 'text',
         fieldset: 'contact',
         validation: (Rule) => Rule.required(),
      }),
      defineField({
         name: 'contactImage',
         title: 'Image',
         type: 'image',
         fieldset: 'contact',
         options: {
            hotspot: true,
         },
      }),
   ],
})
