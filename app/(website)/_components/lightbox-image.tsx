'use client'
import React, { FC } from 'react'
import {
   isImageFitCover,
   isImageSlide,
   useLightboxProps,
} from 'yet-another-react-lightbox'

import Image from 'next/image'

interface LightboxImageProps {
   slide: any
   rect: any
}

const isNextJsImage = (slide: any) => {
   return (
      isImageSlide(slide) &&
      typeof slide.width === 'number' &&
      typeof slide.height === 'number'
   )
}

const LightboxImage: FC<LightboxImageProps> = ({ slide, rect }) => {
   const { imageFit } = useLightboxProps().carousel
   const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit)

   if (!isNextJsImage(slide)) return null

   const width = !cover
      ? Math.round(
           Math.min(rect.width, (rect.height / slide.height) * slide.width),
        )
      : rect.width

   const height = !cover
      ? Math.round(
           Math.min(rect.height, (rect.width / slide.width) * slide.height),
        )
      : rect.height

   return (
      <div style={{ position: 'relative', width, height }}>
         <Image
            fill
            alt=""
            src={slide}
            loading="eager"
            draggable={false}
            placeholder={slide.blurDataURL ? 'blur' : undefined}
            style={{ objectFit: cover ? 'cover' : 'contain' }}
            sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
         />
      </div>
   )
}

export default LightboxImage
