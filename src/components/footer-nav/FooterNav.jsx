import logo from "../../assets/logo.svg"
import obj from "../footer-nav/FooterNav.module.css"


export default function FooterNav() {
    return (
        <nav>
            <div className={obj.nav}>
                <img src={logo} alt="" />
                <ul className={obj.lists}>
                    <li><a className={obj.link} href="#">Home</a></li>
                    <li><a className={obj.link} href="#">HEADPHONES</a></li>
                    <li><a className={obj.link} href="#">SPEAKERS</a></li>
                    <li><a className={obj.link} href="#">EARPHONES</a></li>
                </ul>
            </div>
        </nav>
    )
}
