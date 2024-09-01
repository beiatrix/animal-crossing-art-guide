// react
import React, { useState } from 'react'

// types
import type { Art } from "@/types/art"

// components
import ArtCard from "@/components/ArtCard"

interface TabProps {
  paintings: Art[]
  statues: Art[]
}

const Tab = ({ paintings, statues }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="w-100 sm:w-4/5 lg:w-2/3 xl:w-1/2 mx-auto my-4">
      <div className="flex justify-center">
        <button
          onClick={() => setActiveTab(0)}
          className={`px-4 py-4 mx-2 w-5/12 font-bold font-poppins underline text-2xl rounded-t-3xl transition-colors duration-50 ${
            activeTab === 0 ? 'bg-green-2 text-green-7' : 'bg-green-3 text-green-1'
          }`}
        >
          Paintings
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className={`px-4 py-4 mx-2 w-5/12 font-bold font-poppins underline text-2xl rounded-t-3xl transition-colors duration-50 ${
            activeTab === 1 ? 'bg-green-2 text-green-7' : 'bg-green-3 text-green-1'
          }`}
        >
          Statues
        </button>
      </div>

      <div className="p-4 rounded-3xl bg-green-2">
        {activeTab === 0 && (
          <div>
            {
              paintings.length
                ? paintings.map((node: Art) => (
                  <ArtCard art={node} />
                ))
                : <div className="p-6 text-center text-green-6">No paintings found 😓</div>
            }
          </div>
        )}
        {activeTab === 1 && (
          <div>
            {
              statues.length
                ? statues.map((node: Art) => (
                  <ArtCard art={node} />
                ))
                : <div className="p-6 text-center text-green-6">No statues found 😓</div>
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default Tab
