import React from 'react'
import { useSiteMetadata } from '@/hooks/use-site-metadata'

export const SEO = () => {
  const { title, description, siteUrl } = useSiteMetadata()

  const seo = {
    title,
    description,
    url: siteUrl
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </>
  )
}