import React from 'react'
import Title from '../core/Title'
import IconLink from '../core/IconLink'
import Text from '../core/Text'

type IHProps = {
    title: string;
    style?: string;
    text:string;
    label: string;
}

export default function HeadignWithText({title, style, text, label} : IHProps) {
  return (
    <div>
      <Title title={title}/>
      <Text text={text}/>
      <IconLink label={label}/>
    </div>
  )
}
