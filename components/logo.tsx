import Image from 'next/image'

const Logo = () => {
   return (
      <div className="relative h-[65px] w-[96px]">
         <Image
            src="/logo.png"
            fill
            alt="HQPaint General Construction LLC"
            className="dark:hidden"
         />
         <Image
            src="/logo-dark.png"
            fill
            alt="HQ Paint General Construction LLC"
            className="hidden dark:flex"
         />
      </div>
   )
}

export default Logo
