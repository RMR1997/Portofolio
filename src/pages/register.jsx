import React from 'react'
import AuthLayout from '../components/template/AuthLayout'
import Register from '../components/organism/Register'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center bg-center w-screen h-screen bg-[url('../../public/images/beefburger.png')] object-center bg-cover">
    <AuthLayout title="Register" desc="Register" type="register">
    <Register></Register>
    </AuthLayout>
    </div>
  )
}
