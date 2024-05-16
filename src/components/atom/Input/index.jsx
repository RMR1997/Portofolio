import React from 'react'

export default function Input(props) {
    const {type, placeholder, name, text, size} = props;
    return (
    <input 
    type={type}
    className={` ${size} text-sm border rounded-md py-2 px-3 text-black placeholder:text-slate-400`}
    placeholder={placeholder}
    name={name}
    id={name}
    >{text}</input>
  )
}
