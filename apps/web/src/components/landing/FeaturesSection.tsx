export default function FeaturesSection() {
  return (
    <div id="features" className="w-full bg-[#fbfaf9] py-24 px-6 border-t border-gray-100">
      <div className="flex flex-col items-center gap-6 mb-16">
        <h2 className="font-bold text-[36px] md:text-[48px] tracking-tight text-center">Everything you need.</h2>
        <p className="text-gray-600 text-[18px] max-w-[700px] text-center leading-relaxed">
          Snip handles the heavy lifting for your short links, so you can track performance, organize campaigns, and route users instantly without the hassle.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-[1200px] mx-auto">
        
        {/* Feature 1 */}
        <div className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 gap-6">
          <div className="w-full aspect-[1.36/1] rounded-xl overflow-hidden bg-gray-50">
            <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F8387747737b3ace5e7f2bf53779d46312beaa702.png?generation=1783850838674684&alt=media" className="w-full h-full object-cover" alt="Fast Redirects" />
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="font-semibold text-[22px] tracking-tight">Blazing Fast Redirects</h6>
            <p className="text-gray-600 text-[15.5px] leading-relaxed">Served directly from Cloudflare's edge cache. Your users get redirected in milliseconds, anywhere in the world.</p>
          </div>
        </div>
        
        {/* Feature 2 */}
        <div className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 gap-6">
          <div className="w-full aspect-[1.36/1] rounded-xl overflow-hidden bg-gray-50">
            <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F07506d145da3fb70bec63cd5335adda3d836e0f7.png?generation=1783850838683402&alt=media" className="w-full h-full object-cover" alt="Deep Analytics" />
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="font-semibold text-[22px] tracking-tight">Deep Analytics</h6>
            <p className="text-gray-600 text-[15.5px] leading-relaxed">Track clicks, devices, referrers, and geography. Snip's dashboard gives you instant insight into how your links are performing.</p>
          </div>
        </div>
        
        {/* Feature 3 */}
        <div className="flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 gap-6">
          <div className="w-full aspect-[1.36/1] rounded-xl overflow-hidden bg-gray-50">
             <img src="https://storage.googleapis.com/download/storage/v1/b/prd-shared-services.firebasestorage.app/o/h2m-assets%2F0f9669de8fa35fa9d888fe605ebf4c34d46ac2c0.png?generation=1783850838760568&alt=media" className="w-full h-full object-cover" alt="Custom Aliases" />
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="font-semibold text-[22px] tracking-tight">Custom Aliases & Expiry</h6>
            <p className="text-gray-600 text-[15.5px] leading-relaxed">Create memorable custom aliases and set expiration dates so your short links automatically deactivate when campaigns end.</p>
          </div>
        </div>

      </div>
    </div>
  )
}
