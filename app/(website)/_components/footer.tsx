import Logo from '@/components/logo'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import Link from 'next/link'
import navLinks from '@/data/navlinks'

const query = groq`
   *[_type=="contact"][0]
   `

const Footer = async () => {
   const contact: Contact = await client.fetch(query)

   return (
      <footer className="mt-auto w-full bg-gradient-to-br from-slate-300 via-gray-300 to-slate-400 dark:from-slate-800 dark:via-slate-900 dark:to-blue-950 border-t border-gray-200/20 dark:border-gray-700/20">
         <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
               
               {/* Column 1: Company Info & Social */}
               <div className="space-y-6">
                  {/* Logo and Company Name */}
                  <div className="flex items-center space-x-3">
                     <Logo />
                     <div>
                        <div className="text-lg font-bold">
                           <span className="text-blue-600">HQ</span> Paint
                        </div>
                        <div className="text-sm text-muted-foreground">
                           General Construction, LLC
                        </div>
                     </div>
                  </div>

                  {/* License Info */}
                  <div className="text-sm space-y-1">
                     <div className="font-medium text-foreground">Licensed & Bonded</div>
                     <div className="text-muted-foreground">MHIC: #159620</div>
                  </div>

                  {/* Social Media */}
                  <div>
                     <h4 className="text-sm font-medium text-foreground mb-3">Follow Us</h4>
                     <div className="flex gap-4">
                        {contact.facebook && (
                           <a
                              href={contact.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-[#3b5998] transition-colors"
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512"
                                 className="h-5 w-5"
                                 fill="currentColor"
                              >
                                 <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                              </svg>
                           </a>
                        )}

                        {contact.instagram && (
                           <a
                              href={contact.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-[#E1306C] transition-colors"
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 448 512"
                                 className="h-5 w-5"
                                 fill="currentColor"
                              >
                                 <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                              </svg>
                           </a>
                        )}

                        {contact.twitter && (
                           <a
                              href={contact.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-[#00acee] transition-colors"
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512"
                                 className="h-5 w-5"
                                 fill="currentColor"
                              >
                                 <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                              </svg>
                           </a>
                        )}

                        {contact.whatsapp && (
                           <a
                              href={contact.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-[#25D366] transition-colors"
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 448 512"
                                 className="h-5 w-5"
                                 fill="currentColor"
                              >
                                 <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                              </svg>
                           </a>
                        )}
                     </div>
                  </div>
               </div>

               {/* Column 2: Navigation */}
               <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Navigation</h3>
                  <nav className="flex flex-col space-y-2">
                     {navLinks.map((link, i) => (
                        <Link 
                           key={i}
                           href={link.href}
                           className="text-muted-foreground hover:text-blue-600 transition-colors text-sm"
                        >
                           {link.title}
                        </Link>
                     ))}
                  </nav>
               </div>

               {/* Column 3: Contact Info */}
               <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Contact</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                     <div>
                        <a 
                           href={`tel:${contact.phone1}`} 
                           className="hover:text-blue-600 transition-colors block"
                        >
                           {contact.phone1}
                        </a>
                        {contact.phone2 && (
                           <a 
                              href={`tel:${contact.phone2}`} 
                              className="hover:text-blue-600 transition-colors block"
                           >
                              {contact.phone2}
                           </a>
                        )}
                     </div>
                     <a 
                        href={`mailto:${contact.email}`}
                        className="hover:text-blue-600 transition-colors block"
                     >
                        {contact.email}
                     </a>
                     <p className="pt-2">{contact.address}</p>
                  </div>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200/20 dark:border-gray-700/20 mt-12 pt-8">
               <p className="text-center text-sm text-muted-foreground">
                  © {new Date().getFullYear()} HQPaint General Construction, LLC. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
   )
}

export default Footer
