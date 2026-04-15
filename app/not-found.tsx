import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12">
        
        <h2 className="text-6xl md:text-8xl font-black text-[#1e293b] mb-4 tracking-tight">
          404
        </h2>
        
        <p className="text-[#64748b] text-lg md:text-xl mb-8 max-w-md mx-auto">
          Oops! You are in wrong place.
        </p>
        
        <Link 
          href="/" 
          className="w-full sm:w-auto bg-[#214a38] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1a3a2c] transition-all active:scale-95 shadow-lg shadow-emerald-900/10"
        >
          Back to Dashboard
        </Link>
      </main>

      <Footer />
    </div>
  )
}