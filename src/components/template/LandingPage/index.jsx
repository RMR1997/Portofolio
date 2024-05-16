import React from 'react'
import DashboardDescription from '../../molecules/DashboardDesc'
import Image from '../../atom/Image'
import Button from '../../atom/Button'
 
  
  export default function LPContent() {
    return (
        <>
        <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col justify-center items-center bg-[#fff0e9] w-full h-full  pt-28  '>
            <div className='text-center mt-10'>
          <DashboardDescription margin="mt-10 " textColor="text-[#e95756]" title="WELCOME TO OUR PAGE"> <h1 className='text-3xl font-bold mb-10 text-[#e95756]'>The Best Fast Food Are Here</h1>
          </DashboardDescription>
            </div>
          <Image size="w-1/3 " align="" image="public/images/fastfood.png"></Image>
        </div>
        </div>
        
        
        
        </>
        
    )
  }
  