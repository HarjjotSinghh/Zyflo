"use client"
import {
  areColorsCompatible,
  cn,
  getAutoContrastClassName,
  getCSSVariable
} from "@/lib/utils"
import {
  AlertCircleIcon,
  CheckCircleIcon,
  InfoIcon,
  MessageSquareWarningIcon
} from "lucide-react"
import React, { LegacyRef, useEffect } from "react"
import { motion, Variants } from "framer-motion"
import {
  zyfloBlurInFromBottomVariants,
  zyfloBlurInFromRightVariants,
  zyfloBlurScaleInVariants,
  zyfloFadeBlurInFromBottomVariants
} from "@/zyflo.config"

import { cva, type VariantProps } from "class-variance-authority"

const primaryHSL: number[] = getCSSVariable("--primary")
  .replace("%", "")
  .slice(0, -1)
  .split(" ")
  .map(Number)

const primaryAndBlackAreCompatible = areColorsCompatible(
  primaryHSL[0],
  primaryHSL[1],
  primaryHSL[2],
  0,
  0,
  0
)

const primaryAndWhiteAreCompatible = areColorsCompatible(
  primaryHSL[0],
  primaryHSL[1],
  primaryHSL[2],
  100,
  100,
  100
)

const alertVariants = cva(
  "relative flex w-full flex-col items-start justify-start gap-2 rounded-xl border-2 zyflo-transition sm:max-w-md xl:p-8 lg:p-7 md:p-6 p-6 overflow-hidden",
  {
    variants: {
      variant: {
        light:
          "border-primary/20 bg-primary/10 hover:border-primary/40 dark:border-primary/30 dark:bg-primary/20 dark:hover:border-primary/50",
        info: "border-blue-300 bg-blue-200 hover:border-blue-400 dark:border-blue-800 dark:bg-blue-950 dark:hover:border-blue-700",
        warning:
          "border-yellow-400 bg-yellow-200 hover:border-yellow-500 dark:border-yellow-800 dark:bg-yellow-950 dark:hover:border-yellow-700",
        danger:
          "border-red-300 bg-red-200 hover:border-red-400 dark:border-red-800 dark:bg-red-950 dark:hover:border-red-700",
        success:
          "border-emerald-300 bg-emerald-200 hover:border-emerald-400 dark:border-emerald-800 dark:bg-emerald-950 dark:hover:border-emerald-700",
        default:
          "border-primary/30 bg-primary/30 hover:border-primary/80 dark:border-primary/40 dark:bg-primary/30 dark:hover:border-primary/70",
        outline:
          "border-gray-300 bg-transparent hover:bg-background/10 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-700",
        secondary:
          "bg-secondary hover:bg-secondary/90 dark:bg-secondary dark:hover:bg-secondary/90 border-muted-foreground/20 hover:border-muted-foreground/40",
        transparent: "border-transparent bg-transparent",
        gradient:
          "bg-gradient-to-r bg-[size:300%_300%] hover:bg-[position:0%_0%] bg-[position:100%_100%] from-primary to-primary via-accent border-primary/10 border-2 hover:border-primary/30 dark:[box-shadow:0_3px_30px_1px_hsl(var(--primary)/0.4)] dark:hover:[box-shadow:0_4px_40px_1px_hsl(var(--primary)/0.5)] hover:[box-shadow:0_4px_40px_1px_hsl(var(--primary)/0.4)] [box-shadow:0_3px_30px_1px_hsl(var(--primary)/0.3)]"
      }
    },
    defaultVariants: {
      variant: "light"
    }
  }
)

const alertTitleVariants = cva(
  "text-pretty zyflo-transition whitespace-pre-wrap text-left",
  {
    variants: {
      variant: {
        light: "text-primary-700 dark:text-primary-400",
        info: "text-blue-950 dark:text-blue-50",
        warning: "text-yellow-950 dark:text-yellow-50",
        danger: "text-red-950 dark:text-red-50",
        success: "text-emerald-950 dark:text-emerald-50",
        default: "text-gray-950 dark:text-gray-50",
        outline: "text-gray-950 dark:text-gray-50",
        secondary: "text-gray-950 dark:text-gray-50",
        transparent: "text-gray-950 dark:text-gray-50",
        gradient: primaryAndBlackAreCompatible
          ? "text-gray-950"
          : primaryAndWhiteAreCompatible
          ? "text-gray-50"
          : "text-gray-500" // TODO: Better way to handle this?
      }
    },
    defaultVariants: {
      variant: "light"
    }
  }
)

