import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



export default function Content() {

    return (
        <div className='py-8 px-12 h-full w-full flex flex-col justify-between items-center md:items-start'>
            <Section1 />
            <Section2 />
        </div>
    )

}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}



const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[8vw] md:text-[10vw] leading-[0.8] mt-10'>Verbevida</h1>
            <p className='text-xs md:text-sm pl-4'>© 2024 All rights reserved.</p>
        </div>
    )
}


const Nav = () => {

    return (

        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase font-semibold'>About</h3>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/project'>Projects</Link>
                <Link href='/contact'>Contact</Link>
            </div>

            <div className='flex flex-col gap-2'>

                <h3 className='mb-2 uppercase font-semibold'>Contact</h3>
                <div className='w-10 h-10 rounded-full border overflow-hidden flex justify-center items-center'>
                    <a  href="https://www.linkedin.com/in/sasita-srisura-14300133a/" target="_blank" rel="noopener noreferrer">
                        <Image src='https://www.svgrepo.com/show/450202/linkedin.svg' alt='' width={30} height={30}/>
                    </a>
                </div>
                <div className='w-10 h-10 rounded-full border overflow-hidden flex justify-center items-center'>
                    <a  href="https://github.com/Applessr" target="_blank" rel="noopener noreferrer">
                        <Image src='https://www.svgrepo.com/show/391458/github.svg' alt='' width={30} height={30}/>
                    </a>
                </div>
   
            </div>

        </div>

    )

}