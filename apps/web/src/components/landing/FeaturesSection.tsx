"use client"

import { motion } from 'framer-motion'
import f1 from '../../../assets/f1.png'
import f2 from '../../../assets/f2.png'
import f3 from '../../../assets/f3.png'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export default function FeaturesSection() {
  return (
    <div id="features" className="w-full bg-[#fbfaf9] py-24 px-6 border-t border-gray-100 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 mb-16"
      >
        <h2 className="font-bold text-[36px] md:text-[44px] tracking-tight text-center">Everything you need.</h2>
        <p className="text-gray-600 text-[18px] max-w-[640px] text-center leading-relaxed">
          Snip handles the heavy lifting for your short links, so you can track performance, organize campaigns, and route users instantly without the hassle.
        </p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-[1100px] mx-auto"
      >
        
        {/* Feature 1 */}
        <motion.div variants={itemVariants} className="group flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 gap-6 hover:shadow-md transition-shadow duration-300">
          <div className="w-full aspect-[1.36/1] rounded-xl overflow-hidden bg-gray-50 relative">
            <img 
              src={f1.src} 
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out" 
              alt="Fast Redirects" 
            />
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="font-semibold text-[20px] tracking-tight">Blazing Fast Redirects</h6>
            <p className="text-gray-600 text-[15px] leading-relaxed">Served directly from Cloudflare's edge cache. Your users get redirected in milliseconds, anywhere in the world.</p>
          </div>
        </motion.div>
        
        {/* Feature 2 */}
        <motion.div variants={itemVariants} className="group flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 gap-6 hover:shadow-md transition-shadow duration-300">
          <div className="w-full aspect-[1.36/1] rounded-xl overflow-hidden bg-gray-50 relative">
            <img 
              src={f2.src}  
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out" 
              alt="Deep Analytics" 
            />
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="font-semibold text-[20px] tracking-tight">Deep Analytics</h6>
            <p className="text-gray-600 text-[15px] leading-relaxed">Track clicks, devices, referrers, and geography. Snip's dashboard gives you instant insight into how your links are performing.</p>
          </div>
        </motion.div>
        
        {/* Feature 3 */}
        <motion.div variants={itemVariants} className="group flex flex-col bg-white p-6 rounded-2xl shadow-sm border border-gray-100 gap-6 hover:shadow-md transition-shadow duration-300">
          <div className="w-full aspect-[1.36/1] rounded-xl overflow-hidden bg-gray-50 relative">
             <img 
              src={f3.src} 
               className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out" 
               alt="Custom Aliases" 
             />
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="font-semibold text-[20px] tracking-tight">Custom Aliases & Expiry</h6>
            <p className="text-gray-600 text-[15px] leading-relaxed">Create memorable custom aliases and set expiration dates so your short links automatically deactivate when campaigns end.</p>
          </div>
        </motion.div>

      </motion.div>
    </div>
  )
}
