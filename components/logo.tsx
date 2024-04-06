import Image from 'next/image'

const Logo = () => {
   return (
      <>
         <Image
            src="/logo.svg"
            height="100"
            width="100"
            alt="Logo"
            className="dark:hidden"
         />
         <Image
            src="/logo.svg"
            height="100"
            width="100"
            alt="Logo"
            className="hidden dark:flex"
         />
      </>
   )
}

export default Logo
