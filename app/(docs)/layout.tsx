import Link from "next/link"

import { docsConfig } from "@/config/docs"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import Search from "@/components/search"
import { DocsSidebarNav } from "@/components/sidebar-nav"
import { SiteFooter } from "@/components/site-footer"
import ModeToggle from "@/components/mode-toggle"
import Image from "next/image"
import { Leftbar } from "@/components/leftbar"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"
import { Logo } from "@/components/navbar"
import { LogOutIcon } from "lucide-react"
import { marketingConfig } from "@/config/marketing"
import { SiteSidebar } from "@/components/zyflo/site-sidebar"
import Sticky from "@/components/zyflo/sticky"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b border-muted bg-background/80 backdrop-blur-md ">
        <div className=" mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-5 sm:px-8">
          <MainNav items={docsConfig.mainNav}>
            <DocsSidebarNav items={docsConfig.sidebarNav} />
          </MainNav>
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <div className="flex-1 sm:grow-0">
              <Search />
            </div>
            <nav className="flex items-center space-x-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="h-7 w-7" />
                <span className="sr-only">GitHub</span>
              </Link>
              <ModeToggle />
            </nav>
          </div>
        </div>
      </header>
      <main className="relative overflow-hidden">
        <Image
          src={"/images/light-leak2.webp"}
          alt="Light Leak"
          width={1000}
          height={600}
          className="fixed left-0 top-0 -z-[2] h-screen w-full scale-x-[-1] scale-y-[1] overflow-hidden object-cover antialiased opacity-20 blur-sm zyflo-transition [mask-image:linear-gradient(140deg,black_10%,transparent_60%)] dark:opacity-[0.1]"
        />
        <div className="absolute left-0 top-0 -z-[1] h-full w-full bg-gradient-to-tr from-primary from-40% via-primary to-primary bg-[size:200%_200%] bg-[position:100%_0%] opacity-100 mix-blend-color zyflo-transition dark:opacity-30 dark:mix-blend-color"></div>
        <div className="relative  flex flex-row items-stretch justify-center gap-4 md:gap-8 lg:gap-10 xl:gap-12">
          {/* <div className="hidden h-full min-w-fit flex-col bg-primary/10 px-6 md:flex lg:px-8">
            <Leftbar className="w-fit" />
          </div> */}
          <SiteSidebar />
          <div className="mx-auto flex w-fit max-w-7xl flex-row justify-center gap-6 px-4 lg:gap-12 lg:px-8">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter className="border-t border-muted" />
    </div>
  )
}
