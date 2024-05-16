import React from 'react'
import AuthLayout from '../components/template/AuthLayout'
import Login from '../components/organism/Login'

export default function LoginPage() {
    return (
  
        <>

     <div className="flex justify-center items-center bg-center w-screen h-screen bg-[url('../../public/images/beefburger.png')] object-center bg-cover">
        
        <AuthLayout title="Login" desc="silahkan masuk" type="login">
        <Login>
        </Login>
        </AuthLayout>
    </div>
       
       </>
    

    )
}




