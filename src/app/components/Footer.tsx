import React from 'react'
import Content from './Content'

const Footer = () => {
    return (
        <div
            className='relative h-[800px]'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='fixed bottom-0 h-[300px] md:h-[600px] w-full'>
                <Content />
            </div>
        </div>
    )
}

export default Footer
