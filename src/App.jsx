import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import headphone from "./assets/headphone.svg"
import headphone2 from "./assets/headphone2.svg"
import headphone3 from "./assets/headphone3.svg"
import tablet from "./assets/tablet.svg"
import tablet2 from "./assets/tablet2.svg"
import tablet3 from "./assets/tablet3.svg"
import mobile from "./assets/mobile.svg"
import mobile2 from "./assets/mobile2.svg"
import mobile3 from "./assets/mobile3.svg"
import img1 from "./assets/img1.svg"
import img2 from "./assets/img2.svg"
import img3 from "./assets/img3.svg"
import Footer from './components/footer/Footer'

function App() {
  const arr = [
    {
      img: headphone,
      tablet: tablet,
      mobile: mobile,
      title: "XX99 Mark II Headphones",
      desc: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      istrue: "NEW PRODUCT"
    },
    {
      img: headphone2,
      tablet: tablet2,
      mobile: mobile2,
      title: "XX99 Mark I Headphones",
      desc: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    },
    {
      img: headphone3,
      tablet: tablet3,
      mobile: mobile3,
      title: "XX59 Headphones",
      desc: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    }
  ]
  const category = [
    {
      img: img1,
      type: "HEADPHONES"
    },
    {
      img: img2,
      type: "SPEAKERS"
    },
    {
      img: img3,
      type: "EARPHONES"
    }
  ]
  return (
    <>
      <Header category={category} />
      <Hero />
      <Main arr={arr} category={category} />
      <Footer />
    </>
  )
}

export default App
