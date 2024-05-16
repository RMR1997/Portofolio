import React from "react";
import Button from "../../atom/Button";
import InputForm from "../../molecules/InputForm";

export default function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("terklik login");
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/";
    alert("Mantap Bang Login dah sono");
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        size="w-full"
        label="Email"
        type="email"
        name="email"
        placeholder="Masukan Email"
      />
      <InputForm
        size="w-full"
        label="Password"
        type="password"
        name="password"
        placeholder="Masukan Password"
      />
      <Button size="w-full" color="bg-[#e95756] hover:bg-blue-700">
        Login
      </Button>
    </form>
  );
}
