import React, { FC } from 'react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'
import RatingStars from './rating-stars'

type TestimonialCardProps = {
   testimonial: Testimonial
}

const TestimonialCard: FC<TestimonialCardProps> = ({ testimonial }) => {
   return (
      <div className="flex flex-col min-h-full bg-background rounded-2xl dark:border border-gray-700 shadow-lg h-full">
         <div className="relative pt-10 px-5 bg-gradient-to-t from-primary to-gray-700 rounded-t-2xl">
            <svg
               aria-hidden="true"
               width="105"
               height="78"
               className="absolute top-6 left-6 fill-gray-600"
            >
               <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
            </svg>
            <div className="relative mb-6">
               <p className="text-lg tracking-tight text-gray-200 text-center line-clamp-5">
                  {testimonial.comment}
               </p>
            </div>

            <div className="flex justify-center -mb-7">
               <div className="overflow-hidden rounded-full">
                  {testimonial.photo ? (
                     <Image
                        src={urlForImage(testimonial.photo).url()}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="h-14 w-14 object-cover"
                        loading="lazy"
                        decoding="async"
                        style={{ color: 'transparent' }}
                     />
                  ) : (
                     // eslint-disable-next-line @next/next/no-img-element
                     <img
                        className="object-cover w-14 h-14 rounded-full"
                        src={`https://ui-avatars.com/api/?name=${testimonial.name}&background=b2e7ff&color=0068fe`}
                        alt={testimonial.name}
                     />
                  )}
               </div>
            </div>
         </div>

         <div className="p-5 mt-7">
            <div className="flex flex-col items-center">
               <div className="flex gap-2">
                  <RatingStars rating={testimonial.rating} />
               </div>
               <div className="font-bold text-foreground text-base lg:text-lg mt-5">
                  {testimonial.name}
               </div>
            </div>
         </div>
      </div>
   )
}

export default TestimonialCard
