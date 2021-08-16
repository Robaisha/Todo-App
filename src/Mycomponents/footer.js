import React from "react";

export default function footer() {
  let footerstyle=
  {
    position : "relative",
    width : "100%",
    top :  "70vh",
    border : "3px blue"
  }
  return (
    <footer className="bg-dark text-light" style={footerstyle}>
      <p className="text-center">Copyright &copy; My Todos list.com</p>
    </footer>
  );
}
