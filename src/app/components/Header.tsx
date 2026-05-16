import { Leaf } from 'lucide-react';
export default function Header() {
    return (
              <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Leaf className="w-8 h-8 text-green-600" />
                      <span className="text-xl font-semibold text-gray-900">Rashi Herbal Products</span>
                    </div>
                    <nav className="hidden md:flex gap-8">
                      <a href="#products" className="text-gray-600 hover:text-green-600 transition-colors">Products</a>
                      <a href="#benefits" className="text-gray-600 hover:text-green-600 transition-colors">Benefits</a>
                      <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors">About</a>
                    </nav>
                  </div>
                </div>
              </header>
    )
}