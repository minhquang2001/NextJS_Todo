'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/geekup-logo-general.svg'
function Header() {
    return (
        <header>
            <Link href="/" className='header__wrap'>
                <Image src={Logo} alt="logo" />
            </Link>
            <Link href="/todo" className='header__todo'>Todo</Link>

        </header>
    )
}

export default Header
