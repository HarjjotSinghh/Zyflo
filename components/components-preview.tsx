"use client"

import ZyfloNavbarExamples from "@/components/zyflo-navbar-examples"
import ZyfloAlert, {
  PossibleZyfloAlertType,
  ZyfloAlertIconType,
  ZyfloAlertType
} from "@/components/zyflo/alert"
import {
  PossibleZyfloBadgeVariant,
  ZyfloBadge,
  ZyfloBadgeVariant
} from "@/components/zyflo/badge"
import ZyfloLinkEmbed, {
  ZyfloLinkEmbedVariant,
  ZyfloLinkEmbedVariants
} from "@/components/zyflo/link-embed"
import ZyfloLiquidButton, {
  PossibleZyfloLiquidButtonVariant,
  ZyfloLiquidButtonVariant
} from "@/components/zyflo/liquid-button"
import ZyfloAnimatedBackground, {
  PossibleZyfloAnimatedBackgroundVariant,
  ZyfloAnimatedBackgroundVariant
} from "@/components/zyflo/animated-background"
import ZyfloAOS, {
  PossibleZyfloAOSVariants,
  ZyfloAOSVariant
} from "@/components/zyflo/aos"
import { Icons } from "./icons"
import ZyfloWindowMockup from "./ui/window-mockup"
import ZyfloCursor from "./zyflo/cursor-follow"
import { Button } from "./ui/button"
import { useRef } from "react"
import ZyfloGlitchText, {
  PossibleZyfloGlitchTextVariant,
  ZyfloGlitchTextVariant
} from "./zyflo/glitch-text"

