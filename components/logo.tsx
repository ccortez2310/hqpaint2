import Image from 'next/image'

const Logo = () => {
   return (
      <div className="relative h-[65px] w-[96px]">
         <Image
            src="/logo2.png"
            fill
            alt="HQPaint General Construction LLC"
            className="dark:hidden"
         />
         <Image
            src="/logo2-dark.png"
            fill
            alt="HQ Paint General Construction LLC"
            className="hidden dark:flex"
         />
      </div>
   )
}

export default Logo
