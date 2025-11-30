// import React from 'react'

// const DetailsForm = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default DetailsForm


import React from 'react';
import { Helmet } from 'react-helmet-async'; // Required for basic metadata and robots tag

const DetailsForm = () => {
  
  // Placeholder state management for a controlled component (Best practice)
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    zip: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission/validation here
    console.log("Details Submitted:", formData);
  };

  return (
    <>
      {/* 👑 1. Helmet: Minimal Metadata & Noindex 👑 */}
      <Helmet>
        <title>Account Details | Update Information</title>
        {/* Set robots to 'noindex' to prevent search engines from crawling this transactional page */}
        <meta name="robots" content="noindex, follow" />
        {/* Canonical link for robustness, pointing to the main protected route */}
        <link rel="canonical" href="https://www.yourdomain.com/account/details" />
      </Helmet>

      {/* 2. Semantic Structure: Use <main> or <section> */}
      <main className="py-12 px-4 max-w-lg mx-auto" role="main">
        <header className="mb-8 text-center">
          {/* 3. Heading Hierarchy: Using h2 for the page title */}
          <h2 className="text-3xl font-bold text-white">Update Your Account Details</h2>
          <p className="text-gray-400 mt-2">Ensure your information is accurate for seamless service.</p>
        </header>

        {/* 4. Form Semantics: Use the <form> tag with proper handler */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-dark-900 p-8 rounded-lg shadow-xl border border-neon-blue/20">
          
          {/* 5. Fieldset for Logical Grouping: Personal Info */}
          <fieldset className="space-y-4">
            <legend className="text-xl font-semibold text-neon-blue border-b border-neon-blue/30 pb-2 mb-4">Personal Information</legend>
            
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-white mb-1">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required // 6. A11Y/UX: Required Attribute
                placeholder="John Doe"
                className="w-full input-field"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email" // 7. Semantic Type: Use type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
                className="w-full input-field"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
                Phone Number
              </label>
              <input
                type="tel" // 7. Semantic Type: Use type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 555-5555"
                className="w-full input-field"
              />
            </div>
          </fieldset>
          
          {/* 5. Fieldset for Logical Grouping: Address */}
          <fieldset className="space-y-4 pt-4 border-t border-gray-700">
            <legend className="text-xl font-semibold text-neon-blue border-b border-neon-blue/30 pb-2 mb-4">Mailing Address</legend>
            
            {/* Street Address */}
            <div>
              <label htmlFor="street" className="block text-sm font-medium text-white mb-1">
                Street Address <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                required
                placeholder="123 Main St"
                className="w-full input-field"
              />
            </div>

            {/* City & Zip Code in a grid for alignment */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-white mb-1">
                  City <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="San Francisco"
                  className="w-full input-field"
                />
              </div>
              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-white mb-1">
                  Zip Code <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                  placeholder="94107"
                  className="w-full input-field"
                />
              </div>
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full btn-neon py-3 mt-6"
            aria-live="assertive" // 8. A11Y: Feedback for submission status
          >
            Save Changes
          </button>
        </form>
      </main>
    </>
  );
};

export default DetailsForm;