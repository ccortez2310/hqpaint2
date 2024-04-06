import Footer from '@/app/(website)/_components/footer'
import Navbar from '@/app/(website)/_components/navbar'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const font = Inter({ subsets: ['latin'] })

export const metadata = {
   title: {
      template: '%s - HQ Paint General Construction',
      default: 'HQ Paint General Construction',
   },
}

export default function WebsiteLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <>
         <Script
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
         />

         <Script strategy="lazyOnload" id="google-analytics">
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
         </Script>
         <div className={`${font.className} flex flex-col min-h-screen`}>
            <Navbar />
            <main>{children}</main>
            <Footer />
         </div>
      </>
   )
}
