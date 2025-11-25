import React from 'react'
// 1. Import Helmet for metadata management
import { Helmet } from 'react-helmet-async'; 

const DetailsForm = () => {
  return (
    <>
      {/* 2. Metadata Section (Crucial for SEO) */}
      <Helmet>
        {/* Replace placeholders with unique, keyword-rich content */}
        <title>Fill Out Your Details | [Your App Name]</title>
        <meta 
          name="description" 
          content="Provide your personal or order details securely to proceed with your booking or registration on [Your App Name]." 
        />
        {/* Canonical Link: Use the exact, preferred URL for this page */}
        <link rel="canonical" href="https://www.yourwebsite.com/details-form" />

        {/* Control Indexing: If this page is internal (like a checkout step), use noindex */}
        {/* <meta name="robots" content="noindex, follow" /> */} 
      </Helmet>

      {/* 3. Semantic HTML Structure */}
      <div className="details-form-container max-w-[800px] mx-auto p-6">
        
        {/* H1: The single most important heading for the page's main topic */}
        <h1 className="text-3xl font-bold mb-6">Enter Your Booking Details</h1>
        
        {/* FORM: Use the <form> tag for accessibility and proper submission handling */}
        <form onSubmit={(e) => { e.preventDefault(); /* handle form submission here */ }}>
          
          {/* Example Input Field Group */}
          <section className="input-group mb-4">
            {/* H2: Use to title a major section of the form */}
            <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
            
            <label htmlFor="fullname" className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              required
              aria-required="true" // A11y best practice
              placeholder="e.g., Jane Doe"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </section>

          {/* Additional input sections would go here */}

          <button 
            type="submit" 
            className="mt-6 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Continue to Payment
          </button>
        </form>
        
        {/* Aside: Use for non-essential, related content like a privacy notice */}
        <aside className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded">
          <p className="text-xs text-gray-600">
            By submitting this form, you agree to our <a href="/privacy" className="text-purple-600">Privacy Policy</a>.
          </p>
        </aside>
      </div>
    </>
  )
}

export default DetailsForm