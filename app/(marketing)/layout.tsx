import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import ZyfloNavbar from "@/components/zyflo/navbar"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <ZyfloNavbar
        logoText={{ text: "Zyflo", as: "h4" }}
        logo={{
          src: "/images/logos/zyflo-logo-transparent-black-background.svg",
          alt: "Logo",
          width: 300,
          height: 100
        }}
        items={marketingConfig.mainNav}
        srOnly={true}
        mobileNavFooter={
          <div className="flex justify-start">
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4"
              )}
            >
              Login
            </Link>
          </div>
        }
        mobileNavbarCentred={true}
        sticky={true}
        // disableAnimations
      />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
