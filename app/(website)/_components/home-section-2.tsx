import { RichTextComponents } from '@/components/rich-text-components'
import { Button } from '@/components/ui/button'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import React, { FC } from 'react'
import Image from 'next/image'
import { ArrowRight, Palette, Home, Building, Sparkles } from 'lucide-react'

type HomeSection2Props = {
   home: Home
}

const HomeSection2: FC<HomeSection2Props> = ({ home }) => {
   const projectCategories = [
      { icon: Home, title: "Residential", count: "200+" },
      { icon: Building, title: "Commercial", count: "150+" },
      { icon: Palette, title: "Interior", count: "300+" },
      { icon: Sparkles, title: "Premium", count: "100+" }
   ]

   return (
      <section className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-background py-16 lg:py-24 px-4 lg:px-6 overflow-hidden">
         {/* Background decorative elements */}
         <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-100/30 dark:bg-cyan-900/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
         </div>

         <div className="relative mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12 items-center">
               
               {/* Gallery Section - Takes 2.5 columns */}
               <div className="lg:col-span-3 relative">
                  <div className="animate-in slide-in-from-left delay-150 duration-700">
                     {/* Main featured image */}
                     <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                        <Image
                           src={urlForImage(home.section2Image).url()}
                           className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                           alt="Featured Project"
                           fill
                        />
                        
                        {/* Image overlay with category info */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        {/* Floating project info */}
                        <div className="absolute bottom-6 left-6 right-6">
                           <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-6 rounded-2xl">
                              <div className="flex items-center justify-between">
                                 <div>
                                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                                       Featured Project
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                       Premium Interior Painting
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                       Complete home transformation
                                    </p>
                                 </div>
                                 <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                                    <ArrowRight className="w-6 h-6 text-white" />
                                 </div>
                              </div>
                           </div>
                        </div>

                        {/* Quality badge */}
                        <div className="absolute top-6 right-6">
                           <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                              ⭐ Premium Quality
                           </div>
                        </div>
                     </div>

                     {/* Project categories grid */}
                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6 animate-in slide-in-from-left delay-450 duration-700">
                        {projectCategories.map((category, index) => (
                           <div key={index} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                              <div className="text-center">
                                 <div className="w-12 h-12 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                    <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                 </div>
                                 <div className="text-lg font-bold text-gray-900 dark:text-white">
                                    {category.count}
                                 </div>
                                 <div className="text-sm text-gray-600 dark:text-gray-300">
                                    {category.title}
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Content Section - Takes 3 columns */}
               <div className="lg:col-span-3 space-y-8">
                  {/* Header */}
                  <div className="space-y-4 animate-in slide-in-from-right delay-300 duration-700">
                     <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
                           {home.section2Title}
                        </span>
                     </h2>
                  </div>

                  {/* Content */}
                  <div className="prose prose-lg dark:prose-invert max-w-none animate-in slide-in-from-right delay-450 duration-700">
                     <PortableText
                        value={home.section2Content}
                        components={RichTextComponents}
                     />
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-right delay-600 duration-700">
                     <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <Link href="/projects" className="flex items-center space-x-2">
                           <span>View Our Portfolio</span>
                           <ArrowRight className="w-5 h-5" />
                        </Link>
                     </Button>
                     
                     <Button asChild variant="outline" size="lg" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300">
                        <Link href="/contact" className="flex items-center space-x-2">
                           <span>Get Quote</span>
                           <Palette className="w-5 h-5" />
                        </Link>
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default HomeSection2
