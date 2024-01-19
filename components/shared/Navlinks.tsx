'use client'

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Navlinks = () => {
    return (
        <nav className='bg-transparent flex flex-col md:flex-row justify-center items-center gap-4 '>
            <div className='flex flex-col justify-center items-center gap-4 '>
                <Link href="/">
                    Home
                </Link>
                <Link href="/">
                    Explore
                </Link>
                <Link href="/profile">
                    My Loadouts
                </Link>
            </div>
            <SignedOut>
                <Button asChild size="sm">
                    <Link href="/sign-in">Login</Link>
                </Button>
            </SignedOut>
        </nav>
    )
}

export default Navlinks