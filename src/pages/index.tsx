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

  /**
   * search
   */
  const [searchText, setSearchText] = useState('')

  const filteredPaintings = paintings.filter((painting: Art) => {
    return painting.title.toLowerCase().startsWith(searchText.toLowerCase())
  })
  
  const filteredSculptures = sculptures.filter((sculpture: Art) => {
    return sculpture.title.toLowerCase().startsWith(searchText.toLowerCase())
  })

  return (
    <main>
      <div className="bg-green-1 p-12 min-h-screen">
        <Header />
        <Search 
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <Tabs
          paintings={filteredPaintings}
          sculptures={filteredSculptures}
        />
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
