export default function CV() {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white gap-6">
  
        <h1 className="text-3xl font-semibold">
          Hilary Azimoh — CV
        </h1>
  
        <p className="text-gray-400">
          View or download my CV below
        </p>
  
        <div className="flex gap-4">
  
          <a
            href="/Hilary_Azimoh_CV.pdf"
            target="_blank"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition"
          >
            View CV
          </a>
  
          <a
            href="/Hilary_Azimoh_CV.pdf"
            download
            className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
          >
            Download CV
          </a>
  
        </div>
  
      </div>
    )
  }