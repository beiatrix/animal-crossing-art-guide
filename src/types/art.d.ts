import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface Art {
  title: string
  alwaysReal: boolean
  kind: string
  originalTitle: string
  description: {
    description: string
  }
  fakeImage: {
    gatsbyImageData: IGatsbyImageData
  }
  realImage: {
    gatsbyImageData: IGatsbyImageData
  }
}