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

  const paintings = data.allContentfulArt.nodes.filter((node: Art) => {
    return node.kind === 'Painting'
  })
  
  const sculptures = data.allContentfulArt.nodes.filter((node: Art) => {
    return node.kind === 'Sculpture'
  })

  return (
    <main>
      <div className="bg-neutral-1 min-h-screen">
        <header className="p-12 text-center">
          <h1 className="text-6xl text-darkgreen font-bold">
            Animal Crossing Art Guide  
          </h1>
          <h2 className="text-xl py-3 text-earth-4">
            The definitive guide to Redd's real vs fake art! 🦊 🖼️ 🧐
          </h2>
        </header>
        <div className="px-24 flex">
          <div className="w-1/2 text-center">
            {paintings.map((node: Art) => (
              <div>{node.title}</div>
            ))}
          </div>
          <div className="w-1/2 text-center">
            {sculptures.map((node: Art) => (
              <div>{node.title}</div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
