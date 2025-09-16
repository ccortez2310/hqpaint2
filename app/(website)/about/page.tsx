import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { Metadata } from 'next'
import { groq } from 'next-sanity'
import React from 'react'
import Breadcrumbs from '../_components/breadcrumbs'
import { RichTextComponents } from '@/components/rich-text-components'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import ValueCard from '../_components/value-card'
import { ContactBanner } from '../_components/contact-banner'
import { Users, CheckCircle, Clock, Shield, Target, ArrowRight, Eye, Lightbulb, TrendingUp, Heart, Star, Award, UserCheck, MapPin, Mail } from 'lucide-react'

const domain = process.env.NEXT_PUBLIC_APP_DOMAIN

export const revalidate = 0

const seoQuery = groq`*[_type=='seo'][0]`
const aboutQuery = groq`*[_type=='about'][0]`

export async function generateMetadata(): Promise<Metadata> {
   const seo: SEO = await client.fetch(seoQuery)

   return {
      title: seo.aboutTitle,
      description: seo.aboutDescription,
      openGraph: {
         type: 'website',
         title: seo.aboutTitle,
         description: seo.aboutDescription,
         url: `${domain}/about`,
         images:
            seo.aboutImage != undefined
               ? [urlForImage(seo.aboutImage).url()]
               : [],
      },
   }
}

