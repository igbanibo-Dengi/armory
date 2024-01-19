import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
    return (
        <nav className='py-5'>
            <div className='container px-10'>

                <Image
                    src="/logo-main.svg"
                    alt='logo'
                    width={100}
                    height={50}
                />
                <SignedOut>
                    <Button asChild size={"lg"}>
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl='/'></UserButton>
                </SignedIn>
            </div>
        </nav>
    )
}

export default Header