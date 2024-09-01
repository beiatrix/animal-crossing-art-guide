// react
import React, { useState } from "react"

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
import Search from "@/components/Search"
import Tabs from "@/components/Tabs"

const IndexPage: React.FC<PageProps> = () => {
  /**
   * data
   */
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
          fakeImage {
            gatsbyImageData
          }
          realImage { 
            gatsbyImageData
          }
        }
      }
    }
  `)

  const paintings = data.allContentfulArt.nodes.filter((node: Art) => {
    return node.kind === 'Painting'
  })
  
  const statues = data.allContentfulArt.nodes.filter((node: Art) => {
    return node.kind === 'Statue'
  })

  /**
   * search
   */
  const [searchText, setSearchText] = useState('')

  const filteredPaintings = paintings.filter((painting: Art) => {
    return painting.title.toLowerCase().startsWith(searchText.toLowerCase())
  })
  
  const filteredStatues = statues.filter((statue: Art) => {
    return statue.title.toLowerCase().startsWith(searchText.toLowerCase())
  })

  return (
    <main>
      <div className="bg-green-1 p-12 md:p-16 lg:p-20 min-h-screen">
        <Header />
        <Search 
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <Tabs
          paintings={filteredPaintings}
          statues={filteredStatues}
        />
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
