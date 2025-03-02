import React from "react";

const FAQs = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-24 ">
      <div className="flex flex-col gap-16 mx-10">
        <div className="flex justify-center flex-col items-center w-[60%] mx-auto gap-4 ">
          <h1 className="text-5xl">Frequently Asked Questions</h1>
          <p className="text-center">
            Get clear, data-driven answers to your pricing questions. Explore
            our FAQ section for insights on optimizing your product pricing and
            maximizing revenue.
          </p>
        </div>
        <div className="flex flex-col gap-4">
            <details className="bg-slate-200 p-4 flex flex-col gap-4 rounded-lg cursor-pointer">
                <summary className="text-2xl ">What is Pricer and how does it work?</summary>
                <p className="mx-6 ">Pricer is an AI-powered price recommendation system that helps startups optimize their product pricing to maximize revenue. It analyzes market trends, competitor pricing, and consumer behavior to suggest the best price points for your products.</p>
            </details>
            <details className="bg-slate-200 p-4 flex flex-col gap-4 rounded-lg cursor-pointer">
                <summary className="text-2xl ">How can Pricer help my startup increase revenue?</summary>
                <p className="mx-6 ">By using data-driven insights, Pricer recommends optimal pricing strategies that balance competitiveness and profitability, ensuring you don’t underprice or overprice your products.</p>
            </details>
            <details className="bg-slate-200 p-4 flex flex-col gap-4 rounded-lg cursor-pointer">
                <summary className="text-2xl ">Does Pricer work for all types of products?</summary>
                <p className="mx-6 ">Yes! Pricer can analyze and recommend pricing for a wide range of products, from electronics and fashion to SaaS services and digital goods.</p>
            </details>
            <details className="bg-slate-200 p-4 flex flex-col gap-4 rounded-lg cursor-pointer">
                <summary className="text-2xl ">How does Pricer determine the best price for my product?</summary>
                <p className="mx-6 ">Pricer uses advanced machine learning algorithms that consider factors such as market demand, competitor pricing, historical sales data, and customer behavior to generate pricing recommendations.</p>
            </details>
            <details className="bg-slate-200 p-4 flex flex-col gap-4 rounded-lg cursor-pointer">
                <summary className="text-2xl ">Can I integrate Pricer with my e-commerce platform?</summary>
                <p className="mx-6 ">Yes! Pricer supports integration with popular e-commerce platforms and APIs, making it easy to automate pricing updates and implement recommendations.</p>
            </details>
            <details className="bg-slate-200 p-4 flex flex-col gap-4 rounded-lg cursor-pointer">
                <summary className="text-2xl ">How often does Pricer update pricing recommendations?</summary>
                <p className="mx-6 ">The frequency of updates depends on the market dynamics and your business preferences. You can configure Pricer to provide daily, weekly, or real-time pricing suggestions.</p>
            </details>
            <details className="bg-slate-200 p-4 flex flex-col gap-4 rounded-lg cursor-pointer">
                <summary className="text-2xl ">Is Pricer suitable for small businesses and startups?</summary>
                <p className="mx-6 ">Absolutely! Pricer is designed to help businesses of all sizes, especially startups looking to establish competitive and profitable pricing strategies.</p>
            </details>
            <details className="bg-slate-200 p-4 flex flex-col gap-4 rounded-lg cursor-pointer">
                <summary className="text-2xl ">What makes Pricer different from other pricing tools?</summary>
                <p className="mx-6 ">Unlike standard pricing tools, Pricer leverages AI to analyze competitor pricing, market trends, and demand elasticity, offering strategic insights rather than just static price suggestions.</p>
            </details> 
        </div>
      </div>
    </div>
  );
};

export default FAQs;
