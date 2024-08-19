import "@/styles/globals.css"
import "@/styles/prism.css"
import { siteConfig } from "@/config/site"
import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import Head from "next/head"
import { headers } from "next/headers"
import { Metadata } from "next"

interface RootLayoutProps {
  children: React.ReactNode
}

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers()
  const pathname = headersList.get("x-invoke-path") || ""

  return {
    title: {
      default: siteConfig.name,
      template: pathname.includes("docs")
        ? `%s | ${siteConfig.name}`
        : `%s | ${siteConfig.name} Docs`
    },
    description: siteConfig.description,
    keywords: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Server Components",
      "Radix UI"
    ],
    authors: [
      {
        name: "Harjot Singh Rana",
        url: "https://harjot.pro"
      }
    ],
    creator: "Harjot Singh Rana",
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" }
    ],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [`${siteConfig.url}/og.png`],
      creator: "@HarjjotSinghh"
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png"
    },
    manifest: `${siteConfig.url}/site.webmanifest`
  }
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={"min-h-screen bg-background font-zyflo antialiased"}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
