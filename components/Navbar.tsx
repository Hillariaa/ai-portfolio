"use client"

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">

      <div className="flex gap-8 px-8 py-3 rounded-full
      bg-white/5 backdrop-blur-md border border-white/10
      shadow-lg text-sm">

        <a href="#" className="hover:text-purple-400 transition">
          Home
        </a>

        <a href="#about" className="hover:text-purple-400 transition">
          About
        </a>

        <a href="#projects" className="hover:text-purple-400 transition">
          Projects
        </a>

        <a href="#contact" className="hover:text-purple-400 transition">
          Contact
        </a>

      </div>

    </nav>
  )
}