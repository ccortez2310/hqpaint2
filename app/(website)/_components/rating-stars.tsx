import { StarIcon } from 'lucide-react'
import React, { FC } from 'react'

type RatingStarsProps = {
   rating: string
}

const RatingStars: FC<RatingStarsProps> = ({ rating }) => {
   const maxRating = 5
   const filledStars = parseInt(rating)

   const starsArray = [...Array(maxRating)].map((_, index) => (
      <StarIcon
         key={index}
         className={`w-5 h-5 ${
            index < filledStars
               ? 'text-yellow-500 fill-yellow-500'
               : 'text-gray-300'
         }`}
      />
   ))

   return <>{starsArray}</>
}

export default RatingStars