const alertIconVariants = cva("zyflo-transition", {
  variants: {
    variant: {
      light: "text-primary-600 dark:text-primary-400",
      info: "dark:text-blue-500 text-blue-800",
      warning: "dark:text-yellow-400 text-yellow-800",
      danger: "dark:text-red-500 text-red-800",
      success: "dark:text-emerald-400 text-emerald-800",
      default: "text-gray-950 dark:text-gray-50",
      outline: "text-gray-950 dark:text-gray-50",
      secondary: "text-gray-950 dark:text-gray-50",
      transparent: "text-gray-950 dark:text-gray-50",
      gradient: primaryAndBlackAreCompatible
        ? "text-gray-950"
        : primaryAndWhiteAreCompatible
        ? "text-gray-50"
        : "text-gray-500"
    }
  },
  defaultVariants: {
    variant: "light"
  }
})

const alertDescriptionVariants = cva(
  "whitespace-pre-wrap text-pretty text-left text-xs sm:text-sm zyflo-transition",
  {
    variants: {
      variant: {
        light: "text-primary-950/80 dark:text-primary-50/80",
        info: "text-blue-950/80 dark:text-blue-50/80",
        warning: "text-yellow-950/80 dark:text-yellow-50/80",
        danger: "text-red-950/80 dark:text-red-50/80",
        success: "text-emerald-950/80 dark:text-emerald-50/80",
        default: "text-gray-950/80 dark:text-gray-50/80",
        outline: "text-gray-950/80 dark:text-gray-50/80",
        secondary: "text-gray-950/80 dark:text-gray-50/80",
        transparent: "text-gray-950/80 dark:text-gray-50/80",
        gradient: primaryAndBlackAreCompatible
          ? "text-gray-950/80"
          : primaryAndWhiteAreCompatible
          ? "text-gray-50/80"
          : "text-gray-500/80"
      }
    },
    defaultVariants: {
      variant: "light"
    }
  }
)

export interface ZyfloAlertTitle extends React.HTMLAttributes<HTMLElement> {
  title: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span"
  label?: string
  srOnly?: boolean
}

export interface ZyfloAlertDescription {
  description: string
  as?: "div" | "p" | "span"
  label?: string
  srOnly?: boolean
}

export const PossibleZyfloAlertType = [
  "info",
  "warning",
  "danger",
  "success",
  "default",
  "outline",
  "secondary",
  "transparent",
  "light",
  "gradient"
] as const

export type ZyfloAlertType = (typeof PossibleZyfloAlertType)[number]

export const PossibleZyfloAlertIconType = [
  "info",
  "warning",
  "danger",
  "success",
  "default",
  "none"
] as const

export type ZyfloAlertIconType = (typeof PossibleZyfloAlertIconType)[number]

export type ZyfloAlertIconBase = {
  label?: string
  srOnly?: boolean
}

export type ZyfloAlertIcon = (
  | { type: ZyfloAlertIconType }
  | {
      type: "custom"
      customIcon: React.FC<
        React.PropsWithRef<React.ComponentProps<"svg" | "img" | "div" | "span">>
      >
    }
) &
  ZyfloAlertIconBase

export interface ZyfloAlertProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof alertVariants> {
  alertTitle: ZyfloAlertTitle
  alertDescription: ZyfloAlertDescription
  alertIcon?: ZyfloAlertIcon
  disableAnimations?: boolean
  backdropBlur?: boolean
}

