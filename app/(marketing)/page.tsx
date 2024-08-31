"use client"
import ZyfloAlert, {
  PossibleZyfloAlertType,
  ZyfloAlertIconType,
  ZyfloAlertType
} from "@/components/zyflo/alert"
import ModeToggle from "@/components/mode-toggle"
import {
  PossibleZyfloBadgeVariant,
  ZyfloBadge,
  ZyfloBadgeVariant
} from "@/components/zyflo/badge"
import { Icons } from "@/components/icons"
import React, { ReactNode } from "react"
import HeroSection from "@/components/hero-section"
import ZyfloNavbarExamples from "@/components/zyflo-navbar-examples"
export default function IndexPage() {
  return (
    <React.Fragment>
      <HeroSection />
      <section className="relative flex items-center justify-center space-y-6 border-t-2 border-primary/20 bg-primary-0/50  pb-24 pt-16 dark:bg-primary-1000/50 lg:pb-32 lg:pt-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-4 px-4 text-center md:px-8 lg:px-12 xl:px-16">
          <h2>Zyflo Navbar Component</h2>
          <ZyfloNavbarExamples />
          <h2 className="mb-4">Zyflo Alert Component</h2>
          <div className="flex flex-row flex-wrap items-start justify-start gap-4">
            {PossibleZyfloAlertType.map((variant) => (
              <ZyfloAlert
                key={variant}
                alertTitle={{
                  title:
                    "Zyflo Alert (" +
                    variant.charAt(0).toUpperCase() +
                    variant.slice(1) +
                    ")",
                  as: "h4",
                  label: "Zyflo Alert Title"
                }}
                alertDescription={{
                  description:
                    "This is an example alert. I am typing a lot of text here. Like, a lot of text, you won't get it bro. Okay just one more line here and that should be enough.",
                  as: "p",
                  label: "Zyflo Alert Description"
                }}
                // alertIcon={{ type: variant !== "info" ? variant as ZyfloAlertType : "none" }}
                alertIcon={{
                  type: "custom",
                  customIcon: () => (
                    <Icons.logoIcon
                      className="size-5"
                      fill={{
                        dark:
                          variant === "light" ? "hsl(var(--primary))" : "#fff",
                        light:
                          variant === "light" ? "hsl(var(--primary))" : "#000"
                      }}
                    />
                  )
                }}
                variant={variant as ZyfloAlertType}
                triggerWhenInView={true}
                className="h-full max-w-md"
              />
            ))}
          </div>
          <h2 className="!mt-16">Zyflo Badge Component</h2>
          <h5 className="my-4">Small Variants</h5>
          <div className="flex flex-row flex-wrap items-start justify-start gap-4">
            {PossibleZyfloBadgeVariant.map((variant) => (
              <ZyfloBadge
                size="sm"
                key={variant}
                className="capitalize"
                variant={variant as ZyfloBadgeVariant}
                icon={<Icons.billing className="size-4" />}
                iconPlacement="left"
              >
                Badge ({variant})
              </ZyfloBadge>
            ))}
          </div>
          <h5 className="my-4">Medium Variants</h5>
          <div className="flex flex-row flex-wrap items-start justify-start gap-4">
            {PossibleZyfloBadgeVariant.map((variant) => (
              <ZyfloBadge
                size="md"
                key={variant}
                className="capitalize"
                variant={variant as ZyfloBadgeVariant}
                icon={<Icons.billing className="size-5" />}
                iconPlacement="right"
              >
                Badge ({variant})
              </ZyfloBadge>
            ))}
          </div>
          <h5 className="my-4">Large Variants</h5>
          <div className="flex flex-row flex-wrap items-start justify-start gap-4">
            {PossibleZyfloBadgeVariant.map((variant) => (
              <ZyfloBadge
                size="lg"
                key={variant}
                className="capitalize"
                variant={variant as ZyfloBadgeVariant}
                icon={<Icons.billing className="size-6" />}
                iconPlacement="left"
              >
                Badge ({variant})
              </ZyfloBadge>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
