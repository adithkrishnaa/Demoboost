import React from 'react';
import icon from '../Assets/Icon.png';
import group from '../Assets/Group.png';
import phone from '../Assets/phone.png';
import click from '../Assets/click.png';
import pres from '../Assets/prp.png';

const Result = () => {
  return (
    <section className=' lg:py-28'>
        <div className=' container mx-auto '>
            <div className='py-20'>
                <h1 className='text-center text-3xl lg:text-lg lg: text-gray-500'>RESULT</h1>
                <h1 className='py-8 text-5xl text-center font-bold text-blue-950'>What can you expect ?</h1>
            </div>
        </div>
        <div className=' lg:mx-10 lg:mt-16' >
            <div className='flex flex-wrap lg:flex-nowrap lg:gap-3 '>
                <div className='text-center w-full lg:w-1/5 bg-slate-200 rounded-xl p-10 mx-6 lg:p-8'>
                    <div>
                        <img className=' mx-auto -mt-20' src={icon} alt="" />
                    <h1 className=' my-3 text-xl font-semibold text-blue-950'>Building demos with your team</h1>
                    <p className=' text-zinc-700 '>Throughout our contract,not just during onboarding.</p>
                    </div>
                </div>
                <div className='text-center w-full mt-20 lg:mt-0 lg:w-1/5 bg-slate-200 rounded-xl p-10 mx-6 lg:p-8'>
                    <div>
                        <img className=' mx-auto -mt-20' src={group} alt="" />
                    <h1 className=' my-3 text-xl font-semibold text-blue-950'>Demo ideas & best practices</h1>
                    <p className=' text-zinc-700 '>What's the best format & narrative of the demo.</p>
                    </div>
                </div>
                <div className='text-center w-full mt-20 lg:mt-0 lg:w-1/5 bg-slate-200 rounded-xl p-10 mx-6 lg:p-8'>
                    <div>
                        <img className=' mx-auto -mt-20' src={phone} alt="" />
                    <h1 className=' my-3 text-xl font-semibold text-blue-950'>How to leverage your demos</h1>
                    <p className=' text-zinc-700 '>Where you could/should apply demos with Demoboost?</p>
                    </div>
                </div>
                <div className='text-center w-full mt-20 lg:mt-0 lg:w-1/5 bg-slate-200 rounded-xl p-10 mx-6 lg:p-8'>
                    <div>
                        <img className=' mx-auto -mt-20' src={click} alt="" />
                    <h1 className=' my-3 text-xl font-semibold text-blue-950'>Reviewing & improving demos</h1>
                    <p className=' text-zinc-700 '>while teaching you the best demo practises adjusted to your product.</p>
                    </div>
                </div>
                <div className='text-center w-full mt-20 lg:mt-0 lg:w-1/5 bg-slate-200 rounded-xl p-10 mx-6 lg:p-8'>
                    <div>
                        <img className=' mx-auto -mt-20' src={pres} alt="" />
                    <h1 className=' my-3 text-xl font-semibold text-blue-950'>Being your partner in crime</h1>
                    <p className=' text-zinc-700 '>any project you work on,we can work together and save your time!</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Result