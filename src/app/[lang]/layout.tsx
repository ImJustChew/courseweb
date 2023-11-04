import { Analytics } from '@vercel/analytics/react';
import { SettingsProvider } from '@/hooks/contexts/settings';
import { Inter } from 'next/font/google'
import './globals.css'

import Header from '@/components/Header'
import SideNav from '@/components/SideNav'
import Footer from '@/components/Footer'

import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import ModalProvider from '@/hooks/contexts/useModal';
import { LangProps } from '@/types/pages';
import { CssVarsProvider } from '@mui/joy';
import NextAuthProvider from '@/components/NextAuthProvider';
import { Viewport } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NTHUMods',
  description: 'NTHUMods is a course selection system for National Tsing Hua University, Made with ❤️ by Students',
  applicationName: "NTHUMods",
  appleWebApp: {
    title: "NTHUMods",
    statusBarStyle: "black-translucent",
  }
}
 
export const viewport: Viewport = {
  themeColor: "#7e1083",
}



export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
} & LangProps) {

  const theme = cookies().get("theme");

  return (
    <CssVarsProvider defaultMode={(theme?.value as any) ?? 'light'}>
      <NextAuthProvider>
        <SettingsProvider>
          <ModalProvider>
            <html lang={params.lang} className={`${theme?.value ?? ''} overflow-x-hidden`}>
              <body className={`${inter.className} grid grid-cols-1 grid-rows-[64px_48px_calc(100vh-112px)] md:grid-cols-[12rem_auto] md:grid-rows-[56px_calc(100vh-56px)_12rem] bg-white dark:bg-neutral-900 dark:text-white`}>
                <Header />
                <SideNav />
                <main className='overflow-y-auto overflow-x-hidden h-full w-full'>
                  {children}
                  <Analytics />
                </main>
                <Footer />
              </body>
            </html>
          </ModalProvider>
        </SettingsProvider>
      </NextAuthProvider>
    </CssVarsProvider>
  )
}
