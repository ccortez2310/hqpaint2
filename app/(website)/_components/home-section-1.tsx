import { RichTextComponents } from '@/components/rich-text-components'
import { Button } from '@/components/ui/button'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import React, { FC } from 'react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import { CheckCircle, Users, Calendar, Award } from 'lucide-react'

type HomeSection1Props = {
   home: Home
}

const HomeSection1: FC<HomeSection1Props> = ({ home }) => {
   const stats = [
      { icon: Calendar, value: '10+', label: 'Years Experience' },
      { icon: Users, value: '500+', label: 'Happy Clients' },
      { icon: Award, value: '100%', label: 'Licensed & Bonded' },
   ]

   return (
      <section className="relative bg-background py-16 lg:py-24 px-4 lg:px-6 overflow-hidden">
         {/* Background decorative elements */}
         <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-100/20 dark:bg-cyan-900/10 rounded-full blur-3xl"></div>
         </div>

         <div className="relative mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
               {/* Content Section - Takes 3 columns */}
               <div className="lg:col-span-3 space-y-8">
                  {/* Header */}
                  <div className="space-y-4 animate-in slide-in-from-left delay-150 duration-700">
                     <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-full">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                        <span className="text-sm font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                           {home.section1Title}
                        </span>
                     </div>

                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
                           {home.section1Subtitle}
                        </span>
                     </h2>
                  </div>

                  {/* Content */}
                  <div className="prose prose-lg dark:prose-invert max-w-none animate-in slide-in-from-left delay-300 duration-700">
                     <PortableText
                        value={home.section1Content}
                        components={RichTextComponents}
                     />
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in slide-in-from-left delay-450 duration-700">
                     {stats.map((stat, index) => (
                        <div
                           key={index}
                           className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow duration-300"
                        >
                           <div className="flex items-center space-x-3">
                              <div className="p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                 <stat.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                 <div className="text-lg font-bold text-gray-900 dark:text-white">
                                    {stat.value}
                                 </div>
                                 <div className="text-sm text-gray-600 dark:text-gray-300">
                                    {stat.label}
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

                  {/* CTA Button */}
                  <div className="animate-in slide-in-from-left delay-600 duration-700">
                     <Button
                        asChild
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                     >
                        <Link
                           href="/about"
                           className="flex items-center space-x-2"
                        >
                           <span>Learn More About Us</span>
                           <CheckCircle className="w-5 h-5" />
                        </Link>
                     </Button>
                  </div>
               </div>

               {/* Image Section - Takes 2 columns with overlap */}
               <div className="lg:col-span-2 relative">
                  <div className="relative animate-in slide-in-from-right delay-300 duration-700">
                     {/* Main image */}
                     <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                           src={urlForImage(home.section1Image).url()}
                           className="object-cover object-center"
                           alt={home.section1Title}
                           fill
                        />
                     </div>

                     {/* Floating badge */}
                     <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 animate-in slide-in-from-bottom delay-900 duration-700">
                        <div className="flex items-center space-x-4">
                           <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                              <Award className="w-6 h-6 text-white" />
                           </div>
                           <div>
                              <div className="text-lg font-bold text-gray-900 dark:text-white">
                                 Licensed & Bonded
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-300">
                                 MHIC: #159620
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Decorative dots */}
                     <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20">
                        <div className="grid grid-cols-6 gap-2 transform rotate-12">
                           {[...Array(36)].map((_, i) => (
                              <div
                                 key={i}
                                 className="w-2 h-2 bg-blue-600 rounded-full"
                              ></div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HomeSection1
