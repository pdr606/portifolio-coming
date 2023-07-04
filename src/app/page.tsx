import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Header />
      <About />
    </>
  );
}
