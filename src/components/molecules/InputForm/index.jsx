import React, { Children } from "react";
import Input from "../../atom/Input";
import Label from "../../atom/Label";

export default function InputForm(props) {
  const { label, htmlFor, name, type, placeholder, children, size } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} size={size}>
        {children}
      </Input>
    </div>
  );
}
