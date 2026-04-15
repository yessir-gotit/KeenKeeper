export default function Footer() {
  return (
    <div className="bg-green-900 w-full flex justify-center pt-16 pb-10 px-4">
      <div className="w-full max-w-[1600px] flex flex-col items-center mt-5">
        
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 tracking-wide">
          KeenKeeper
        </h1>
        
        <p className="text-[#8ca395] text-center text-sm md:text-base mb-5">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="text-white mb-4 text-lg">Social Links</div>
        
        <div className="flex gap-4 mb-4">
          <div className="bg-white rounded-full w-12.5 h-12.5 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#2d5240" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
          <div className="bg-white rounded-full w-12.5 h-12.5 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2d5240" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </div>
          <div className="bg-white rounded-full w-12.5 h-12.5 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#2d5240" viewBox="0 0 24 24">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
            </svg>
          </div>
          
        </div>
        
        <div className="w-full max-w-[1100px]">
          <div className="divider"></div>
        </div>
        
        
        <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center text-[#8ca395] text-sm gap-4 md:gap-0">
          <div>
            © 2026 KeenKeeper. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <p  className="hover:text-white transition-colors hover:cursor-pointer">Privacy Policy</p>
            <p  className="hover:text-white transition-colors hover:cursor-pointer">Terms of Service</p>
            <p className="hover:text-white transition-colors hover:cursor-pointer">Cookies</p>
          </div>
        </div>

      </div>
    </div>
  )
}