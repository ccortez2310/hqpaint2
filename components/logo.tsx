import Image from 'next/image'

const Logo = () => {
   return (
      <div className="relative h-[65px] w-[96px]">
         <Image src="/logo.png" fill alt="Logo" className="dark:hidden" />
         <Image src="/logo.png" fill alt="Logo" className="hidden dark:flex" />
      </div>
   )
}

export default Logo
