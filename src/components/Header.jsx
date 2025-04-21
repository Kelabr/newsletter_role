"use client"

import Image from "next/image"

export default function Header(){
    return(
        <header className="sticky top-0 p-2 border-b-1 border-gray-200 shadow bg-white z-10">
            <div className="relative h-10 w-10">
                <Image
                src="/logo.svg"
                fill
                alt="logo"/>            
            </div>

    
        </header>
    )


    
}