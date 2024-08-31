// react
import React, { useState } from 'react'

// types
import type { Art } from "@/types/art"

interface TabProps {
  paintings: Art[]
  sculptures: Art[]
}

const Tab = ({ paintings, sculptures }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="w-100 sm:w-4/5 lg:w-2/3 mx-auto my-4">
      <div className="flex justify-center">
        <button
          onClick={() => setActiveTab(0)}
          className={`px-4 py-4 mx-2 w-5/12 font-bold font-poppins text-2xl rounded-t-lg transition-colors duration-50 ${
            activeTab === 0 ? 'bg-green-2 text-green-7' : 'bg-green-3 text-green-1'
          }`}
        >
          Paintings
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className={`px-4 py-4 mx-2 w-5/12 font-bold font-poppins text-2xl rounded-t-lg transition-colors duration-50 ${
            activeTab === 1 ? 'bg-green-2 text-green-7' : 'bg-green-3 text-green-1'
          }`}
        >
          Statues
        </button>
      </div>

      <div className="p-4 rounded-lg bg-green-2">
        {activeTab === 0 && (
          <div>
            {paintings.map((node: Art) => (
              <div className="text-4xl font-bold font-serif text-green-7">
                {node.title}
              </div>
            ))}
          </div>
        )}
        {activeTab === 1 && (
          <div>
            {sculptures.map((node: Art) => (
              <div className="text-4xl font-bold font-serif text-green-7">
                {node.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Tab
