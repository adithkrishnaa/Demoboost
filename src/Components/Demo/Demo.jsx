import React from 'react'

const Demo = () => {
  return (
    <section className='my-10  lg:mx-20 lg:my-5'>
        <div className=' bg-blue-600 py-16 lg:rounded-2xl lg:flex'>
            <div className='px-8 lg:px-16 lg:w-2/3  '>
                <h1 className=" text-white text-5xl font-bold">Join the demo experience revolution</h1>
                <p className='text-white mt-5 text-lg '>Demos have come a long way from the traditional product demo video consumers were once familiar with. Learn how interactive software demos can showcase your product in all its glory, revolutionizing the way you sell and transforming the way your customers buy.</p>
            </div>
            <div className=' lg:w-1/3 mx-5 my-auto lg:pl-28'>
            <button className='mt-6 w-full lg:w-auto lg:px-3  py-3 text-black hover:shadow-2xl bg-blue-100 rounded-md text-xl font-small'>Book a Demo</button>
            </div>
        </div>
    </section>
  )
}

export default Demo