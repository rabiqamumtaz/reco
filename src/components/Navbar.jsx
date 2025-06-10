import React from "react"
import { Menu } from "lucide-react"
 
export default function Navbar({ onMenuClick }) {
  return (
    <div className="bg-white border border-gray-200 p-4 shadow-sm flex items-center justify-between">
      <button onClick={onMenuClick} className="lg:hidden text-gray-600">
        <Menu className="w-6 h-6" />
      </button>
    </div>
  )
}