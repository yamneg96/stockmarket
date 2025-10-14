import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from "@/components/NavItems";
import DropdownMenu from "@/components/UserDropdown";

const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image
                        className="h-8 w-auto cursor-pointer"
                        src="/assets/icons/logo.svg" alt="Signalist" width={140} height={32}/>
                </Link>
                <nav className="hidden sm:block">
                    <NavItems />
                </nav>
                <DropdownMenu />
            </div>
        </header>
    )
}
export default Header
