import clsx from 'clsx'
import React from 'react'

const Title = ({title,className,...props}) => {
  return <h2 className={clsx("font-medium tracking-tight text-gray-900",className)}{...props}>
    {title}
  </h2>
}

export default Title