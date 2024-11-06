import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='py-3 border-b-[1px] border-neutral-800'>
        <nav>
            <ul className='flex justify-around'>
                <section>
                    <li>
                        <span className='text-xl font-semibold'>
                            Zeus
                        </span>
                    </li>
                </section>
                <section className='flex gap-6'>
                    <li>
                        <Link href="https://github.com/NopAngel">
                        GitHub
                        </Link>
                    </li>
                    <li>
                        <Link href="/github">
                        Releases
                        </Link>
                    </li>

                </section>
                <section>
                    <li>
                        <div>
                            <span className='bg-neutral-800 p-2 rounded-md text-xs'>v0.0.1-a.5</span>
                        </div>
                    </li>
                </section>
            </ul>
        </nav>
    </header>
  )
}

export default Header