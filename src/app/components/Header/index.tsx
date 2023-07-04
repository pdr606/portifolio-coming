import Image from "next/image";
import style from "./style.module.css";

export default function Header() {
  return (
    <header className={style.Header}>
      <h1>PEDRO &#128011;</h1>
      <Image
        className={style.Icon}
        src="/images/moon.png"
        width={24}
        height={24}
        alt="Moon Icon"
      />
    </header>
  );
}
