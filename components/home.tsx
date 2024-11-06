import React from 'react'

function HomeSection() {
  return (
    <div>
        <div className='bg-neutral-800 p-2 w-fit px-6 mx-auto rounded-full border-[1px] border-neutral-700 text-xs'>
            Alpha
        </div>
        <h1 className='text-4xl font-semibold'>The <span>future</span> of editors. </h1>
        <p className='text-slate-200 mt-3'>Zeus is a perfect editor for collaborations and projects,<br /> and the next future of AI</p>
        <div className='grid grid-cols-2 gap-6 w-[500px] mx-auto mt-8'>
            <a href="/release">
            <button className='bg-white text-black p-3 px-5 rounded-full'>
                <span>Download Zeus</span>
            </button>
            </a>
            <a href="https://github.com/NopAngel/zeus">
            <button>
                <span>GitHub</span>
            </button>
            </a>
        </div>
    </div>
  )
}

export default HomeSection