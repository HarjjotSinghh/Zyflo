"use client"
import React, { useEffect, useRef, useState } from "react"

interface StickyProps {
  children: React.ReactNode
  offsetTop?: number
  className?: string
  style?: React.CSSProperties
}

const Sticky: React.FC<StickyProps> = ({
  children,
  offsetTop = 0,
  className,
  style
}) => {
  const [isSticky, setIsSticky] = useState(false)
  const [stickyTop, setStickyTop] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const stickyPoint = stickyTop !== null ? stickyTop : rect.top

        if (window.scrollY > stickyPoint - offsetTop) {
          setIsSticky(true)
          setStickyTop(stickyPoint)
        } else {
          setIsSticky(false)
          setStickyTop(null)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [stickyTop, offsetTop])

  const stickyStyle: React.CSSProperties = isSticky
    ? {
        position: "fixed",
        top: offsetTop,
        left: ref.current?.getBoundingClientRect().left,
        width: ref.current?.getBoundingClientRect().width,
        zIndex: 1000
      }
    : {}

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, ...(isSticky ? stickyStyle : {}) }}
    >
      {children}
    </div>
  )
}

export default Sticky
