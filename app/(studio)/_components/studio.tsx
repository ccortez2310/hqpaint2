'use client'

import { useEffect, useState } from 'react'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

export default function Studio() {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
   }, [])

   if (!mounted) {
      return null
   }

   return <NextStudio config={config} />
}
