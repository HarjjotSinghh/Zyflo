"use client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button, buttonVariants } from "../ui/button"
import {
  ZyfloDrawer,
  ZyfloDrawerTrigger,
  ZyfloDrawerContent,
  ZyfloDrawerHeader,
  ZyfloDrawerDescription
} from "@/components/zyflo/drawer"
import { RxHamburgerMenu } from "react-icons/rx"
import { cn } from "@/lib/utils"
import {
  zyfloBlurInFromBottomVariants,
  zyfloBlurInFromLeftVariants,
  zyfloBlurInFromRightVariants
} from "@/zyflo.config"
import { motion, Variants, AnimatePresence } from "framer-motion"

/**
 * Represents a single item in the Zyflo Navbar.
 *
 * @typedef {Object} ZyfloNavbarItem
 * @property {string} title - The title of the navbar item.
 * @property {string} href - The URL to which the navbar item links.
 * @property {string} [label] - An optional accessible label for the navbar item.
 *
 * @example
 * const navbarItem = {
 *   title: "Home",
 *   href: "/home",
 *   label: "Go to Home Page"
 * };
 */
interface ZyfloNavbarItem {
  title: string
  href: string
  label?: string
  icon?: React.ReactNode
}

/**
 * Represents the properties for a logo image in the Zyflo Navbar.
 *
 * @typedef {Object} ZyfloNavbarLogoImageComponent
 * @property {string} src - The source URL for the logo image.
 * @property {string} alt - The alternative text for the logo image.
 * @property {number} width - The width of the logo image.
 * @property {number} height - The height of the logo image.
 *
 * @example
 * const logoImage = {
 *   src: "/logo.png",
 *   alt: "Company Logo",
 *   width: 200,
 *   height: 50
 * };
 */

interface ZyfloNavbarLogoImageComponent
  extends React.HTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width: number
  height: number
}

/**
 * Represents the properties for a text-based logo in the Zyflo Navbar.
 *
 * @typedef {Object} ZyfloNavbarLogoTextComponent
 * @property {string} text - The text to be displayed as the logo.
 * @property {"h1"|"h2"|"h3"|"h4"|"h5"|"h6"} [as] - The heading level for the text.
 *
 * @example
 * const logoText = {
 *   text: "Company Name",
 *   as: "h1"
 * };
 */
interface ZyfloNavbarLogoTextComponent
  extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

/**
 * Union type for representing either an image or text logo in the Zyflo Navbar.
 *
 * @typedef {ZyfloNavbarLogoImageComponent | ZyfloNavbarLogoTextComponent} ZyfloNavbarLogoComponent
 */
type ZyfloNavbarLogoComponent =
  | ZyfloNavbarLogoImageComponent
  | ZyfloNavbarLogoTextComponent

/**
 * Props for the Zyflo Navbar component.
 *
 * @typedef {Object} ZyfloNavbarProps
 * @property {ZyfloNavbarItem[]} items - The array of items to display in the navbar.
 * @property {boolean} [srOnly=false] - If true, hides the navbar labels visually but keeps them accessible.
 * @property {React.ReactNode} [mobileNavFooter] - Optional footer content for the mobile navbar.
 * @property {ZyfloNavbarLogoComponent} [logo] - Optional logo component (image or text) to display.
 * @property {ZyfloNavbarLogoTextComponent} [logoText] - Optional text logo component to display if an image logo is not provided.
 * @property {boolean} [disableAnimations=false] - If true, disables all animations in the navbar.
 * @property {boolean} [mobileNavbarCentred=false] - If true, centers the mobile navbar content.
 *
 * @example
 * const navbarProps = {
 *   items: [
 *     { title: "Home", href: "/home" },
 *     { title: "About", href: "/about" }
 *   ],
 *   srOnly: false,
 *   mobileNavFooter: <div>Footer Content</div>,
 *   logo: {
 *     src: "/logo.png",
 *     alt: "Company Logo",
 *     width: 200,
 *     height: 50
 *   },
 *   disableAnimations: true,
 *   mobileNavbarCentred: true
 * };
 */
interface ZyfloNavbarProps extends React.ComponentPropsWithRef<"header"> {
  items: ZyfloNavbarItem[]
  srOnly?: boolean
  mobileNavFooter?: React.ReactNode
  logo?: ZyfloNavbarLogoComponent
  logoText?: ZyfloNavbarLogoTextComponent
  disableAnimations?: boolean
  mobileNavbarCentred?: boolean
  sticky?: boolean
}

