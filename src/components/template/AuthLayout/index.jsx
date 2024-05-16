import React from 'react'
import { Link } from 'react-router-dom'

export default function AuthLayout(props) {
    const { children, title, desc, type} = props
  return (
    <>
    <div className='flex justify-center items-center w-full '>
        <div className='rounded-lg bg-[#e95756] p-1 w-96 '>
            <div className='w-full max-w-screen border rounded-lg p-14 bg-[#fff0e9]'>
                <h1 className='text-center text-4xl font-bold mb-2 text-[#e95756]'>
                    {title} </h1>
                    <p className='text-center font-medium text-slate-500 mb-6'>{desc}</p>
                    {children}

                 {type === "login" ? (
                    <p className='text-sm mt-5 text-center'>
                        Gapunya akun? {" "}
                        <Link to="/registerPage" className='text-[#e95756] font-bold'> Daftar </Link>
                    </p>
                ) : (
                    <p className='text-sm mt-5 text-center'>
                        udah punya akun? {" "}
                        <Link to="/loginPage" className='text-[#e95756] font-bold'> Login lah</Link>
                    </p>
                )} 

                </div>
            </div>
        </div>
   
    </>
  )
  
}
