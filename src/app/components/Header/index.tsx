'use client'

import Image from "next/image";
import style from "./style.module.css";
import {BsFillMoonFill} from 'react-icons/bs'
import {useState} from 'react'

export default function Header() {
  const [darkMode, setDarkMode]  = useState<boolean>(false)

  const changeMode = (e:any) => {
    const bodyElement = document.querySelector('body')
    bodyElement?.classList.toggle('dark')
    setDarkMode(!darkMode)
  }


 
  return (
    <header className={style.Header}>
      <h1>PEDRO &#128011;</h1>
      <p onClick={(e) => changeMode(e) } >
      {darkMode ? <BsFillMoonFill/> : <BsFillMoonFill/>}
      </p>
    </header>
  );
}
