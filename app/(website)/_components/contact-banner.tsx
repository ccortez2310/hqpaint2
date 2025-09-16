import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Phone, Mail, Palette, ArrowRight } from 'lucide-react'

export const ContactBanner = () => {
   return (
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 py-16 lg:py-24 px-4 lg:px-6 overflow-hidden">
         {/* Background decorative elements */}
         <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
         </div>

         <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
               
               {/* Content Section */}
               <div className="text-center lg:text-left space-y-6">
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                     <Palette className="w-4 h-4 text-white mr-2" />
                     <span className="text-sm font-medium text-white uppercase tracking-wide">
                        Start Your Project
                     </span>
                  </div>

                  {/* Main Heading */}
                  <div className="space-y-4">
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Ready to Transform
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200">
                           Your Space?
                        </span>
                     </h2>
                     
                     <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                        Get your free, no-obligation estimate today and discover how our expert painting services can bring your vision to life.
                     </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 py-6">
                     <div className="text-center lg:text-left">
                        <div className="text-3xl font-bold text-white">24h</div>
                        <div className="text-sm text-blue-200">Quick Response</div>
                     </div>
                     <div className="text-center lg:text-left">
                        <div className="text-3xl font-bold text-white">100%</div>
                        <div className="text-sm text-blue-200">Satisfaction</div>
                     </div>
                  </div>
               </div>

               {/* CTA Section */}
               <div className="space-y-8">
                  {/* Main CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                     <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 text-base font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        <Link href="/contact" className="flex items-center space-x-2">
                           <Palette className="w-4 h-4" />
                           <span>Get Free Estimate</span>
                        </Link>
                     </Button>
                     
                     <Button asChild size="lg" variant="outline" className="border-2 border-white/80 text-white bg-white/10 hover:bg-white hover:text-blue-600 px-6 py-3 text-base font-semibold rounded-full backdrop-blur-sm transition-all duration-300">
                        <Link href="/services" className="flex items-center space-x-2">
                           <span>View Our Services</span>
                           <ArrowRight className="w-4 h-4" />
                        </Link>
                     </Button>
                  </div>

                  {/* Contact Methods */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                     <h3 className="text-lg font-semibold text-white mb-4">Or contact us directly</h3>
                     <div className="space-y-3">
                        <a href="tel:(555) 123-4567" className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors group">
                           <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                              <Phone className="w-5 h-5" />
                           </div>
                           <span className="font-medium">(555) 123-4567</span>
                        </a>
                        <a href="mailto:info@hqpaint.com" className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors group">
                           <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                              <Mail className="w-5 h-5" />
                           </div>
                           <span className="font-medium">info@hqpaint.com</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}