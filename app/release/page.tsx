import About from '@/components/about'
import HomeSection from '@/components/home'
import OpenSource from '@/components/opensource'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <main>
      <section className='flex justify-center items-center h-[60vh] gap-8'>
        <div>
            <h1 className='text-2xl font-semibold'>v0.0.1-a.5</h1>
            <p className='p-2 opacity-50'>11/06/2024</p>
           
        </div>
        <div>
                <h1 className='flex gap-2 items-center p-3'>
                <svg width="14" height="14" viewBox="0 0 88 88" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" className="opacity-60"><path d="m0,12.402,35.687-4.8602,0.0156,34.423-35.67,0.20313zm35.67,33.529,0.0277,34.453-35.67-4.9041-0.002-29.78zm4.3261-39.025,47.318-6.906,0,41.527-47.318,0.37565zm47.329,39.349-0.0111,41.34-47.318-6.6784-0.0663-34.739z"></path></svg>
                    <span>Windows</span>
                </h1>
                <Link href="/v0-main.exe">
                <button className='w-[200px] bg-neutral-900 p-3 rounded-md border-[1px] border-neutral-800'>
                    <span>Download now</span>
                </button>
                </Link>
            </div>
      </section>
      <footer className='flex items-center justify-around'>
        <section>
          <h1 className='text-xl'>@ 2024 Zeus Industries</h1>
        </section>
        <section>
          <h1 className='text-2xl font-semibold'>Product</h1>
          <Link href="/release" className='p-2'>
            Download
          </Link>
        </section>
      </footer>
    </main>
  )
}

export default Home