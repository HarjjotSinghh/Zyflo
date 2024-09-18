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
import ZyfloLinkEmbed, {
  ZyfloLinkEmbedVariant,
  ZyfloLinkEmbedVariants
} from "@/components/zyflo/link-embed"
import {
  PossibleZyfloLiquidButtonVariant,
  ZyfloLiquidButtonVariant
} from "@/components/zyflo/liquid-button"
import ZyfloLiquidButton from "@/components/zyflo/liquid-button"

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
            {PossibleZyfloAlertType.map(
              (variant) =>
                variant !== "transparent" && (
                  <ZyfloAlert
                    key={variant}
                    alertTitle={{
                      title:
                        "Zyflo Alert (" +
                        variant.charAt(0).toUpperCase() +
                        variant.slice(1) +
                        ")",
                      as: "h6",
                      label: "Zyflo Alert Title"
                    }}
                    alertDescription={{
                      // description:
                      //   "This is an example alert. I am typing a lot of text here. Like, a lot of text, you won't get it bro. Okay just one more line here and that should be enough.",
                      description: "This is an example alert.",
                      as: "p",
                      label: "Zyflo Alert Description"
                    }}
                    alertIcon={{
                      type: variant as ZyfloAlertIconType
                    }}
                    // alertIcon={{ type: variant !== "info" ? variant as ZyfloAlertType : "none" }}
                    // alertIcon={{
                    //   type: "custom",
                    //   customIcon: () => <Icons.logoIcon />
                    // }}
                    variant={variant as ZyfloAlertType}
                    triggerWhenInView={true}
                    className="h-full max-w-xs"
                  />
                )
            )}
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
          <h2 className="!mt-16">Zyflo Link Embed Component</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {ZyfloLinkEmbedVariants.map((variant) => (
              <div className="flex flex-col items-start justify-start gap-4">
                <h4>
                  Link Embed (
                  {variant.charAt(0).toUpperCase() + variant.slice(1)})
                </h4>
                <ZyfloLinkEmbed
                  className="h-fit w-full md:max-w-lg"
                  url="https://harjot.pro"
                  variant={variant as ZyfloLinkEmbedVariant}
                />
              </div>
            ))}
          </div>
          <h2 className="!mt-16">Zyflo Liquid Button Component</h2>
          <h5 className="my-4">Small Variants</h5>
          <div className="flex flex-row flex-wrap items-start justify-start gap-4">
            {PossibleZyfloLiquidButtonVariant.map((variant) => (
              <ZyfloLiquidButton
                key={variant}
                variant={variant as ZyfloLiquidButtonVariant}
                size="sm"
                label="Liquid Button"
                srOnly={"Liquid Button"}
              >
                {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant
              </ZyfloLiquidButton>
            ))}
          </div>
          <h5 className="my-4">Medium Variants</h5>
          <div className="flex flex-row flex-wrap items-start justify-start gap-4">
            {PossibleZyfloLiquidButtonVariant.map((variant) => (
              <ZyfloLiquidButton
                key={variant}
                variant={variant as ZyfloLiquidButtonVariant}
                size="default"
                label="Liquid Button"
                srOnly={"Liquid Button"}
              >
                {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant
              </ZyfloLiquidButton>
            ))}
          </div>
          <h5 className="my-4">Large Variants</h5>
          <div className="flex flex-row flex-wrap items-start justify-start gap-4">
            {PossibleZyfloLiquidButtonVariant.map((variant) => (
              <ZyfloLiquidButton
                key={variant}
                variant={variant as ZyfloLiquidButtonVariant}
                size="lg"
                label="Liquid Button"
                srOnly={"Liquid Button"}
              >
                {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant
              </ZyfloLiquidButton>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
