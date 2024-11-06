import About from '@/components/about'
import HomeSection from '@/components/home'
import OpenSource from '@/components/opensource'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <main>
      <section className='flex justify-center items-center h-[80vh] text-center'>
        <HomeSection />
      </section>
      <section className='flex justify-center items-center h-[50vh] text-center'>
        <About />
      </section>
      <section className='flex justify-center items-center h-[50vh] text-center'>
        <OpenSource />
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