export default function ComponentsPreview() {
  const spotBlurRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const invertedRef = useRef<HTMLDivElement>(null)
  const defaultRef = useRef<HTMLDivElement>(null)

  return (
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
                Link Embed ({variant.charAt(0).toUpperCase() + variant.slice(1)}
                )
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
        <h2 className="!mt-16">Zyflo Animated Background Component</h2>
        <div className="relative grid grid-cols-1 items-start justify-start gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {PossibleZyfloAnimatedBackgroundVariant.filter(
            (variant) => variant !== "custom"
          ).map((variant) => (
            <div className="relative flex flex-col items-start justify-start">
              <p className="my-4 text-sm font-bold">
                {variant
                  .slice(0)
                  .replace("-", " ")
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}{" "}
                Variant
              </p>
              <div className="group relative">
                <ZyfloAnimatedBackground
                  key={variant}
                  variant={variant as ZyfloAnimatedBackgroundVariant}
                  grain
                  grainClassName="rounded-2xl"
                  className="flex size-44 items-center justify-center overflow-hidden rounded-2xl"
                >
                  <p className="font-bold text-white mix-blend-overlay">
                    Content goes here
                  </p>
                </ZyfloAnimatedBackground>
                <ZyfloAnimatedBackground
                  key={variant}
                  variant={variant as ZyfloAnimatedBackgroundVariant}
                  className="absolute inset-0 left-0 top-0 -z-10 size-44 overflow-visible rounded-2xl !opacity-70 blur-xl zyflo-transition group-hover:!opacity-100 group-hover:blur-2xl"
                />
                <ZyfloAnimatedBackground
                  key={variant}
                  variant={variant as ZyfloAnimatedBackgroundVariant}
                  className="absolute inset-0 left-0 top-0 -z-10 size-44 overflow-visible rounded-2xl !opacity-30 blur-2xl zyflo-transition group-hover:!opacity-70 group-hover:blur-3xl"
                />
              </div>
            </div>
          ))}
          <div className="relative flex flex-col items-start justify-start">
            <p className="my-4 text-sm font-bold">Custom Variant</p>
            <div className="group relative">
              <ZyfloAnimatedBackground
                className="flex size-44 items-center justify-center overflow-hidden rounded-2xl"
                custom={true}
                variant="custom"
                customGradients={[
                  { x: 54, y: 18, color: "hsl(var(--primary))" },
                  { x: 13, y: 71, color: "hsl(var(--accent))" },
                  { x: 53, y: 65, color: "hsl(var(--foreground))" }
                ]}
              >
                <p className="font-bold text-white mix-blend-overlay">
                  Content goes here
                </p>
              </ZyfloAnimatedBackground>
              <ZyfloAnimatedBackground className="absolute inset-0 left-0 top-0 -z-10 size-44 overflow-visible rounded-2xl !opacity-70 blur-xl zyflo-transition group-hover:!opacity-100 group-hover:blur-2xl" />
              <ZyfloAnimatedBackground className="absolute inset-0 left-0 top-0 -z-10 size-44 overflow-visible rounded-2xl !opacity-30 blur-2xl zyflo-transition group-hover:!opacity-70 group-hover:blur-3xl" />
            </div>
          </div>
        </div>
        <h2 className="!mt-16">Zyflo AOS Component</h2>
        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {Array.from(PossibleZyfloAOSVariants)
            .sort((a, b) => a.localeCompare(b))
            .map((variant) => (
              <div className="relative flex flex-col items-start justify-start">
                <p className="my-4 line-clamp-1 text-sm font-bold">
                  {variant
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}{" "}
                  Variant
                </p>
                <ZyfloAOS
                  once={false}
                  key={variant}
                  amount={0.4}
                  duration={1.2}
                  easing="spring"
                  variant={variant as ZyfloAOSVariant}
                >
                  <div className="flex size-44 items-center justify-center rounded-2xl border-2 border-primary/20 bg-secondary/50 shadow-[0_0_20px_0] shadow-primary/5 zyflo-transition hover:border-primary/40 hover:shadow-[0_0_40px_0] hover:shadow-primary/20">
                    <p className="font-bold">Content goes here</p>
                  </div>
                </ZyfloAOS>
              </div>
            ))}
        </div>
        <h2 className="!mt-16">Zyflo Cursor Component</h2>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-start justify-start">
            <p className="my-4 text-sm font-bold">Default Cursor</p>
            <ZyfloWindowMockup className="relative" ref={defaultRef}>
              <ZyfloCursor
                variant={"default"}
                label={"Default Cursor"}
                srOnly={"Default Cursor"}
                containerRef={defaultRef}
              />
              <div className="p-4">
                <Button variant={"secondary"} className="zyflo-hover">
                  Hover me
                </Button>
              </div>
            </ZyfloWindowMockup>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="my-4 text-sm font-bold">Spot Blur Cursor</p>
            <ZyfloWindowMockup className="relative" ref={spotBlurRef}>
              <ZyfloCursor
                variant={"spot-blur"}
                label={"Spot Blur Cursor"}
                srOnly={"Spot Blur Cursor"}
                containerRef={spotBlurRef}
              />
              <div className="p-4">
                <Button variant={"secondary"} className="zyflo-hover">
                  Hover me
                </Button>
              </div>
            </ZyfloWindowMockup>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="my-4 text-sm font-bold">Dot Cursor</p>
            <ZyfloWindowMockup className="relative" ref={dotRef}>
              <ZyfloCursor
                variant={"dot"}
                label={"Dot Cursor"}
                srOnly={"Dot Cursor"}
                containerRef={dotRef}
              />
              <div className="p-4">
                <Button variant={"secondary"} className="zyflo-hover">
                  Hover me
                </Button>
              </div>
            </ZyfloWindowMockup>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="my-4 text-sm font-bold">Ring Cursor</p>
            <ZyfloWindowMockup className="relative" ref={ringRef}>
              <ZyfloCursor
                variant={"ring"}
                label={"Ring Cursor"}
                srOnly={"Ring Cursor"}
                containerRef={ringRef}
              />
              <div className="p-4">
                <Button variant={"secondary"} className="zyflo-hover">
                  Hover me
                </Button>
              </div>
            </ZyfloWindowMockup>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="my-4 text-sm font-bold">Inverted Cursor</p>
            <ZyfloWindowMockup className="relative" ref={invertedRef}>
              <ZyfloCursor
                variant={"inverted"}
                label={"Inverted Cursor"}
                srOnly={"Inverted Cursor"}
                containerRef={invertedRef}
              />
              <div className="p-4">
                <Button variant={"secondary"} className="zyflo-hover">
                  Hover me
                </Button>
              </div>
            </ZyfloWindowMockup>
          </div>
        </div>
        <h2 className="!mt-16">Zyflo Glitch Text Component</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PossibleZyfloGlitchTextVariant.map((variant) => (
            <div className="flex flex-col items-start justify-start">
              <p className="my-4 text-sm font-bold capitalize">
                Glitch Text ({variant.replaceAll("-", " ")})
              </p>
              <ZyfloGlitchText
                variant={variant as ZyfloGlitchTextVariant}
                size="lg"
                colors={{
                  text: "hsl(var(--foreground))",
                  after: "#FF0000",
                  before: "#00FFFF"
                }}
                intensity={
                  variant === "transformation"
                    ? 0.8
                    : variant === "noise"
                    ? 0.4
                    : 0.8
                }
                text="Glitch Text Example"
                className="text-left"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
