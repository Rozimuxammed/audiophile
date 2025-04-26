import { useState } from "react"
import logo from "../../assets/logo.svg"
import menu from "../../assets/menu.svg"
import shopping from "../../assets/shopping.svg"
import obj from "../navbar/Navbar.module.css"
import Category from "../category/Category"
export default function Navbar({ category }) {
    const [menuBar, SetMenuBar] = useState(false)
    return (
        <>
            <nav className={obj.navbar} >
                <div className={obj.container} >
                    <div className={obj.logo_menu}>
                        <img onClick={() => {
                            SetMenuBar(!menuBar)
                        }} className={obj.menu} src={menu} alt="" />
                        <a href="#"> <img src={logo} alt="logo image" /></a>
                    </div>
                    <ul className={obj.lists}>
                        <li><a className={obj.link} href="#">HOME</a></li>
                        <li><a className={obj.link} href="#">HEADPHONES</a></li>
                        <li><a className={obj.link} href="#">SPEAKERS</a></li>
                        <li><a className={obj.link} href="#">EARPHONES</a></li>
                    </ul>
                    <img className={obj.shopping_logo} src={shopping} alt="shopping icon" />
                </div>
            </nav>
            {menuBar && (
                <Category category={category} />
            )}
        </>
    )
}
