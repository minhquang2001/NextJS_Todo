'use client'
import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/geekup-logo-general.svg'
function Header() {
    return (
        <header>
            <div className='header__wrap'>
                <Image src={Logo} alt="logo" />
                {/* <h3>Test</h3> */}
            </div>
            <span>Todo</span>
        </header>
    )
}

export default Header
