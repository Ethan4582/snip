import logo from '../../../assets/logo.png'

export default function LandingFooter() {
  return (
    <footer className="w-full bg-white pt-20 px-6 pb-12">
      <div className="w-full max-w-[1200px] mx-auto bg-[#fbfaf9] rounded-[2.5rem] p-10 md:p-16 border border-gray-100 shadow-sm flex flex-col gap-16">
        
        <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-4">
            <h6 className="font-semibold text-[18px] tracking-tight">Product</h6>
            <div className="flex flex-col gap-3 text-gray-500 text-[15px]">
              <a href="#features" className="hover:text-black transition-colors">Features</a>
              <a href="https://docs.snip.app" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Docs</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-semibold text-[18px] tracking-tight">Socials</h6>
            <div className="flex flex-col gap-3 text-gray-500 text-[15px]">
              <a href="#" className="hover:text-black transition-colors">Twitter/X</a>
              <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-black transition-colors">GitHub</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-8">
          <div className="w-full h-[1px] bg-gray-200"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <img src={logo.src} alt="Snip Logo" className="h-8 w-auto" />
            <p className="text-gray-500 text-[14px]">© 2024 Snip. All rights reserved.</p>
          </div>
        </div>

      </div>
    </footer>
  )
}
