import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import headphone from "./assets/headphone.svg"
import headphone2 from "./assets/headphone2.svg"
import headphone3 from "./assets/headphone3.svg"
import img1 from "./assets/img1.svg"
import img2 from "./assets/img2.svg"
import img3 from "./assets/img3.svg"
import Footer from './components/footer/Footer'

function App() {
  const arr = [
    {
      img: headphone,
      title: "XX99 Mark II Headphones",
      desc: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      istrue: "NEW PRODUCT"
    },
    {
      img: headphone2,
      title: "XX99 Mark I Headphones",
      desc: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    },
    {
      img: headphone3,
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
      <Header />
      <Hero />
      <Main arr={arr} category={category} />
      <Footer/>
    </>
  )
}

export default App
