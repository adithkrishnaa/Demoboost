import React from 'react'
import img from '../Assets/img.png'

const Hero = () => {
  return (
    <section className=' py-10 bg-slate-200 flex rounded-bl-2xl '>
        <div className=' justify-items-center lg:flex lg:gap-10 flex-row p-5 lg:p-10 mx-auto'>
            <div className=' w-full lg:w-1/2 lg:ml-5'>
                <h5 className=' text-zinc-600 text-2xl lg:text-md font-medium '>OUR CUSTOMER SUCCESS PROMISE</h5>
                <h1 className=' text-blue-950 text-4xl lg:text-6xl font-bold py-4 lg:py-6'>Instant Time to Value</h1>
                <h6 className=' text-blue-900  py-3 pb-6 font-semibold text-xl'>Unleash the power of an automated demo library with a minimal effort: Demoboost supports you with all the hard work, allowing you to quickly capitalize on automated demo platform and increase your long-term value. </h6>
                <p className=' flex text-blue-900 font-medium py-3 text-xl'><span className='flex text-blue-700 pr-2 '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-7">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                </svg></span>We build the demos for you even before you sign the contract.</p>
                <p className=' flex text-blue-900 font-medium py-3 text-xl'><span className='flex text-blue-700 pr-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-7">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                </svg></span>We support you throughout, no limits.At no additional cost.</p>
                <p className=' flex  text-blue-900 font-medium  py-3 text-xl'><span className='flex text-blue-700 pr-2 '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-7">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                </svg></span>We share the best practice,playbooks & ideas.</p>
                <button className='w-full lg:w-auto lg:px-4 mt-6 bg-blue-700 text-white py-3 hover:text-black hover:shadow-2xl hover:bg-blue-100 rounded-md text-lg font-small'>Book a Demo</button>
            </div>
            <div className=' justify-self-center mt-6 lg:mt-0 p-0 lg:pl-20'>
              <div className='flex mx-auto w-full lg:selection:w-1/2'>
                <img className=' lg:absolute  rounded-full' src={img} alt="" />
                <div className=' border-spacing-12 absolute p-3 lg:p-6 bg-white shadow-2xl  mt-80 pl-5 rounded-xl  '>
                  <h1 className='text-blue-950 text-xl font-semibold'>Gabriel Sokol</h1>
                  <h2 className=' text-gray-600 font-semibold'>Senior Customer Success Manager @ Demoboost</h2>
                </div>
              </div>
            </div>
        </div>  

    </section>
  )
}

export default Hero