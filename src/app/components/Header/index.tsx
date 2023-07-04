'use client'

import Image from "next/image";
import style from "./style.module.css";
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
      <Image
        className={style.Icon}
        src={darkMode ? "/images/sun-moon.png" : "/images/moon-black.png"}
        width={24}
        height={24}
        alt="Moon Icon"
        onClick={(e) => changeMode(e)} 
      />
    </header>
  );
}
