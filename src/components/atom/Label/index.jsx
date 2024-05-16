import React from 'react'

export default function Label(props) {
  const {htmlFor, children,style } = props;
    return (
        <label htmlFor={htmlFor} className={`${style} block font-medium mb-1`} >
            {children}
        </label>
  )
}