/**
 * Represents the properties for the mobile navbar footer in the Zyflo Navbar.
 *
 * @typedef {Object} ZyfloMobileNavbarFooterProps
 * @property {React.ReactNode} children - The content to be rendered inside the footer.
 * @property {string} [className] - Optional additional class names for the footer.
 *
 * @example
 * const footerProps = {
 *   children: <p>Footer Content</p>,
 *   className: "custom-footer-class"
 * };
 */
interface ZyfloMobileNavbarFooterProps
  extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
}

/**
 * ZyfloMobileNavbarFooter component renders the footer in the mobile navbar.
 *
 * @param {ZyfloMobileNavbarFooterProps} props - The props for the mobile navbar footer.
 * @returns {JSX.Element} The footer element.
 */
export function ZyfloMobileNavbarFooter({
  children,
  className,
  ...props
}: ZyfloMobileNavbarFooterProps) {
  return (
    <footer className={cn("mt-8", className)} {...props}>
      {children}
    </footer>
  )
}

/**
 * ZyfloNavbar Component
 *
 * This component renders a responsive and customizable navigation bar with optional animations, logo, and mobile drawer support.
 *
 * @component
 *
 * @param {ZyfloNavbarProps} props - The properties for the ZyfloNavbar component.
 * @param {ZyfloNavbarLogoComponent} [props.logo] - The logo component to display in the navbar. Either an image or text.
 * @param {ZyfloNavbarLogoTextComponent} [props.logoText] - The text to display as a logo in the navbar, if no image logo is provided.
 * @param {ZyfloNavbarItem[]} props.items - An array of navigation items to display in the navbar.
 * @param {boolean} [props.srOnly=false] - Whether the items should be screen-reader only.
 * @param {React.ReactNode} [props.mobileNavFooter] - Content to display in the mobile navigation drawer's footer.
 * @param {boolean} [props.disableAnimations=false] - Whether to disable animations in the navbar.
 * @param {boolean} [props.mobileNavbarCentred=false] - Whether to center the mobile navigation items and logo.
 * @param {boolean} [props.sticky=true] - Whether to make the navbar sticky.
 *
 * @example
 * // Basic usage with image logo and navigation items
 * <ZyfloNavbar
 *   logo={{ src: '/logo.png', alt: 'My Logo', width: 120, height: 40 }}
 *   items={[
 *     { title: 'Home', href: '/' },
 *     { title: 'About', href: '/about' },
 *     { title: 'Contact', href: '/contact' }
 *   ]}
 * />
 *
 * @example
 * // Usage with text logo and centered mobile navigation
 * <ZyfloNavbar
 *   logoText={{ text: 'Zyflo', as: 'h1' }}
 *   items={[
 *     { title: 'Home', href: '/' },
 *     { title: 'Services', href: '/services' },
 *     { title: 'Portfolio', href: '/portfolio' },
 *     { title: 'Contact', href: '/contact' }
 *   ]}
 *   mobileNavbarCentred={true}
 * />
 *
 * @example
 * // Usage with animations disabled and a footer in the mobile navigation
 * <ZyfloNavbar
 *   logo={{ src: '/logo.png', alt: 'My Logo', width: 120, height: 40 }}
 *   items={[
 *     { title: 'Home', href: '/' },
 *     { title: 'Blog', href: '/blog' },
 *     { title: 'Contact', href: '/contact' }
 *   ]}
 *   disableAnimations={true}
 *   mobileNavFooter={<Button>Contact Us</Button>}
 * />
 *
 * @example
 * // Screen reader only items
 * <ZyfloNavbar
 *   items={[
 *     { title: 'Dashboard', href: '/dashboard', label: 'Go to Dashboard' },
 *     { title: 'Settings', href: '/settings', label: 'Adjust Settings' }
 *   ]}
 *   srOnly={true}
 * />
 *
 * @param {ZyfloMobileNavbarFooterProps} props - Props for the mobile navigation footer.
 * @returns {JSX.Element} The rendered navigation bar component.
 */
export default function ZyfloNavbar({
  logo,
  logoText,
  items,
  srOnly = false,
  mobileNavFooter = null,
  disableAnimations = false,
  mobileNavbarCentred = false,
  sticky = true,
  className,
  ...props
}: ZyfloNavbarProps) {
  // Justify the navbar items based on the presence of logo and text
  const justify = !logo && !logoText ? "center" : "between"

  // Set the heading as h1 by default
  const headingAs = logoText?.as ?? "h1"

  // Image class name
  const imageClassName = "h-12 w-auto select-none"

  // if logoText is present, change type to ZyfloNavbarLogoTextComponent
  if (logoText) {
    logoText = logoText as ZyfloNavbarLogoTextComponent
  }

  // if logo is present, change type to ZyfloNavbarLogoImageComponent
  if (logo) {
    logo = logo as ZyfloNavbarLogoImageComponent
  }

  return (
    <header
      className={cn(
        `${
          sticky ? "sticky top-0" : "relative"
        } z-50 flex items-center justify-${justify} border-b border-b-muted bg-background/90 px-4 py-5 backdrop-blur lg:px-8`,
        className
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex w-full items-center justify-between space-x-16">
          {/* Text */}
          {logoText && !logo && !disableAnimations && (
            <motion.div
              variants={zyfloBlurInFromRightVariants as unknown as Variants}
              initial="initial"
              custom={0}
              whileInView="animate"
              viewport={{ once: true }}
              className={"w-fit"}
            >
              {logoText &&
                !logo &&
                React.createElement(headingAs, null, logoText.text)}
            </motion.div>
          )}
          {logoText &&
            !logo &&
            disableAnimations &&
            React.createElement(headingAs, null, logoText.text)}
          {/* Logo */}
          {/* Logo With Animation */}
          {logo && logo.src && !disableAnimations && (
            <AnimatePresence>
              <motion.div
                variants={zyfloBlurInFromLeftVariants as unknown as Variants}
                initial="initial"
                custom={0}
                whileInView="animate"
                viewport={{ once: true }}
                className={"w-fit"}
              >
                <img
                  draggable={false}
                  src={logo.src}
                  alt="Logo"
                  width={300}
                  height={100}
                  className={imageClassName}
                />
                <span className="sr-only">{logo.alt + " logo"}</span>
              </motion.div>
            </AnimatePresence>
          )}
          {/* Logo Without Animation */}
          {logo && logo.src && disableAnimations && (
            <div>
              <img
                draggable={false}
                src={logo.src}
                alt={logo.alt}
                width={300}
                height={100}
                className={imageClassName}
              />
              <span className="sr-only">{logo.alt + " logo"}</span>
            </div>
          )}
          {/* Navbar Items */}
          <nav className="hidden lg:flex">
            <ul className="flex list-none flex-row gap-6">
              {/* Items With Animation */}
              {!disableAnimations &&
                items.map((item, index) => (
                  <AnimatePresence>
                    <motion.li
                      variants={
                        zyfloBlurInFromBottomVariants as unknown as Variants
                      }
                      initial="initial"
                      custom={index}
                      whileInView="animate"
                      viewport={{ once: true }}
                      key={item.title + " " + (index + 1).toString()}
                      className="w-full text-base tracking-tight"
                    >
                      <Link
                        key={index}
                        href={item.href}
                        className="inline-flex items-center gap-2 text-base"
                        aria-label={item.label ?? item.title}
                      >
                        {item.icon && item.icon}
                        {item.title}
                        {srOnly && (
                          <span className="sr-only">{item.label}</span>
                        )}
                      </Link>
                    </motion.li>
                  </AnimatePresence>
                ))}
              {/* Items Without Animation */}
              {disableAnimations &&
                items.map((item, index) => (
                  <li
                    key={item.title + " " + (index + 1).toString()}
                    className="w-full text-base tracking-tight"
                  >
                    <Link
                      key={index}
                      href={item.href}
                      className="inline-flex items-center gap-2 text-base"
                      aria-label={item.label ?? item.title}
                    >
                      {item.icon && item.icon}
                      {item.title}
                      {srOnly && <span className="sr-only">{item.label}</span>}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>

      <ZyfloDrawer direction="top">
        <ZyfloDrawerTrigger className="block lg:hidden" asChild={true}>
          {!disableAnimations ? (
            // Trigger With Animation
            <motion.div
              variants={zyfloBlurInFromRightVariants as unknown as Variants}
              initial="initial"
              custom={0}
              whileInView="animate"
              viewport={{ once: true }}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "flex cursor-pointer"
              )}
            >
              <RxHamburgerMenu className="size-5" />
            </motion.div>
          ) : (
            // Trigger Without Animation
            <RxHamburgerMenu className="size-5" />
          )}
        </ZyfloDrawerTrigger>
        <ZyfloDrawerContent>
          <ZyfloDrawerHeader className="mt-4 !text-left">
            {/* Logo With Animation */}
            {logo && logo.src && !disableAnimations && (
              <motion.div
                variants={zyfloBlurInFromLeftVariants as unknown as Variants}
                initial="initial"
                custom={0}
                whileInView="animate"
                viewport={{ once: true }}
                className={`flex items-${
                  mobileNavbarCentred ? "center" : "start"
                } justify-${mobileNavbarCentred ? "center" : "start"}`}
              >
                <img
                  draggable={false}
                  src={logo.src}
                  alt="Logo"
                  className={imageClassName}
                  width={logo.width}
                  height={logo.height}
                />
              </motion.div>
            )}
            {/* Logo Without Animation */}
            {logo && logo.src && disableAnimations && (
              <div
                className={`flex items-${
                  mobileNavbarCentred ? "center" : "start"
                } justify-${mobileNavbarCentred ? "center" : "start"}`}
              >
                <img
                  draggable={false}
                  src={logo.src}
                  alt="Logo"
                  className={imageClassName}
                  width={logo.width}
                  height={logo.height}
                />
              </div>
            )}
            {/* Text With Animation */}
            {logoText && !logo && !disableAnimations && (
              <div className="flex items-start justify-start">
                <motion.div
                  variants={zyfloBlurInFromRightVariants as unknown as Variants}
                  initial="initial"
                  custom={0}
                  whileInView="animate"
                  viewport={{ once: true }}
                  className={"w-fit"}
                >
                  {logoText &&
                    !logo &&
                    React.createElement(headingAs, null, logoText.text)}
                </motion.div>
              </div>
            )}
            {/* Text Without Animation */}
            {logoText &&
              !logo &&
              disableAnimations &&
              React.createElement(headingAs, null, logoText.text)}
          </ZyfloDrawerHeader>
          <ZyfloDrawerDescription className="p-4">
            <nav>
              <ul
                className={`flex list-none flex-col gap-2 justify-${
                  mobileNavbarCentred ? "center" : "start"
                } items-${mobileNavbarCentred ? "center" : "start"}`}
              >
                {/* Items With Animation */}
                {!disableAnimations &&
                  items.map((item, index) => (
                    <motion.li
                      variants={
                        {
                          ...zyfloBlurInFromLeftVariants,
                          initial: {
                            ...zyfloBlurInFromLeftVariants.initial,
                            x: -45,
                            opacity: 0
                          },
                          animate: (index: number) => ({
                            ...zyfloBlurInFromLeftVariants.animate(index),
                            transition: {
                              ...zyfloBlurInFromLeftVariants.animate(index)
                                .transition,
                              delay: 0.25 * index // modify the `delay` value
                            }
                          })
                        } as unknown as Variants
                      }
                      initial="initial"
                      custom={index}
                      whileInView="animate"
                      viewport={{ once: true }}
                      key={item.title + " " + (index + 1).toString()}
                      className={`w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary text-${
                        mobileNavbarCentred ? "center" : "left"
                      }`}
                    >
                      <Link
                        className="inline-flex w-fit items-center gap-2"
                        href={item.href}
                        aria-label={item.label ?? item.title}
                      >
                        {item.icon && item.icon}
                        {item.title}
                        {srOnly && (
                          <span className="sr-only">{item.label}</span>
                        )}
                      </Link>
                    </motion.li>
                  ))}
                {/* Items Without Animation */}
                {disableAnimations &&
                  items.map((item, index) => (
                    <li
                      key={item.title + " " + (index + 1).toString()}
                      className={`w-fit text-foreground/80 transition-all duration-300 ease-in-out hover:text-primary text-${
                        mobileNavbarCentred ? "center" : "left"
                      }`}
                    >
                      <Link
                        className="inline-flex w-fit items-center gap-2"
                        href={item.href}
                        aria-label={item.label ?? item.title}
                      >
                        {item.icon && item.icon}
                        {item.title}
                        {srOnly && (
                          <span className="sr-only">{item.label}</span>
                        )}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>

            {/* Mobile Navbar Footer With Animation */}
            {mobileNavFooter && !disableAnimations && (
              <ZyfloMobileNavbarFooter
                className={`justify-${
                  mobileNavbarCentred ? "center" : "start"
                } flex w-full`}
              >
                <AnimatePresence>
                  <motion.div
                    variants={{
                      initial: {
                        opacity: 0,
                        x: -45
                      },
                      animate: {
                        opacity: 1,
                        x: 0
                      }
                    }}
                    initial="initial"
                    custom={1}
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ delay: items.length * 0.3, duration: 0.4 }}
                    className={"w-fit"}
                  >
                    {mobileNavFooter}
                  </motion.div>
                </AnimatePresence>
              </ZyfloMobileNavbarFooter>
            )}
            {/* Mobile Navbar Footer Without Animation */}
            {mobileNavFooter && disableAnimations && (
              <ZyfloMobileNavbarFooter
                className={`justify-${
                  mobileNavbarCentred ? "center" : "start"
                } flex w-full`}
              >
                {mobileNavFooter}
              </ZyfloMobileNavbarFooter>
            )}
          </ZyfloDrawerDescription>
        </ZyfloDrawerContent>
      </ZyfloDrawer>
    </header>
  )
}
