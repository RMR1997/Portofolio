import React from 'react'

export default function Image(props) {
    const {image , size, align} = props;
  return (
    <img src={image} alt="gambar" className={`p-4 rounded-t-lg ${size} ${align}` } />
  )
}
