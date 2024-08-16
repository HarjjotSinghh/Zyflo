"use client"
import { cn } from "@/lib/utils"
import {
  AlertCircleIcon,
  CheckCircleIcon,
  InfoIcon,
  MessageSquareWarningIcon
} from "lucide-react"
import React from "react"
import { motion, Variants } from "framer-motion"
import {
  zyfloBlurInFromBottomVariants,
  zyfloBlurInFromRightVariants
} from "@/zyflo.config"

import { cva, type VariantProps } from "class-variance-authority"

const alertVariants = cva(
  "relative flex w-full flex-col items-start justify-start gap-2 rounded-xl border-2 p-5 zyflo-transition sm:max-w-md lg:p-6 overflow-hidden",
  {
    variants: {
      variant: {
        light:
          "border-primary/20 bg-primary/5 hover:border-primary/40 dark:border-primary/30 dark:bg-primary/15 dark:hover:border-primary/50",
        info: "border-blue-300 bg-blue-200 hover:border-blue-400 dark:border-blue-800 dark:bg-blue-900 dark:hover:border-blue-700",
        warning:
          "border-yellow-300 bg-yellow-200 hover:border-yellow-400 dark:border-yellow-800 dark:bg-yellow-900/50 dark:hover:border-yellow-700",
        danger:
          "border-red-300 bg-red-200 hover:border-red-400 dark:border-red-800 dark:bg-red-900/50 dark:hover:border-red-700",
        success:
          "border-green-300 bg-green-200 hover:border-green-400 dark:border-green-800 dark:bg-green-900/50 dark:hover:border-green-700",
        default:
          "border-primary/40 bg-primary/30 hover:border-primary/70 dark:border-primary/40 dark:bg-primary/30 dark:hover:border-primary/70",
        outline:
          "border-gray-300 bg-transparent hover:bg-gray-400 dark:border-gray-600 dark:hover:bg-gray-800",
        secondary:
          "border-gray-200 bg-gray-100 hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700",
        transparent: "border-transparent bg-transparent"
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
        light: "text-primary-800 dark:text-primary-400",
        info: "text-blue-950 dark:text-blue-50",
        warning: "text-yellow-950 dark:text-yellow-50",
        danger: "text-red-950 dark:text-red-50",
        success: "text-green-950 dark:text-green-50",
        default: "text-gray-950 dark:text-gray-50",
        outline: "text-gray-950 dark:text-gray-50",
        secondary: "text-gray-950 dark:text-gray-50",
        transparent: "text-gray-950 dark:text-gray-50"
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
      light: "text-primary-800 dark:text-primary-400",
      info: "text-blue-800 dark:text-blue-200",
      warning: "text-yellow-800 dark:text-yellow-200",
      danger: "text-red-800 dark:text-red-200",
      success: "text-green-800 dark:text-green-200",
      default: "text-gray-800 dark:text-gray-200",
      outline: "text-gray-800 dark:text-gray-200",
      secondary: "text-gray-800 dark:text-gray-200",
      transparent: "text-gray-800 dark:text-gray-200"
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
        light: "text-primary-900 dark:text-primary-100",
        info: "text-blue-900 dark:text-blue-100",
        warning: "text-yellow-900 dark:text-yellow-100",
        danger: "text-red-900 dark:text-red-100",
        success: "text-green-900 dark:text-green-100",
        default: "text-gray-900 dark:text-gray-100",
        outline: "text-gray-900 dark:text-gray-100",
        secondary: "text-gray-900 dark:text-gray-100",
        transparent: "text-gray-900 dark:text-gray-100"
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

export type ZyfloAlertType =
  | "info"
  | "warning"
  | "danger"
  | "success"
  | "default"
  | "outline"
  | "secondary"
  | "transparent"
  | "light"

export type ZyfloAlertIconType =
  | "info"
  | "warning"
  | "danger"
  | "success"
  | "default"
  | "none"

export type ZyfloAlertIconBase = {
  label?: string
  srOnly?: boolean
}

export type ZyfloAlertIcon = (
  | { type: ZyfloAlertIconType }
  | {
      type: "custom"
      customIcon: React.FC<
        React.PropsWithoutRef<
          React.ComponentProps<"svg" | "img" | "div" | "span">
        >
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
}

export default function ZyfloAlert({
  alertTitle,
  alertDescription,
  alertIcon,
  variant = "light",
  disableAnimations = false,
  className,
  ...props
}: ZyfloAlertProps) {
  const alertTitleAs = alertTitle.as ?? "h3"
  let alertIconClassName = "size-6"

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
    className: cn(alertVariants({ variant, className }))
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
              custom={2}
              whileInView="animate"
              viewport={{ once: true }}
              className="flex flex-col items-start justify-start gap-2 sm:flex-row sm:items-center sm:gap-3"
            >
              {!disableAnimations && alertIcon && (
                <motion.div
                  variants={zyfloBlurInFromRightVariants as unknown as Variants}
                  initial="initial"
                  custom={1}
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
                        />
                      )}
                      {alertIcon.type === "warning" && (
                        <MessageSquareWarningIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                        />
                      )}
                      {alertIcon.type === "danger" && (
                        <AlertCircleIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                        />
                      )}
                      {alertIcon.type === "success" && (
                        <CheckCircleIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                        />
                      )}
                      {alertIcon.type === "default" && (
                        <InfoIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                        />
                      )}
                    </div>
                  )}
                </motion.div>
              )}
              {disableAnimations && alertIcon && (
                <div
                  className="flex items-center justify-center"
                  aria-label={alertIcon.label ?? alertIcon.type + " Alert"}
                >
                  {alertIcon.srOnly && (
                    <span className="sr-only">{alertIcon.type} Alert</span>
                  )}
                  {alertIcon.type === "custom" && (
                    <alertIcon.customIcon
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
                        />
                      )}
                      {alertIcon.type === "warning" && (
                        <MessageSquareWarningIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                        />
                      )}
                      {alertIcon.type === "danger" && (
                        <AlertCircleIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                        />
                      )}
                      {alertIcon.type === "success" && (
                        <CheckCircleIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                        />
                      )}
                      {alertIcon.type === "default" && (
                        <InfoIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                        />
                      )}
                    </div>
                  )}
                </div>
              )}
              {React.createElement(
                alertTitleAs,
                {
                  className: cn(alertTitleVariants({ variant }))
                },
                alertTitle.title
              )}
            </motion.div>
          )}
          {disableAnimations && alertTitle && (
            <div>
              {!disableAnimations && alertIcon && (
                <motion.div
                  variants={zyfloBlurInFromRightVariants as unknown as Variants}
                  initial="initial"
                  custom={1}
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
                        />
                      )}
                      {alertIcon.type === "warning" && (
                        <MessageSquareWarningIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                        />
                      )}
                      {alertIcon.type === "danger" && (
                        <AlertCircleIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                        />
                      )}
                      {alertIcon.type === "success" && (
                        <CheckCircleIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                        />
                      )}
                      {alertIcon.type === "default" && (
                        <InfoIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                        />
                      )}
                    </div>
                  )}
                </motion.div>
              )}
              {disableAnimations && alertIcon && (
                <div
                  className="flex items-center justify-center"
                  aria-label={alertIcon.label ?? alertIcon.type + " Alert"}
                >
                  {alertIcon.srOnly && (
                    <span className="sr-only">{alertIcon.type} Alert</span>
                  )}
                  {alertIcon.type === "custom" && (
                    <alertIcon.customIcon
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
                        />
                      )}
                      {alertIcon.type === "warning" && (
                        <MessageSquareWarningIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                        />
                      )}
                      {alertIcon.type === "danger" && (
                        <AlertCircleIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                        />
                      )}
                      {alertIcon.type === "success" && (
                        <CheckCircleIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                        />
                      )}
                      {alertIcon.type === "default" && (
                        <InfoIcon
                          className={cn(
                            alertIconClassName,
                            alertIconVariants({ variant })
                          )}
                        />
                      )}
                    </div>
                  )}
                </div>
              )}
              {React.createElement(
                alertTitleAs,
                {
                  className: cn(alertTitleVariants({ variant }))
                },
                alertTitle.title
              )}
            </div>
          )}
          {!disableAnimations && alertDescription && (
            <motion.div
              variants={zyfloBlurInFromRightVariants as unknown as Variants}
              initial="initial"
              custom={4}
              whileInView="animate"
              viewport={{ once: true }}
              className={cn(alertDescriptionVariants({ variant }))}
            >
              {React.createElement(
                alertDescription.as ?? "p",
                {
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
                className: cn(alertDescriptionVariants({ variant }))
              },
              alertDescription.description
            )}
        </>
      )}
    </>
  )
}
