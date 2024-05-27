export const getImageSizes = (url: string) => {
   const match = url.match(/-(\d+)x(\d+)\./)

   if (!match) {
      return null
   }

   return {
      width: parseInt(match[1]),
      height: parseInt(match[2]),
   }
}

const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48]

export const getNextImages = (images: NextImage[]) => {
   const photos = images.map((photo) => {
      const width = breakpoints[0]
      const height = (photo.height / photo.width) * width

      return {
         src: photo.src,
         width,
         height,
         srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint)
            return {
               src: photo.src,
               width: breakpoint,
               height,
            }
         }),
      }
   })

   return photos
}
