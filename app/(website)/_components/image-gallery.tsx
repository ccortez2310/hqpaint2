'use client'
import React, { FC, useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import { PhotoAlbum } from 'react-photo-album'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'
import Photo from './photo'
import { getNextImages } from '@/utils/utils'
import LightboxImage from './lightbox-image'

interface ImageGalleryProps {
   images: any[]
}

const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
   const [index, setIndex] = useState(-1)

   const photos = getNextImages(images)

   return (
      <>
         <PhotoAlbum
            photos={photos}
            layout="masonry"
            onClick={({ index }) => setIndex(index)}
            defaultContainerWidth={1280}
            renderPhoto={Photo}
            sizes={{ size: 'calc(100vw - 240px)' }}
         />

         <Lightbox
            open={index >= 0}
            close={() => setIndex(-1)}
            slides={photos}
            index={index}
            render={{ slide: LightboxImage }}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
         />
      </>
   )
}

export default ImageGallery
