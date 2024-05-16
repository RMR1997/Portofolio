import React from 'react'
import Button from '../../atom/Button'
import InputForm from '../../molecules/InputForm'


export default function Register() {
    const handleRegister = (event) => {
        event.preventDefault();
        console.log("terklik login")
        console.log(event.target.firstName.value);
        console.log(event.target.lastName.value);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        localStorage.setItem("firstName",event.target.firstName.value)
        localStorage.setItem("lastName",event.target.lastName.value)
        localStorage.setItem("email",event.target.email.value)
        localStorage.setItem("password",event.target.password.value)
       
        window.location.href = "/loginPage";
        alert('Register Sukses bang dah sono login')
      };
  return (
    <>
    
    <form onSubmit={handleRegister}>
        <div className='flex w-fit gap-5'>
        <InputForm size="w-32" label="First Name" name="firstName" type="firstName" placeholder="First Name"/>    
        <InputForm size="w-32" label="Last Name" name="lastName" type="lastName" placeholder="Last Name"/>
        </div>
        <InputForm label="Email" type="email" name="email" placeholder="Masukan Email"/>
        <InputForm label="Password" type="password" name="password" placeholder="Masukan Password"/>
        <div className='flex text-center justify-center items-center w-full '>
        <Button size="w-full" color="bg-[#e95756]">Register</Button>
        </div>
        
    </form>
   
    </>
  
   
  )
}
