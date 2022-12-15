import React from "react"

interface ButtonCompProps {
  children?: React.ReactNode
  textcolor?: string
}

const ButtonComp = ({ children, textcolor }: ButtonCompProps) => {
  return (
    <button
      style={{
        padding: "1rem",
        backgroundColor: "#f00",
        color: textcolor,
        border: "none",
        boxShadow: "0 0 5px 0 #33333366",
      }}
    >
      {children}
    </button>
  )
}

export default ButtonComp
