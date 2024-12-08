import React from 'react'
import Title from '../core/Title'
import IconLink from '../core/IconLink'
import Text from '../core/Text'

type IHProps = {
    title: string;
    style?: string;
    text:string;
    label: string;
    url?: string;
    bioStack: string
}

export default function HeadignWithText({title, style, text, label, url, bioStack} : IHProps) {
  return (
    <div>
      <Title title={title}/>
      <Text text={text}/>
      <Text text={bioStack}/>
      <IconLink label={label} href={url}/>
    </div>
  )
}
