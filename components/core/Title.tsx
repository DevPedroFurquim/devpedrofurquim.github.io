import React from 'react'

type TitleType = {
    title: string;
}

function Title({ title }: TitleType) {

    return (
        <h2 className={"text-lg md:text-xl font-semibold mb-1" }
        >{ title }</h2>
    )

}

export default Title