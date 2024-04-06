import {
   EarthGlobeIcon,
   ClipboardIcon,
   HomeIcon,
   UsersIcon,
} from '@sanity/icons'

export const structure = (S: any) =>
   S.list()
      .title('Menu')
      .items([
         ...S.documentTypeListItems().filter(
            (item: any) =>
               item.getId() !== 'contact' &&
               item.getId() !== 'home' &&
               item.getId() !== 'about' &&
               item.getId() !== 'seo',
         ),
         S.divider(),
         S.listItem()
            .title('Home')
            .icon(HomeIcon)
            .child(S.document().schemaType('home').documentId('home')),
         S.listItem()
            .title('About')
            .icon(UsersIcon)
            .child(S.document().schemaType('about').documentId('about')),
         S.listItem()
            .title('Contact')
            .icon(ClipboardIcon)
            .child(S.document().schemaType('contact').documentId('contact')),
         S.divider(),
         S.listItem()
            .title('SEO')
            .icon(EarthGlobeIcon)
            .child(S.document().schemaType('seo').documentId('seo')),
      ])
