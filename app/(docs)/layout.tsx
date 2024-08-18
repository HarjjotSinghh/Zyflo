import Link from "next/link"

import { docsConfig } from "@/config/docs"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import Search from "@/components/search"
import { DocsSidebarNav } from "@/components/sidebar-nav"
import { SiteFooter } from "@/components/site-footer"
import ModeToggle from "@/components/mode-toggle"

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
      <main className="mx-auto flex w-full max-w-7xl flex-row justify-center gap-6 px-4 lg:gap-12 lg:px-8">
        {children}
      </main>
      <SiteFooter className="border-t border-muted" />
    </div>
  )
}
