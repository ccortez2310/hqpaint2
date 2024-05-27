import Image from 'next/image'
import type { RenderPhotoProps } from 'react-photo-album'

const Photo = ({
   photo,
   imageProps: { alt, title, sizes, className, onClick },
   wrapperStyle,
}: RenderPhotoProps) => {
   return (
      <div
         style={{ ...wrapperStyle, position: 'relative' }}
         className="overflow-hidden rounded-xl"
      >
         <Image
            fill
            src={photo}
            {...{ alt, title, sizes, className, onClick }}
            placeholder={'blurDataURL' in photo ? 'blur' : undefined}
            className="rounded-xl hover:scale-110 transition-transform duration-200 ease-out"
         />
      </div>
   )
}

export default Photo
