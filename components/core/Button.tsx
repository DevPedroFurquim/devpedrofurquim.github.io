import React from 'react'


type ButtonType = {
    label: string
}

function Button({ label }: ButtonType) {
    return (
        <button className='mt-4 text-lg font-semibold opacity-60 hover:opacity-100 hover:translate-x-1 transition duration-300'>
            { label }
        </button>
    )
}

export default Button