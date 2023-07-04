import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Footer/>
    </>
  );
}
