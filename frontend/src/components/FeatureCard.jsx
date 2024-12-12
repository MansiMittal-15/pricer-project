import React from 'react'

const FeatureCard = ({color1, color2, title, description}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to top right, ${color1}, ${color2})`
  };
  return (
    <div style={gradientStyle} 
    className={`w-[250px] sm:w-[300px] md:w-[300px] h-[250px] ... relative border-2 rounded-xl p-2 my-2 border-blue-950 `}>
      <h1 className='text-2xl font-medium'>{title}</h1>
      <div className='bg-teal-300'></div>
      <p className='text-lg font-light my-2'>{description}</p>
      <button aria-label={`learn more about ${title}`}
      className='bg-white p-2 rounded-xl hover:bg-slate-200 border-2 text-end absolute bottom-2 border-black'>Learn More</button>
    </div>
  )
}

export default FeatureCard
