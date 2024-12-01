import React from 'react'
import Image from 'next/image'
import picture from '../../public/pic.jpg'

function HeroPic() {
    return (
        <div className='relative w-20 h-20 mb-12'>
            <Image src={ picture } layout='fill' className='rounded-full' />
            <div className='absolute -bottom-3 -right-4 bg-white px-2.5 py-2 rounded-full shadow-xl shadow-black/10'>
            👋
            </div>
        </div>
    )
}

export default HeroPic