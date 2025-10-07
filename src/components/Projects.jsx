import React from 'react'

const Projects = () => {
  return (
    <div className='mt-32 text-white' id='Projects'>
        
        <div className='project1 flex relative  items-center mb-40'>
            <div className='desc w-full relative translate-x-8 z-50 '>
                <h2 className='text-purple-600 font-semibold'>Project 1</h2>
                <h3 className='text-2xl mb-5 font-semibold opacity-90'>Url-Shortener</h3>
                <p className='text-sm bg-slate-100 bg-opacity-10 opacity-90 p-5 rounded-xl backdrop-blur-3xl'>The URL Shortener project allows users to generate short links for long URLs. It uses JSON for data handling, Local Storage for saving shortened links on the client side, and PHP for backend processing and redirection. It provides a simple and efficient way to manage and access URLs easily.</p>
                  <button className='border mt-5 px-3 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-sm hover:text-purple-300 hover:border-purple-300 '>downlaod</button>
            </div>
            <div className='w-4/5  relative scale-110 '>
           <div className='absolute z-10 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-300 to-purple-900 blur-3xl opacity-90 translate-x-44'></div>

             <img className='h-max w-full object-cover rounded-2xl relative z-20' src="src\assets\pro1.png" alt="" /></div>
        </div>



        <div className='project2 flex relative  items-center mb-20'>
           <div className='w-4/5  relative  scale-110 translate-x-8'>
            <div className='absolute z-10 w-64 h-64 rounded-full bg-gradient-to-tl from-blue-300 to-purple-900 blur-3xl opacity-90 '></div>
            <img className='h-max w-full object-cover rounded-2xl relative z-20' src="src\assets\pro2.png" alt="" /></div>
            <div className='desc w-full relative  z-50 flex flex-col items-end text-right'>
                <h2 className='text-purple-600 font-semibold text-right'>Project 2</h2>
                <h3 className='text-2xl mb-5 font-semibold opacity-90 text-right'>Internship Portal</h3>
                <p className='text-sm bg-slate-100 bg-opacity-10 opacity-90 p-5 rounded-xl backdrop-blur-3xl'>An internship portal where users upload their resumes, which are converted into embeddings for skill-based matching with internship listings. The system automatically sends the best-matched resumes to recruiters, making the selection process fast and efficient.</p>
                  <button className='border mt-5 px-3 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-sm hover:text-purple-300 hover:border-purple-300 '>downlaod</button>
            </div>
           
        </div>

    </div>
  )
}

export default Projects 