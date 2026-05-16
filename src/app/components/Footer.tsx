import { Leaf, Instagram, Mail} from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
    
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="w-6 h-6 text-green-400" />
          <span className="text-xl font-semibold">Rashi Herbal Products</span>
        </div>
    
        <p className="text-gray-400 mb-6">
          Natural wellness solutions for a healthier life
        </p>
    
        {/* ✅ Social Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
    
          {/* Instagram */}
          <a
            href="https://instagram.com/rashi.herbals"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition"
          >
            <Instagram className="w-6 h-6" />
            <span>@rashi.herbals</span>
          </a>
    
          {/* Email */}
          <a
            href="mailto:rashi@rashiherbals.com"
            className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition"
          >
            <Mail className="w-6 h-6" />
            <span>rashi@rashiherbals.com</span>
          </a>
    
        </div>
    
        <p className="text-sm text-gray-500">
          © 2026 Rashi Herbal Products. All rights reserved.
        </p>
    
      </div>
    </footer>
)
}