const Page = async () => {
   const about: About = await client.fetch(aboutQuery)
   const contactQuery = groq`*[_type=='contact'][0]`
   const contact: Contact = await client.fetch(contactQuery)

   const breadcrumbs = [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
   ]

   return (
      <>
         <div className="bg-background py-8 px-4 lg:px-6">
            <div className="mx-auto max-w-screen-xl">
               <Breadcrumbs links={breadcrumbs} />
            </div>
         </div>
         {/* Section 1 */}
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
                           <Users className="w-4 h-4 text-blue-600 mr-2" />
                           <span className="text-sm font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                              Our Story
                           </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
                              {about.section1Title}
                           </span>
                        </h2>
                     </div>

                     {/* Content */}
                     <div className="prose prose-lg dark:prose-invert max-w-none animate-in slide-in-from-left delay-300 duration-700">
                        <PortableText
                           value={about.section1Content}
                           components={RichTextComponents}
                        />
                     </div>

                     {/* Stats or Features could go here if needed */}
                     <div className="flex flex-wrap gap-4 animate-in slide-in-from-left delay-450 duration-700">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow duration-300">
                           <div className="flex items-center space-x-3">
                              <div className="p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                 <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                 <div className="text-lg font-bold text-gray-900 dark:text-white">
                                    Licensed & Bonded
                                 </div>
                                 <div className="text-sm text-gray-600 dark:text-gray-300">
                                    Fully Certified
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow duration-300">
                           <div className="flex items-center space-x-3">
                              <div className="p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                 <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                 <div className="text-lg font-bold text-gray-900 dark:text-white">
                                    10+ Years
                                 </div>
                                 <div className="text-sm text-gray-600 dark:text-gray-300">
                                    Experience
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Image Section - Takes 2 columns with modern styling */}
                  <div className="lg:col-span-2 relative">
                     <div className="relative animate-in slide-in-from-right delay-300 duration-700">
                        {/* Main image */}
                        <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                           <Image
                              src={urlForImage(about.section1Image).url()}
                              className="object-cover object-center"
                              alt={about.section1Title}
                              fill
                           />
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-700 animate-in slide-in-from-bottom delay-900 duration-700">
                           <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                                 <Shield className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                 <div className="text-lg font-bold text-gray-900 dark:text-white">
                                    Quality Guaranteed
                                 </div>
                                 <div className="text-sm text-gray-600 dark:text-gray-300">
                                    100% Satisfaction
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
         {/* Section 2 (Mission) */}
         <section className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-background py-16 lg:py-24 px-4 lg:px-6 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
               <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-100/30 dark:bg-cyan-900/20 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative mx-auto max-w-7xl">
               <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12 items-center">

                  {/* Image Section - Takes 2.5 columns, ordered first on mobile */}
                  <div className="lg:col-span-3 relative order-2 lg:order-1">
                     <div className="animate-in slide-in-from-left delay-150 duration-700">
                        {/* Main image */}
                        <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                           <Image
                              src={urlForImage(about.missionImage).url()}
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                              alt="Mission"
                              fill
                           />

                           {/* Image overlay */}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                           {/* Mission badge overlay */}
                           <div className="absolute bottom-6 left-6 right-6">
                              <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-6 rounded-2xl">
                                 <div className="flex items-center justify-between">
                                    <div>
                                       <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                                          Our Focus
                                       </div>
                                       <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                          Mission-Driven Excellence
                                       </h3>
                                       <p className="text-sm text-gray-600 dark:text-gray-300">
                                          Quality & customer satisfaction
                                       </p>
                                    </div>
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                                       <Target className="w-6 h-6 text-white" />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Quality indicator */}
                           <div className="absolute top-6 right-6">
                              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                 🎯 Mission First
                              </div>
                           </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 opacity-20">
                           <div className="grid grid-cols-6 gap-2 transform -rotate-12">
                              {[...Array(36)].map((_, i) => (
                                 <div
                                    key={i}
                                    className="w-2 h-2 bg-cyan-600 rounded-full"
                                 ></div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Content Section - Takes 3 columns */}
                  <div className="lg:col-span-3 space-y-8 order-1 lg:order-2">
                     {/* Header */}
                     <div className="space-y-4 animate-in slide-in-from-right delay-300 duration-700">
                        <div className="inline-flex items-center px-4 py-2 bg-cyan-50 dark:bg-cyan-950/30 rounded-full">
                           <Target className="w-4 h-4 text-cyan-600 mr-2" />
                           <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300 uppercase tracking-wide">
                              Our Mission
                           </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-700">
                              Mission
                           </span>
                        </h2>
                     </div>

                     {/* Mission Content */}
                     <div className="animate-in slide-in-from-right delay-450 duration-700">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                           <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                              {about.mission}
                           </p>
                        </div>
                     </div>

                     {/* Mission highlights */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in slide-in-from-right delay-600 duration-700">
                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                           <div className="flex items-center space-x-3">
                              <div className="p-2 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                 <CheckCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                              </div>
                              <div>
                                 <div className="text-sm font-bold text-gray-900 dark:text-white">
                                    Quality First
                                 </div>
                                 <div className="text-xs text-gray-600 dark:text-gray-300">
                                    Excellence in every project
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 rounded-xl border border-gray-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                           <div className="flex items-center space-x-3">
                              <div className="p-2 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                 <Users className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                              </div>
                              <div>
                                 <div className="text-sm font-bold text-gray-900 dark:text-white">
                                    Customer Focus
                                 </div>
                                 <div className="text-xs text-gray-600 dark:text-gray-300">
                                    Your satisfaction matters
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Section 3 (Vision) */}
         <section className="relative bg-background py-16 lg:py-24 px-4 lg:px-6 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
               <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-100/20 dark:bg-indigo-900/10 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100/20 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative mx-auto max-w-7xl">
               <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                  {/* Content Section - Takes 3 columns */}
                  <div className="lg:col-span-3 space-y-8">
                     {/* Header */}
                     <div className="space-y-4 animate-in slide-in-from-left delay-150 duration-700">
                        <div className="inline-flex items-center px-4 py-2 bg-cyan-50 dark:bg-cyan-950/30 rounded-full">
                           <Eye className="w-4 h-4 text-cyan-600 mr-2" />
                           <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300 uppercase tracking-wide">
                              Our Vision
                           </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
                              Vision
                           </span>
                        </h2>
                     </div>

                     {/* Vision Content */}
                     <div className="prose prose-lg dark:prose-invert max-w-none animate-in slide-in-from-left delay-300 duration-700">
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                           {about.vision}
                        </p>
                     </div>

                     {/* Vision highlights */}
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in slide-in-from-left delay-450 duration-700">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow duration-300">
                           <div className="flex items-center space-x-3">
                              <div className="p-2 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg">
                                 <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                              </div>
                              <div>
                                 <div className="text-lg font-bold text-gray-900 dark:text-white">
                                    Innovation
                                 </div>
                                 <div className="text-sm text-gray-600 dark:text-gray-300">
                                    Forward thinking
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow duration-300">
                           <div className="flex items-center space-x-3">
                              <div className="p-2 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg">
                                 <TrendingUp className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                              </div>
                              <div>
                                 <div className="text-lg font-bold text-gray-900 dark:text-white">
                                    Growth
                                 </div>
                                 <div className="text-sm text-gray-600 dark:text-gray-300">
                                    Continuous improvement
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow duration-300">
                           <div className="flex items-center space-x-3">
                              <div className="p-2 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg">
                                 <Eye className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                              </div>
                              <div>
                                 <div className="text-lg font-bold text-gray-900 dark:text-white">
                                    Future Focus
                                 </div>
                                 <div className="text-sm text-gray-600 dark:text-gray-300">
                                    Long-term perspective
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Image Section - Takes 2 columns with modern styling */}
                  <div className="lg:col-span-2 relative">
                     <div className="relative animate-in slide-in-from-right delay-300 duration-700">
                        {/* Main image */}
                        <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                           <Image
                              src={urlForImage(about.visionImage).url()}
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                              alt="Vision"
                              fill
                           />

                           {/* Image overlay */}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                           {/* Vision badge overlay */}
                           <div className="absolute bottom-6 left-6 right-6">
                              <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-6 rounded-2xl">
                                 <div className="flex items-center justify-between">
                                    <div>
                                       <div className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-1">
                                          Looking Ahead
                                       </div>
                                       <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                          Future-Ready Solutions
                                       </h3>
                                       <p className="text-sm text-gray-600 dark:text-gray-300">
                                          Innovation meets tradition
                                       </p>
                                    </div>
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                                       <Eye className="w-6 h-6 text-white" />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Innovation indicator */}
                           <div className="absolute top-6 right-6">
                              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                 🔮 Visionary
                              </div>
                           </div>
                        </div>


                        {/* Decorative dots */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20">
                           <div className="grid grid-cols-6 gap-2 transform rotate-45">
                              {[...Array(36)].map((_, i) => (
                                 <div
                                    key={i}
                                    className="w-2 h-2 bg-indigo-600 rounded-full"
                                 ></div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Section 4 (values) */}
         <section className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-background py-16 lg:py-24 px-4 lg:px-6 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
               <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-100/30 dark:bg-cyan-900/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative mx-auto max-w-7xl">
               {/* Header Section */}
               <div className="text-center space-y-4 mb-16 animate-in slide-in-from-top delay-150 duration-700">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-full">
                     <Heart className="w-4 h-4 text-blue-600 mr-2" />
                     <span className="text-sm font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                        Our Values
                     </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
                        Values
                     </span>
                  </h2>

                  <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                     The core principles that guide everything we do and define who we are as a company.
                  </p>
               </div>

               {/* Values Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom delay-300 duration-700">
                  {about.values.map((value: string, index: number) => {
                     const icons = [Heart, Star, Award, Shield, CheckCircle, Target];
                     const IconComponent = icons[index % icons.length];

                     return (
                        <div
                           key={value}
                           className="group relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-200 dark:hover:border-blue-700"
                        >
                           {/* Icon */}
                           <div className="w-16 h-16 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                           </div>

                           {/* Content */}
                           <div>
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                 {value}
                              </h3>

                              {/* Decorative line */}
                              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:w-20 transition-all duration-300"></div>
                           </div>

                           {/* Hover effect background */}
                           <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                           {/* Corner decoration */}
                           <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                     );
                  })}
               </div>

               {/* Bottom decorative section */}
               <div className="mt-16 text-center animate-in slide-in-from-bottom delay-600 duration-700">
                  <div className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-50 dark:bg-blue-950/30 rounded-full">
                     <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                     <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                        These values drive our commitment to excellence
                     </span>
                  </div>
               </div>
            </div>
         </section>

         {/* Section 5 (Team/Owner) */}
         <section className="relative bg-background py-16 lg:py-24 px-4 lg:px-6 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
               <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
               <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-100/20 dark:bg-cyan-900/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative mx-auto max-w-7xl">
               <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                  {/* Content Section - Takes 3 columns */}
                  <div className="lg:col-span-3 space-y-8">
                     {/* Header */}
                     <div className="space-y-4 animate-in slide-in-from-left delay-150 duration-700">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-full">
                           <UserCheck className="w-4 h-4 text-blue-600 mr-2" />
                           <span className="text-sm font-medium text-blue-700 dark:text-blue-300 uppercase tracking-wide">
                              Meet The Team
                           </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700">
                              {about.section5Title}
                           </span>
                        </h2>
                     </div>

                     {/* Content */}
                     <div className="prose prose-lg dark:prose-invert max-w-none animate-in slide-in-from-left delay-300 duration-700">
                        <PortableText
                           value={about.section5Content}
                           components={RichTextComponents}
                        />
                     </div>

                     {/* Team highlights */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in slide-in-from-left delay-450 duration-700">
                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow duration-300">
                           <div className="flex items-center space-x-3">
                              <div className="p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                 <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                 <div className="text-lg font-bold text-gray-900 dark:text-white">
                                    Experienced Leadership
                                 </div>
                                 <div className="text-sm text-gray-600 dark:text-gray-300">
                                    Proven track record
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow duration-300">
                           <div className="flex items-center space-x-3">
                              <div className="p-2 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                 <Heart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                              </div>
                              <div>
                                 <div className="text-lg font-bold text-gray-900 dark:text-white">
                                    Customer Focused
                                 </div>
                                 <div className="text-sm text-gray-600 dark:text-gray-300">
                                    Your satisfaction first
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Image Section - Takes 2 columns with modern styling */}
                  <div className="lg:col-span-2 relative">
                     <div className="relative animate-in slide-in-from-right delay-300 duration-700">
                        {/* Main image - Changed from circular to rounded rectangle */}
                        <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
                           <Image
                              src={urlForImage(about.section5Image).url()}
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                              alt={about.section5Title}
                              fill
                           />

                           {/* Image overlay */}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                           {/* Team info badge overlay */}
                           <div className="absolute bottom-6 left-6 right-6">
                              <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm p-6 rounded-2xl">
                                 <div className="flex items-center justify-between">
                                    <div>
                                       <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                                          Leadership
                                       </div>
                                       <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                          Professional Excellence
                                       </h3>
                                       <p className="text-sm text-gray-600 dark:text-gray-300">
                                          Dedicated to quality service
                                       </p>
                                    </div>
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                                       <UserCheck className="w-6 h-6 text-white" />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Professional badge */}
                           <div className="absolute top-6 right-6">
                              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                 👨‍💼 Professional
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

         {/* Contact Section */}
         <ContactBanner contact={contact} />
      </>
   )
}

export default Page
