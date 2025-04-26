import "../header/Header.css"
import Navbar from "../navbar/Navbar"
export default function Header({ category }) {
    return (
        <header>
            <Navbar category={category} />
        </header>
    )
}
