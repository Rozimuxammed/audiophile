import logo from "../../assets/logo.svg"
import shopping from "../../assets/shopping.svg"
import obj from "../navbar/Navbar.module.css"
export default function Navbar() {
    return (
        <nav className={obj.navbar}>
            <div className={obj.container} >
                <a href="#"> <img src={logo} alt="logo image" /></a>
                <ul className={obj.lists}>
                    <li><a className={obj.link} href="#">HOME</a></li>
                    <li><a className={obj.link} href="#">HEADPHONES</a></li>
                    <li><a className={obj.link} href="#">SPEAKERS</a></li>
                    <li><a className={obj.link} href="#">EARPHONES</a></li>
                </ul>
                <img className={obj.shopping_logo} src={shopping} alt="shopping icon" />
            </div>
        </nav>
    )
}
