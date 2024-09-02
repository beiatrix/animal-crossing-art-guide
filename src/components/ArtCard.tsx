// react
import React from "react"

// gatsby
import { GatsbyImage } from 'gatsby-plugin-image'

// types
import type { Art } from "@/types/art"

interface ArtCardProps {
  art: Art
}

const ArtCard = ({ art }: ArtCardProps) => {
  function getDescription (art: Art) {
    return art.description?.description
      ? art.description?.description
      : art.alwaysReal
        ? `The ${art.title} is always real.`
        : ''
  }

  return (
    <div className="p-3 md:p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-green-8 pb-4">
        {art.title}
      </h1>
      <h2 className="font-serif text-green-7 pb-6 md:pb-8">
        {art.originalTitle}
      </h2>
      <div className="rounded-2xl bg-green-1 p-4 md:p-10 mb-4">
        <div className="flex justify-center">
          <div className={art.alwaysReal ? 'w-100 text-center' : 'w-1/2 text-center'}>
            {
              <div>
                <GatsbyImage
                  className="max-h-60 w-auto m-2"
                  objectFit="scale-down"
                  image={art.realImage?.gatsbyImageData}
                  alt={`Real ${art.title}`}
                />
                {   
                  !art.alwaysReal && 
                    <p className="font-bold font-poppins text-sm uppercase text-gray-700 tracking-wide p-3">
                      Real ✅
                    </p>
                }
              </div>
            }
          </div>

          {
              !art.alwaysReal && 
                <div className="w-1/2 text-center">
                  <GatsbyImage
                    className="max-h-60 w-auto m-2"
                    objectFit="scale-down"
                    image={art.fakeImage?.gatsbyImageData}
                    alt={`Fake ${art.title}`}
                  />
                  <p className="font-bold font-poppins text-sm uppercase text-gray-700 tracking-wide p-3">
                    Fake ❌
                  </p>
                </div>
          }

        </div>
        <p className="md:text-lg text-green-7 text-center pt-3 md:pt-6 md:px-10 lg:px-20">
          {getDescription(art)}
        </p>
      </div>
    </div>
  )
}

export default ArtCard