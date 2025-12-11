import type React from "react"
import type { Metadata } from "next"
import { Quicksand, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _quicksand = Quicksand({ subsets: ["latin", "vietnamese"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nuôi Tôi - Website Parody Hài Hước",
  description:
    "Hãy nuôi tôi để tôi khỏi phải lớn! Website parody vui nhộn về người trẻ được cộng đồng nuôi để sống chill.",
  generator: "v0.app",
  icons: {
    icon: "/profile.jpg",
    shortcut: "/profile.jpg",
    apple: "/profile.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
