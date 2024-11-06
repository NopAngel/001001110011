import React from 'react'

function OpenSource() {
  return (
    <div className='border-y-[1px] border-neutral-800 w-full py-10'>
        <section></section>
        <section>
            <h1 className='text-xl font-semibold'>Open Source</h1>
            <p className='text-slate-200'>
            Contribute and help development!
            </p>
            
            <a href="https://github.com/NopAngel/zeus">
            <button className='bg-white text-black rounded-full p-2 px-4 my-6'>
                <span>Start Contribute</span>
            </button>
            </a>
        </section>
        <section></section>
    </div>
  )
}

export default OpenSource