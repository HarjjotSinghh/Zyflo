"use client"
import Link from "next/link"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import ZyfloAlert, { ZyfloAlertType } from "@/components/zyflo/alert"
import { ModeToggle } from "@/components/mode-toggle"
import { RxAccessibility } from "react-icons/rx"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <>
      <section className="flex items-center justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-4 text-center md:px-8 lg:px-12 xl:px-16">
          <ModeToggle />
          <h1 className="text-center">Hello, Zyflo!</h1>
          <div className="flex flex-row flex-wrap items-center justify-center gap-8">
            {[
              "info",
              "warning",
              "danger",
              "success",
              "default",
              "outline",
              "secondary",
              "transparent",
              "light"
            ].map((variant) => (
              <ZyfloAlert
                key={variant}
                alertTitle={{
                  title: "Zyflo Alert",
                  as: "h3",
                  label: "Zyflo Alert Title"
                }}
                alertDescription={{
                  description:
                    "This is a default callout. I am typing a lot of text here. Like, a lot of text, you won't get it bro. Okay just one more line here and that should be enough.",
                  as: "p",
                  label: "Zyflo Alert Description"
                }}
                // alertIcon={{ type: variant !== "info" ? variant as ZyfloAlertType : "none" }}
                alertIcon={{
                  type: "custom",
                  customIcon: Icons.logoIcon
                }}
                variant={variant as ZyfloAlertType}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
