'use client'
import { Button } from '@/components/ui/button'
import { urlForImage } from '@/sanity/lib/image'
import { CheckCircle, Palette, PaintBucket, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

type HeroSectionProps = {
   home: Home
}

const HeroSection: FC<HeroSectionProps> = ({ home }) => {
   const trustIndicators = [
      { icon: CheckCircle, text: "Licensed & Insured" },
      { icon: Users, text: "200+ Happy Clients" }
   ]

   return (
      <section className="relative min-h-screen flex items-center overflow-hidden">
         {/* Full-width Background Image */}
         <div className="absolute inset-0">
            {home.section1Image && (
               <Image
                  src={urlForImage(home.section1Image).url()}
                  alt="Professional Painting Background"
                  fill
                  className="object-cover"
                  priority
               />
            )}
         </div>

         {/* Diagonal Overlay - Responsive */}
         <div className="absolute inset-0">
            {/* Mobile Overlay */}
            <div 
               className="h-full bg-gradient-to-b from-slate-900/95 via-blue-900/90 to-slate-800/80 md:hidden"
            ></div>
            
            {/* Desktop Diagonal Overlay */}
            <div 
               className="h-full bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-800/80 hidden md:block"
               style={{
                  clipPath: 'polygon(0 0, 60% 0, 45% 100%, 0 100%)'
               }}
            ></div>
         </div>
         
         <div className="relative z-10 h-full flex items-center">
            {/* Mobile Layout */}
            <div className="w-full px-6 text-center md:hidden">
               {/* Badge */}
               <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium backdrop-blur-sm mb-6 animate-in slide-in-from-bottom delay-75 duration-500">
                  <Palette className="w-4 h-4 mr-2" />
                  Professional Painting Services
               </div>
               
               {/* Main Heading */}
               <div className="mb-8">
                  <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white animate-in slide-in-from-bottom delay-150 duration-700">
                     Transform Your Space with 
                     <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                        Expert Painting
                     </span>
                  </h1>
               </div>

               {/* CTA Buttons - Stacked on Mobile */}
               <div className="flex flex-col gap-4 mb-8 animate-in slide-in-from-bottom delay-300 duration-700">
                  <Button 
                     asChild 
                     size="lg" 
                     className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                     <Link href="/contact">Get Free Estimate</Link>
                  </Button>
                  <Button 
                     asChild 
                     variant="outline" 
                     size="lg"
                     className="border-2 border-white/90 text-white bg-white/10 hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
                  >
                     <Link href="/services">View Our Work</Link>
                  </Button>
               </div>

               {/* Trust Indicators - Stacked on Mobile */}
               <div className="flex flex-col gap-4 animate-in slide-in-from-bottom delay-500 duration-700">
                  {trustIndicators.map((item, index) => (
                     <div key={index} className="flex items-center justify-center space-x-3 text-slate-200">
                        <item.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-sm font-medium">{item.text}</span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Desktop Layout */}
            <div className="w-full max-w-4xl px-8 sm:px-12 lg:px-16 hidden md:block">
               {/* Badge */}
               <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium backdrop-blur-sm mb-6 animate-in slide-in-from-left delay-75 duration-500">
                  <Palette className="w-4 h-4 mr-2" />
                  Professional Painting Services
               </div>
               
               {/* Main Heading */}
               <div className="mb-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white animate-in slide-in-from-left delay-150 duration-700">
                     Transform Your Space with 
                     <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                        Expert Painting
                     </span>
                  </h1>
                  
                  {/* Secondary Text */}
                  <p className="text-xl text-slate-200 leading-relaxed mt-6 animate-in slide-in-from-left delay-250 duration-700">
                     Premium painting services for residential and commercial spaces. Quality craftsmanship, lasting results, guaranteed satisfaction.
                  </p>
               </div>

               {/* CTA Buttons */}
               <div className="flex flex-row gap-4 mb-8 animate-in slide-in-from-left delay-400 duration-700">
                  <Button 
                     asChild 
                     size="lg" 
                     className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                     <Link href="/contact">Get Free Estimate</Link>
                  </Button>
                  <Button 
                     asChild 
                     variant="outline" 
                     size="lg"
                     className="border-2 border-white/90 text-white bg-white/10 hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
                  >
                     <Link href="/services">View Our Work</Link>
                  </Button>
               </div>

               {/* Trust Indicators */}
               <div className="flex flex-row gap-8 animate-in slide-in-from-left delay-600 duration-700">
                  {trustIndicators.map((item, index) => (
                     <div key={index} className="flex items-center space-x-3 text-slate-200">
                        <item.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-sm font-medium">{item.text}</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default HeroSection