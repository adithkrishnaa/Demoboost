import React from 'react'


const Footer = () => {
  return (
    <footer>
        <div className="container mx-auto py-10">
            <div className='flex flex-wrap lg:flex-nowrap  m-5 gap-3 '>
                <div className='w-full lg:w-1/4  m-5'>
                   <h1 className=' text-4xl font-bold my-2'>demo<span className=' text-blue-950'>bo<span className='-m-2'>o</span><span className='pl-2'>st</span></span></h1>
                    <button className=' border-2 border-gray-400 rounded-md  text-black hover:bg-blue-800 hover:text-white hover:shadow-inner mr-10 px-4 py-1 text-lg font-semibold'>
                    Login</button>
                    <button className=' bg-blue-700  text-white px-2 py-1.5 hover:text-black hover:shadow-inner hover:bg-blue-100 rounded-md hover:border-2 hover:border-black text-xl font-semibold '>Book a Demo</button>
                </div>
                <div className=' lg:w-1/4 m-5 '>
                    <ul><h1 className='text-lg text-gray-500 font-semibold'>USE CASES </h1>
                        <li className='font-semibold text-lg text-blue-950'><a href="market">Marketing</a></li>
                        <li className='font-semibold text-lg text-blue-950'><a href="bussines">Business Development</a></li>
                        <li className='font-semibold text-lg text-blue-950'><a href="sales">Sales</a></li>
                        <li className='font-semibold text-lg text-blue-950'><a href="customer">Customer Success & Training</a></li>
                    </ul>
                </div>
                <div className=' lg:w-1/4 m-5 '>
                    <ul><h1 className='text-lg text-gray-500 font-semibold'>PRODUCT</h1>
                        <li className='font-semibold text-lg text-blue-950'><a href="work">How it works</a></li>
                        <li className='font-semibold text-lg text-blue-950'><a href="about">About</a></li>
                        <li className='font-semibold text-lg text-blue-950'><a href="career">Careers </a><span className=' text-blue-700 text-sm pl-2'>We're hiring!</span></li>
                    </ul>
                </div>
                <div className=' lg:w-1/4 m-5'>
                    <ul> <h1 className='text-lg text-gray-500 font-semibold'>RESOURCES</h1>
                        <li className='font-semibold text-lg text-blue-950'><a href="document">Documentation</a></li>
                        <li className='font-semibold text-lg text-blue-950'><a href="partner">Partners</a></li>
                        <li className='font-semibold text-lg text-blue-950'><a href="privacy">Privacy Policy</a></li>
                        <li className='font-semibold text-lg text-blue-950'><a href="gdpr">GDPR Policy</a></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer