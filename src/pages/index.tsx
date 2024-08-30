// react
import * as React from "react"

// gatsby
import {
  type HeadFC, 
  type PageProps,
  useStaticQuery, 
  graphql
} from "gatsby"

// types
import type { Art } from '@/types/art'

// components
import { SEO } from "@/components/seo"

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulArt {
        nodes {
          title
          alwaysReal
          kind
          originalTitle
          description {
            description
          }
        }
      }
    }
  `)

  return (
    <main>
      <h1>
        Animal Crossing Art Guide
      </h1>
      <div>
        {data.allContentfulArt.nodes.map((node: Art) => (
          <div>{node.title}</div>
        ))}
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
