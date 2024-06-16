"use client"

import Media from "@/components/Media"
import { animatePageIn } from "@/utils/animations"
import { ReactNode, useEffect } from "react"

export default function Template({ children }: { children: ReactNode }) {
  useEffect(() => {
    animatePageIn()
  }, [])
  return (
    <>
      <div className="relative z-[1000]">
        <div id="banner-1" className="banner left-0" />
        <div id="banner-2" className="banner left-1/4" />
        <div id="banner-3" className="banner left-2/4" />
        <div id="banner-4" className="banner left-3/4" />
      </div>
      <Media />

      {children}
    </>
  )
}