import React from "react";

import { Link, NavLink } from "react-router-dom";

//
// 1. JS HTTP Client Library(Function) [fetch or axios] 공부. (데이터 요청)
// 2. (1)에서 전달받은 데이터로 컴포넌트에 렌더링하기(디자인 신경 X)

export default function Navbar() {
  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <a href="contact.asp">Contact</a>
        </li>
        <li>
          <a href="about.asp">About</a>
        </li>
      </ul>
    </div>
  );
}
