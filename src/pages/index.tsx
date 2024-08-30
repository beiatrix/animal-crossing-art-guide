import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { SEO } from "@/components/seo"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>
        Animal Crossing Art Guide
      </h1>
      <div>
        art
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
