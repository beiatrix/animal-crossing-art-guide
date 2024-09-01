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
    <div className="p-6">
      <h1 className="text-5xl font-bold text-green-8 pb-4">
        {art.title}
      </h1>
      <h2 className="font-serif text-green-7 pb-8">
        {art.originalTitle}
      </h2>
      <div className="rounded-2xl bg-green-1 p-10 mb-4">
        <div className="flex">
          <div className="w-1/2 text-center">
            {
              <div>
                <GatsbyImage
                  className="h-60 w-auto m-2"
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
          <div className="w-1/2 text-center">
          {
              art.alwaysReal
                ? <div className="h-full w-full place-content-center">
                    <p className="text-lg text-gray-800 font-extrabold p-3">This artwork is always real</p>
                    <p className="text-2xl">🎉</p>
                  </div>
                : <div>
                    <GatsbyImage
                      className="h-60 w-auto m-2"
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
        </div>
        <p className="text-lg text-green-7 text-center pt-6 px-20">
          {getDescription(art)}
        </p>
      </div>
    </div>
  )
}

export default ArtCard