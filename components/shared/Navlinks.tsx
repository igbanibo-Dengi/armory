import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Navlinks = () => {
    return (
        <div className='flex gap-4 items-center'>
            <div className='flex gap-4 items-center'>
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
            <SignedIn>
                <UserButton afterSignOutUrl='/' />
            </SignedIn>
        </div>
    )
}

export default Navlinks