export default function ZyfloAlert({
  alertTitle,
  alertDescription,
  alertIcon,
  variant = "light",
  disableAnimations = false,
  className,
  backdropBlur = true,
  ...props
}: ZyfloAlertProps) {
  const alertTitleAs = alertTitle.as ?? "h4"
  let alertIconClassName = "size-6"
  const titleRef = React.useRef<HTMLElement>(null)
  const iconRef = React.useRef<SVGSVGElement>(null)
  const descriptionRef = React.useRef<HTMLElement>(null)
  const gradientVariantClassName = getAutoContrastClassName(
    areColorsCompatible(primaryHSL[0], primaryHSL[1], primaryHSL[2], 0, 0, 0),
    areColorsCompatible(
      primaryHSL[0],
      primaryHSL[1],
      primaryHSL[2],
      100,
      100,
      100
    )
  )
  console.log(gradientVariantClassName)
  useEffect(() => {
    if (variant === "gradient") {
      if (titleRef.current) {
        titleRef.current.classList.add(gradientVariantClassName)
      }
      if (iconRef.current) {
        iconRef.current.classList.add(gradientVariantClassName)
      }
      if (descriptionRef.current) {
        descriptionRef.current.classList.add(gradientVariantClassName)
      }
    }
    return () => {
      if (variant === "gradient") {
        if (titleRef.current) {
          titleRef.current.classList.remove(gradientVariantClassName)
        }
        if (iconRef.current) {
          iconRef.current.classList.remove(gradientVariantClassName)
        }
        if (descriptionRef.current) {
          descriptionRef.current.classList.remove(gradientVariantClassName)
        }
      }
    }
  }, [gradientVariantClassName])

  switch (alertTitleAs) {
    case "h1":
      alertIconClassName = "size-12"
      break
    case "h2":
      alertIconClassName = "size-10"
      break
    case "h3":
      alertIconClassName = "size-8"
      break
    case "h4":
      alertIconClassName = "size-6"
      break
    case "h5":
      alertIconClassName = "size-6"
      break
    case "h6":
      alertIconClassName = "size-6"
      break
    default:
      alertIconClassName = "size-6"
  }
  const divAs = disableAnimations ? "div" : motion.div
  const commonProps = {
    className: cn(
      alertVariants({ variant, className }),
      backdropBlur ? "backdrop-blur-md" : ""
    )
  }

  const animationProps = disableAnimations
    ? {}
    : {
        variants: zyfloBlurInFromBottomVariants as unknown as Variants,
        initial: "initial",
        custom: 0,
        whileInView: "animate",
        viewport: { once: true }
      }

  const combinedProps = {
    ...commonProps,
    ...animationProps,
    ...props
  }
  if (
    !PossibleZyfloAlertIconType.includes(alertIcon?.type as ZyfloAlertIconType)
  ) {
    if (alertIcon) {
      alertIcon.type = "default"
    }
  }
  return (
    <>
      {React.createElement(
        divAs,
        combinedProps as any,
        <>
          {!disableAnimations && alertTitle && (
            <motion.div
              variants={zyfloBlurInFromRightVariants as unknown as Variants}
              initial="initial"
              custom={1}
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col items-start justify-start gap-2 sm:flex-row sm:items-center sm:gap-3"
            >
              {!disableAnimations && alertIcon && alertIcon.type !== "none" && (
                <motion.div
                  variants={zyfloBlurScaleInVariants as unknown as Variants}
                  initial="initial"
                  custom={0}
                  whileInView="animate"
                  aria-label={alertIcon.label ?? alertIcon.type + " Alert"}
                  viewport={{ once: true }}
                  className="flex items-center justify-center"
                >
                  {alertIcon.srOnly && (
                    <span className="sr-only">{alertIcon.type} Alert</span>
                  )}
                  {alertIcon.type === "custom" && (
                    <alertIcon.customIcon
                      ref={iconRef}
                      className={`${alertIconClassName} zyflo-transition`}
                    />
                  )}
                  {alertIcon.type !== "custom" && (
                    <div className="w-fit">
                      {alertIcon.type === "info" && (
                        <InfoIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                      {alertIcon.type === "warning" && (
                        <MessageSquareWarningIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                      {alertIcon.type === "danger" && (
                        <AlertCircleIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                      {alertIcon.type === "success" && (
                        <CheckCircleIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                      {alertIcon.type === "default" && (
                        <InfoIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                    </div>
                  )}
                </motion.div>
              )}
              {disableAnimations && alertIcon && alertIcon.type !== "none" && (
                <div
                  className="flex items-center justify-center"
                  aria-label={alertIcon.label ?? alertIcon.type + " Alert"}
                >
                  {alertIcon.srOnly && (
                    <span className="sr-only">{alertIcon.type} Alert</span>
                  )}
                  {alertIcon.type === "custom" && (
                    <alertIcon.customIcon
                      ref={iconRef}
                      className={`${alertIconClassName} zyflo-transition`}
                    />
                  )}
                  {alertIcon.type !== "custom" && (
                    <div className="w-fit">
                      {alertIcon.type === "info" && (
                        <InfoIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                      {alertIcon.type === "warning" && (
                        <MessageSquareWarningIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                      {alertIcon.type === "danger" && (
                        <AlertCircleIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                      {alertIcon.type === "success" && (
                        <CheckCircleIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                      {alertIcon.type === "default" && (
                        <InfoIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                      {/* if alertIcon.type is unknows, show default icon */}
                      {alertIcon.type !== "danger" &&
                        alertIcon.type !== "warning" &&
                        alertIcon.type !== "success" &&
                        alertIcon.type !== "info" &&
                        alertIcon.type !== "default" &&
                        alertIcon.type !== "none" && (
                          <InfoIcon
                            className={cn(
                              alertIconClassName,
                              alertIconVariants({ variant })
                            )}
                            ref={iconRef}
                          />
                        )}
                    </div>
                  )}
                </div>
              )}
              {React.createElement(
                alertTitleAs,
                {
                  className: cn(alertTitleVariants({ variant })),
                  ref: titleRef
                },
                alertTitle.title
              )}
            </motion.div>
          )}
          {disableAnimations && alertTitle && (
            <div>
              {!disableAnimations && alertIcon && alertIcon.type !== "none" && (
                <motion.div
                  variants={zyfloBlurScaleInVariants as unknown as Variants}
                  initial="initial"
                  custom={0}
                  whileInView="animate"
                  aria-label={alertIcon.label ?? alertIcon.type + " Alert"}
                  viewport={{ once: true }}
                  className="flex flex-col items-start justify-center sm:flex-row sm:items-center"
                >
                  {alertIcon.srOnly && (
                    <span className="sr-only">{alertIcon.type} Alert</span>
                  )}
                  {alertIcon.type === "custom" && (
                    <alertIcon.customIcon
                      ref={iconRef}
                      className={`${alertIconClassName} zyflo-transition`}
                    />
                  )}
                  {alertIcon.type !== "custom" && (
                    <div className="w-fit">
                      {alertIcon.type === "info" && (
                        <InfoIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                      {alertIcon.type === "warning" && (
                        <MessageSquareWarningIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                      {alertIcon.type === "danger" && (
                        <AlertCircleIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                      {alertIcon.type === "success" && (
                        <CheckCircleIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                      {alertIcon.type === "default" && (
                        <InfoIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                    </div>
                  )}
                </motion.div>
              )}
              {disableAnimations && alertIcon && alertIcon.type !== "none" && (
                <div
                  className="flex items-center justify-center"
                  aria-label={alertIcon.label ?? alertIcon.type + " Alert"}
                >
                  {alertIcon.srOnly && (
                    <span className="sr-only">{alertIcon.type} Alert</span>
                  )}
                  {alertIcon.type === "custom" && (
                    <alertIcon.customIcon
                      ref={iconRef}
                      className={`${alertIconClassName} zyflo-transition`}
                    />
                  )}
                  {alertIcon.type !== "custom" && (
                    <div className="w-fit">
                      {alertIcon.type === "info" && (
                        <InfoIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                      {alertIcon.type === "warning" && (
                        <MessageSquareWarningIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                      {alertIcon.type === "danger" && (
                        <AlertCircleIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                      {alertIcon.type === "success" && (
                        <CheckCircleIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                      {alertIcon.type === "default" && (
                        <InfoIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                          ref={iconRef}
                        />
                      )}
                    </div>
                  )}
                </div>
              )}
              {React.createElement(
                alertTitleAs,
                {
                  className: cn(alertTitleVariants({ variant })),
                  ref: titleRef
                },
                alertTitle.title
              )}
            </div>
          )}
          {!disableAnimations && alertDescription && (
            <motion.div
              variants={
                zyfloFadeBlurInFromBottomVariants as unknown as Variants
              }
              initial="initial"
              custom={2}
              whileInView="animate"
              viewport={{ once: true }}
              className={cn(alertDescriptionVariants({ variant }))}
            >
              {React.createElement(
                alertDescription.as ?? "p",
                {
                  ref: descriptionRef,
                  className: ""
                },
                alertDescription.description
              )}
            </motion.div>
          )}
          {disableAnimations &&
            alertDescription &&
            React.createElement(
              alertDescription.as ?? "p",
              {
                ref: descriptionRef,
                className: cn(alertDescriptionVariants({ variant }))
              },
              alertDescription.description
            )}
        </>
      )}
    </>
  )
}
