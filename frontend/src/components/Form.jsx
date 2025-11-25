import React from 'react';
import { Helmet } from 'react-helmet-async'; // Assuming you use react-helmet-async
import Header from './Header';

function App() {
  return (
    <>
      {/* SEO Improvement 1: Dynamic Metadata using Helmet */}
      <Helmet>
        <title>Get Pricing Analysis | Pricer - Project Cost Tool</title>
        <meta name="description" content="Submit your product details (category, fabric, user) to get an accurate cost and pricing analysis instantly with Pricer." />
        <link rel="canonical" href="https://yourpricerapp.com/analysis-form" />
        
        {/* SEO Improvement 2: Structured Data (Schema Markup) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Required Data for Pricing Analysis",
              "description": "Form to submit data for project or product cost estimation using the Pricer tool.",
              "url": "https://yourpricerapp.com/analysis-form"
            }
          `}
        </script>
      </Helmet>
      
    <Header />
      
    <div className="min-h-screen flex items-center justify-center ">
        <main className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-xl w-full max-w-lg p-8 border border-purple-200">
            {/* SEO Improvement 3: Descriptive H1 Tag */}
            <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
              Pricer: Start Your Product Cost Analysis
            </h1>
            
            {/* SEO Improvement 4: Use a fieldset for better form structure and accessibility */}
            <form className="space-y-6" aria-label="Product Data Submission Form">
                <fieldset className="space-y-4">
                    <legend className="sr-only">Product Specification Fields</legend>
                    
                    {/* Category (Added 'name' attribute) */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-semibold text-gray-700">
                            Product Category *
                        </label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            placeholder="e.g., shirt, pants, footwear"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>
                    
                    {/* Subcategory (Added 'name' attribute) */}
                    <div>
                        <label htmlFor="subcategory" className="block text-sm font-semibold text-gray-700">
                            SubCategory
                        </label>
                        <input
                            type="text"
                            id="subcategory"
                            name="subcategory"
                            placeholder="e.g., parachute pants, trouser pants, denim jacket"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>
                    
                    {/* Fabric (Added 'name' attribute) */}
                    <div>
                        <label htmlFor="fabric" className="block text-sm font-semibold text-gray-700">
                            Fabric / Material *
                        </label>
                        <input
                            type="text"
                            id="fabric"
                            name="fabric"
                            placeholder="e.g., cotton, polyester, leather"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>
                    
                    {/* Color (Added 'name' attribute) */}
                    <div>
                        <label htmlFor="color" className="block text-sm font-semibold text-gray-700">
                            Color
                        </label>
                        <input
                            type="text"
                            id="color"
                            name="color"
                            placeholder="e.g., red, blue, black"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        />
                    </div>
                    
                    {/* Product User (Added 'name' attribute) */}
                    <div>
                        <label htmlFor="productUser" className="block text-sm font-semibold text-gray-700">
                            Target User
                        </label>
                        <select 
                            id="productUser"
                            name="productUser"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        >
                            <option value="">Select Target User</option>
                            <option value="kids">Kids</option>
                            <option value="men">Men</option>
                            <option value="women">Women</option>
                        </select>
                    </div>
                    
                    {/* Image */}
                    <div>
                        <label htmlFor="image" className="block text-sm font-semibold text-gray-700">
                            Upload Reference Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                        />
                    </div>
                </fieldset>
                
                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition duration-150"
                >
                    Analyze & Get Price Estimate
                </button>
            </form>
        </main>
    </div>
    </>
  );
}

export default App;