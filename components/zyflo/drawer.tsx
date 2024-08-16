import * as React from "react"
import { Drawer as ZyfloDrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const ZyfloDrawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof ZyfloDrawerPrimitive.Root>) => (
  <ZyfloDrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
ZyfloDrawer.displayName = "ZyfloDrawer"

const ZyfloDrawerTrigger = ZyfloDrawerPrimitive.Trigger

const ZyfloDrawerPortal = ZyfloDrawerPrimitive.Portal

const ZyfloDrawerClose = ZyfloDrawerPrimitive.Close

const ZyfloDrawerOverlay = React.forwardRef<
  React.ElementRef<typeof ZyfloDrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof ZyfloDrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <ZyfloDrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
))
ZyfloDrawerOverlay.displayName = ZyfloDrawerPrimitive.Overlay.displayName

const ZyfloDrawerContent = React.forwardRef<
  React.ElementRef<typeof ZyfloDrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ZyfloDrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ZyfloDrawerPortal>
    <ZyfloDrawerOverlay />
    <ZyfloDrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-[999] flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      )}
      {...props}
    >
      {children}
      <div className="mx-auto mb-4 h-2 w-[150px] rounded-full bg-foreground/10" />
    </ZyfloDrawerPrimitive.Content>
  </ZyfloDrawerPortal>
))
ZyfloDrawerContent.displayName = "ZyfloDrawerContent"

const ZyfloDrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
ZyfloDrawerHeader.displayName = "ZyfloDrawerHeader"

const ZyfloDrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
ZyfloDrawerFooter.displayName = "ZyfloDrawerFooter"

const ZyfloDrawerTitle = React.forwardRef<
  React.ElementRef<typeof ZyfloDrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ZyfloDrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <ZyfloDrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
ZyfloDrawerTitle.displayName = ZyfloDrawerPrimitive.Title.displayName

const ZyfloDrawerDescription = React.forwardRef<
  React.ElementRef<typeof ZyfloDrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof ZyfloDrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <ZyfloDrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
ZyfloDrawerDescription.displayName =
  ZyfloDrawerPrimitive.Description.displayName

export {
  ZyfloDrawer,
  ZyfloDrawerPortal,
  ZyfloDrawerOverlay,
  ZyfloDrawerTrigger,
  ZyfloDrawerClose,
  ZyfloDrawerContent,
  ZyfloDrawerHeader,
  ZyfloDrawerFooter,
  ZyfloDrawerTitle,
  ZyfloDrawerDescription
}
