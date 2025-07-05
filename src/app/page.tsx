
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Zap, Palette, Code, Smartphone, Globe } from "lucide-react";
import { Metadata } from "next";

const metadata:Metadata ={
  title:"Build Beautiful Websites in Minutes",
  description:"Create stunning, professional websites without writing a single line of code. Drag, drop, and customize with our intuitive builder."
}
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                No-Code Website Builder
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build Beautiful Websites
                <span className="block text-transparent bg-gradient-to-r from-amber-500 to-red-500 bg-clip-text">
                  in Minutes
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Create stunning, professional websites without writing a single line of code. 
                Drag, drop, and customize with our intuitive builder.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/create-new-website">
                  <Button className="bg-black text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-red-500 hover:text-black px-8 py-4 text-lg font-semibold rounded-full">
                    Start Building Free
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
               
              </div>
              
        
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <Palette className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Website Builder Interface</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-amber-200 to-red-200 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features that make website building simple, fast, and enjoyable
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Drag & Drop Editor</h3>
              <p className="text-gray-600">
                Intuitive drag-and-drop interface that makes building websites as easy as moving blocks around.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Responsive</h3>
              <p className="text-gray-600">
                All websites are automatically optimized for mobile devices, tablets, and desktops.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Code</h3>
              <p className="text-gray-600">
                Add custom HTML, CSS, and JavaScript for advanced customization when needed.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SEO Optimized</h3>
              <p className="text-gray-600">
                Built-in SEO tools to help your website rank higher in search engines.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Optimized for speed with CDN delivery and modern web technologies.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">No Technical Skills</h3>
              <p className="text-gray-600">
                Perfect for beginners and professionals alike. No coding knowledge required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Loved by Thousands
            </h2>
            <p className="text-xl text-gray-600">
              See what our users are saying about their experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "This website builder is incredible! I created my business website in just a few hours. 
                The drag-and-drop interface is so intuitive."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-500 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Small Business Owner</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Finally, a website builder that doesn't require any technical knowledge. 
                My portfolio looks professional and loads super fast!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-500 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mike Chen</h4>
                  <p className="text-sm text-gray-600">Freelance Designer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The best investment for my startup. Professional website in minutes, 
                and the customer support is outstanding."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-500 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Emily Rodriguez</h4>
                  <p className="text-sm text-gray-600">Startup Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-200 to-red-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already created stunning websites with our builder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create-new-website">
              <Button className="bg-white text-black hover:bg-gradient-to-r hover:from-amber-500 hover:to-red-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-full">
                Start Building Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          
          </div>
        </div>
      </section>
    </div>
  );
}
