import React from 'react'

type TextType = {
    text: string;
}

function Text({ text }: TextType) {
    return (
        <p className='text-base text-md font-normal text-gray-600 dark:text-gray-300 leading-6 mb-4'>{ text }</p>
    )
}

export default Text