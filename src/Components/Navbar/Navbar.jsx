import React from 'react'

const Navbar = () => {
  return (
    <nav className=' bg-blue-950 p-5 flex'>
        <div className='m-0'>
        <h1 className=' text-4xl font-bold text-white my-2'>demo<span className=' text-blue-600'>bo<span className='-m-2'>o</span><span className='pl-2'>st</span></span></h1>
        </div>
        <div className=' hidden lg:block  '>
        <div className='mx-auto my-3 flex'>
            <ul className='flex mx-auto gap-6 pl-24'>
                <li className='text-xl text-white'><a href="home">Your Success</a></li>
                <li className='text-xl text-white'><a href="home"> <span className='flex'>Platform <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -7 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg></span> 
                </a></li>
                <li className='text-xl text-white'><a href=" home"> <span className='flex'>Solution <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -7 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg></span> 
                </a></li>
                <li className='text-xl text-white'><a href=" home"> <span className='flex'>Resources<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -7 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg></span> 
                </a></li>
                <li className='text-xl text-white'><a href=" home"> <span className='flex'>Company <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -7 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg></span> 
                </a></li>
            </ul>
            <div className='flex ml-16'>
            <h6 className='text-xl text-white mt-1 mr-10'><span className='flex'>EN<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 -7 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg></span></h6>
            <button className=' bg-transparent rounded-md  hover:bg-slate-200 shadow-md hover:text-black mr-10  text-white px-3 text-lg'>
            Login
          </button>
          <button className=' bg-blue-700  text-white px-2 hover:text-black hover:shadow-2xl hover:bg-blue-100 rounded-md text-lg font-small'>Book a Demo</button>
          </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar