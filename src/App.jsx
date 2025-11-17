import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <Testimonials />
        <FAQ />

        <footer className="py-10 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} PosturePro. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#benefits" className="text-gray-600 hover:text-gray-900">Benefits</a>
              <a href="#products" className="text-gray-600 hover:text-gray-900">Products</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
              <a href="/test" className="text-gray-600 hover:text-gray-900">System Test</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
