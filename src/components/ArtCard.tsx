// react
import React from "react"

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
        ? 'This artwork is always real.'
        : ''
  }

  return (
    <div className="p-6">
      <h1 className="text-5xl font-bold text-green-8 pb-3">
        {art.title}
      </h1>
      <h2 className="font-serif text-green-6 pb-3">
        {art.originalTitle}
      </h2>
      <p className="text-green-7">
        {getDescription(art)}
      </p>
    </div>
  )
}

export default ArtCard