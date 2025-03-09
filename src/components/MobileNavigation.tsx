import { Home, Search, Library } from "lucide-react"

export function MobileNavigation() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-10">
      <div className="flex justify-around py-3">
        <a href="#" className="flex flex-col items-center text-gray-400 hover:text-white">
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-400 hover:text-white">
          <Search size={24} />
          <span className="text-xs mt-1">Search</span>
        </a>
        <a href="#" className="flex flex-col items-center text-gray-400 hover:text-white">
          <Library size={24} />
          <span className="text-xs mt-1">Library</span>
        </a>
      </div>
    </div>
  )
}

