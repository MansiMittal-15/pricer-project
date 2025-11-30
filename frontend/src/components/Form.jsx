import React from 'react';
import { Helmet } from 'react-helmet-async'; // Imported Helmet for page-specific metadata
import Header from './Header'; 

// Renamed the component from 'App' to 'DataFormPage' for clarity and context
function DataFormPage() {
  
  // NOTE: In a real app, you would add state (useState) and a handleSubmit function here.
  const handleSubmit = (e) => {
      e.preventDefault();
      // Add form validation and data submission logic here
      console.log("Form Submitted");
  };

  return (
    <>
    {/* 👑 1. React Helmet: Page-Specific Metadata 👑 */}
    <Helmet>
        <title>Data Input | Price Analysis Tool - Pricer</title>
        <meta
          name="description"
          content="Enter product details (category, fabric, color, user) to receive AI-powered price recommendations and market analysis."
        />
        <link rel="canonical" href="https://www.yourdomain.com/data-form" />
    </Helmet>

    <Header />
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-black/10 backdrop-blur-md shadow-md rounded-md w-full max-w-md p-6">
        
        {/* 2. Semantic Heading: Changed h1 to h2 (since H1 is typically on the main landing page) */}
        <h2 className="text-2xl font-semibold text-white mb-4">Required Data for Price Analysis</h2>
        
        {/* 3. Semantic Tag: Wrapped form elements in a single <form> tag with handler */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          
          {/* 4. Form Field Grouping for A11Y (though simple divs suffice here) */}
          
          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-white">
              Category <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="category"
              name="category" // 5. Added 'name' attribute for proper form submission
              required // 6. Added 'required' attribute
              placeholder="e.g., shirt, pants"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          {/* Subcategory */}
          <div>
            <label htmlFor="subcategory" className="block text-sm font-medium text-white">
              SubCategory
            </label>
            <input
              type="text"
              id="subcategory"
              name="subcategory" // Added 'name' attribute
              placeholder="e.g., parachute pants, trouser pants"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          {/* Fabric */}
          <div>
            <label htmlFor="fabric" className="block text-sm font-medium text-white">
              Fabric <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="fabric"
              name="fabric" // Added 'name' attribute
              required // Added 'required' attribute
              placeholder="e.g., cotton, polyester"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          {/* Color */}
          <div>
            <label htmlFor="color" className="block text-sm font-medium text-white">
              Color <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="color"
              name="color" // Added 'name' attribute
              required // Added 'required' attribute
              placeholder="e.g., red, blue, black"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          {/* Product User (Select) */}
          <div>
            <label htmlFor="productUser" className="block text-sm font-medium text-white">
              Target User <span className="text-red-400">*</span> {/* Renamed label for better clarity */}
            </label>
            <select 
              id="productUser"
              name="productUser" // Added 'name' attribute
              required // Added 'required' attribute
              defaultValue="none" // Set the option with 'hidden' attribute as default
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="none" disabled hidden>Select Target User Group</option> {/* Improved placeholder */}
              <option value="kids">Kids</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
          </div>
          
          {/* Image Upload */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-white">
              Product Image (Optional for AI Analysis)
            </label>
            <input
              type="file"
              id="image"
              name="productImage" // Added 'name' attribute
              accept="image/*"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              aria-describedby="image-help-text" // A11Y linking
            />
             <p id="image-help-text" className="mt-1 text-xs text-gray-400">
                Upload a clear image for the most accurate visual feature analysis.
            </p>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit" // 7. Preserved 'type="submit"' for form handler
            className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-800 focus:outline-none"
            aria-live="polite" // 8. Added aria-live for screen reader feedback (in a loading scenario)
          >
            Get Price Recommendation
          </button>
        </form>
      </div>
    </div>
    </>

  );
}

export default DataFormPage;