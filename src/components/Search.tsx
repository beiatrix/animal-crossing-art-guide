// react
import React, { useState, useRef, useEffect } from "react"
import { FiSearch } from "react-icons/fi"

interface SearchProps {
  searchText: string
  setSearchText: (searchText: string) => void
}

const Search = ({ searchText, setSearchText }: SearchProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)

  // Close the search bar if clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  return (
    <div className="fixed bottom-6 right-6" ref={wrapperRef}>
      <div className="flex items-center space-x-2">
        {/* Search Input (hidden when FAB is closed) */}
        <input
          value={searchText}
          type="text"
          placeholder="Search..."
          className={`transform transition-all duration-300 ease-out p-3 px-5 rounded-full border border-green-2 text-green-8 placeholder-green-4 focus:outline-none ${
            isOpen ? 'scale-100 opacity-100 w-64' : 'scale-75 opacity-0 w-0'
          }`}
          style={{ width: isOpen ? '16rem' : '0' }}
          onChange={e => setSearchText(e.target.value)}
        />

        {/* Floating Action Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-5 hover:bg-green-6 text-white p-4 rounded-full shadow-lg focus:outline-none transition-transform duration-300 ease-out"
        >
          <FiSearch className="text-xl" />
        </button>
      </div>
    </div>
  )
}

export default Search
