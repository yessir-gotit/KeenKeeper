import { Plus } from "lucide-react"

export default function Banner() {
  return (
    <div className="bg-[#f8f9fa] w-full flex justify-center pt-20 pb-10 px-4">
      <div className="w-full max-w-[1600px] flex flex-col items-center">
        
        <h1 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
          Friends to keep close in your life
        </h1>
        
        <p className="text-gray-500 text-center max-w-2xl text-sm md:text-base mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button className="flex items-center gap-2 bg-[#2F5847] hover:bg-[#244537] text-white px-5 py-2.5 rounded-md font-medium transition-colors mb-12 shadow-sm cursor-pointer">
          <Plus size={18} />
          Add a Friend
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
          <div className="bg-white rounded-xl py-8 flex flex-col items-center justify-center shadow-sm border border-gray-50 hover:shadow-xl transition-all">
            <span className="text-3xl font-bold text-green-800 mb-2">10</span>
            <span className="text-gray-500 text-sm">Total Friends</span>
          </div>

          <div className="bg-white rounded-xl py-8 flex flex-col items-center justify-center shadow-sm border border-gray-50 hover:shadow-xl transition-all">
            <span className="text-3xl font-bold text-green-800 mb-2">3</span>
            <span className="text-gray-500 text-sm">On Track</span>
          </div>

          <div className="bg-white rounded-xl py-8 flex flex-col items-center justify-center shadow-sm border border-gray-50 hover:shadow-xl transition-all">
            <span className="text-3xl font-bold text-green-800 mb-2">6</span>
            <span className="text-gray-500 text-sm">Need Attention</span>
          </div>

          <div className="bg-white rounded-xl py-8 flex flex-col items-center justify-center shadow-sm border border-gray-50 hover:shadow-xl transition-all">
            <span className="text-3xl font-bold text-green-800 mb-2">12</span>
            <span className="text-gray-500 text-sm">Interactions This Month</span>
          </div>
        </div>

        <div className="w-full max-w-5xl border-b border-gray-200 mt-10"></div>
        
      </div>
    </div>
  )
}