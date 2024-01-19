'use client'

import Image from 'next/image'
import React from 'react'
import Navlinks from './Navlinks'
import { useRouter } from 'next/navigation'

const Header = () => {
    const pathname = useRouter();
    return (
        <nav className='py-5 border-b-2'>
            <div className='container flex justify-between px-10'>

                <Image
                    src="/logo-main.svg"
                    alt='logo'
                    width={100}
                    height={50}
                />
                <Navlinks />
            </div>
        </nav>
    )
}

export default Header