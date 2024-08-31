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
import Header from "@/components/Header"
import Tabs from "@/components/Tabs"

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allContentfulArt(sort: {title: ASC}) {
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

  const paintings = data.allContentfulArt.nodes.filter((node: Art) => {
    return node.kind === 'Painting'
  })
  
  const sculptures = data.allContentfulArt.nodes.filter((node: Art) => {
    return node.kind === 'Sculpture'
  })

  return (
    <main>
      <div className="bg-green-1 p-12 min-h-screen">
        <Header />
        <Tabs
          paintings={paintings}
          sculptures={sculptures}
        />
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
