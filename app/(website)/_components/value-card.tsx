import React, { FC } from 'react'

type ValueCardProps = {
   value: string
}

const ValueCard: FC<ValueCardProps> = ({ value }) => {
   return (
      <div className="flex flex-col justify-center text-center bg-background dark:border dark:border-gray-700 rounded-2xl group shadow-lg h-full py-10 px-5 lg:hover:scale-110 transition-transform duration-200 ease-out hover:text-white hover:bg-primary/70">
         <div className="text-base lg:text-lg font-medium">{value}</div>
      </div>
   )
}

export default ValueCard
