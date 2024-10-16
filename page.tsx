import Image from "next/image";
import styles from "./page.module.css";
import link from "next/link";
import Header from "./Components/Header/header";
import Herosection from "./Components/HeroSection/hero"
import CTA from "./Components/CTA/cta"
import Footer from "./Components/Footer/footer";

export default function Home() {
  return (
    <div className={styles.page}>
    
    <Header></Header>

    <Herosection></Herosection>

    <CTA></CTA>

    <Footer></Footer>

    </div>
  );
}
