import FooterNav from "../footer-nav/FooterNav"
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/tewitter.svg"
import instagram from "../../assets/instagramm.svg"
import obj from "../footer/Footer.module.css"
export default function Footer() {
    return (
        <footer className={obj.footer}>
            <div className="container">
                <FooterNav />
                <div className={obj.footer_hero}>
                    <div className={obj.footer_hero_text}>
                        <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                        </p>
                        <p>Copyright 2021. All Rights Reserved
                        </p>
                    </div>
                    <div className={obj.social_media}>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
