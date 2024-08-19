"use client"
import { Sidebar, SidebarBody, ZyfloSidebarLink } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { ROUTES } from "@/lib/routes-config"
import Anchor from "../anchor"
import Sticky from "./sticky"

export function SiteSidebar() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={cn(
        `hidden flex-col border-r border-muted bg-gradient-to-t from-primary/[0.02] from-0% to-background to-80% pl-4 dark:from-primary/[0.05] sm:flex lg:w-fit lg:flex-shrink lg:flex-grow-0`

        // "h-[calc(100vh-88.8px)]" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="sticky top-[88.8px] justify-between gap-10">
          <div className="mt-4 flex flex-1 flex-col items-start justify-start">
            <div className="flex flex-col gap-8">
              {ROUTES.map((route, idx) => (
                <ZyfloSidebarLink
                  key={idx}
                  link={{
                    label: route.title,
                    href: route.href,
                    icon: <route.icon className="size-6" />
                  }}
                  content={
                    <div className="flex min-w-fit flex-col gap-2 " key={idx}>
                      <Anchor
                        href={`/docs/${route.href}`}
                        className="hover:text-current"
                      >
                        <h5 className="mb-2 inline-flex items-center gap-2 font-medium text-foreground sm:text-sm">
                          {<route.icon className="size-6" />}
                          {route.title}
                        </h5>
                      </Anchor>
                      <div className="ml-0.5 flex flex-col gap-3 text-foreground/80 sm:text-sm">
                        {route.items.map((subItem) => (
                          <Anchor
                            activeClassName="font-medium text-primary"
                            key={`/docs/${route.href}${subItem.href}`}
                            href={`/docs/${route.href}${subItem.href}`}
                          >
                            {subItem.title}
                          </Anchor>
                        ))}
                      </div>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  )
}
