import { defineField, defineType } from 'sanity'

export default defineType({
   name: 'contact',
   title: 'Contact',
   type: 'document',
   fieldsets: [
      {
         name: 'contact',
         title: 'Contact Info',
      },
      {
         name: 'social',
         title: 'Social media',
      },
   ],
   fields: [
      defineField({
         name: 'email',
         title: 'Email',
         type: 'string',
         fieldset: 'contact',
         validation: (Rule) =>
            Rule.required().error('Please add a contact email'),
      }),
      defineField({
         name: 'phone1',
         title: 'Phone 1',
         type: 'string',
         fieldset: 'contact',
         validation: (Rule) =>
            Rule.required().error('Please add a contact phone'),
      }),
      defineField({
         name: 'phone2',
         title: 'Phone 2',
         type: 'string',
         fieldset: 'contact',
      }),
      defineField({
         name: 'address',
         title: 'Address',
         type: 'text',
         fieldset: 'contact',
      }),
      defineField({
         name: 'maplink',
         title: 'Map link',
         type: 'url',
         fieldset: 'contact',
      }),
      defineField({
         name: 'facebook',
         title: 'Facebook',
         type: 'url',
         fieldset: 'social',
      }),
      defineField({
         name: 'instagram',
         title: 'Instagram',
         type: 'url',
         fieldset: 'social',
      }),
      defineField({
         name: 'twitter',
         title: 'Twitter',
         type: 'url',
         fieldset: 'social',
      }),
      defineField({
         name: 'whatsapp',
         title: 'WhatsApp',
         type: 'url',
         fieldset: 'social',
      }),
   ],
})
